import * as React from 'react';
import { useState } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import { KeyboardDatePicker } from "@material-ui/pickers/DatePicker/DatePicker";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
// import { ParsableDate } from '@material-ui/pickers/constants/prop-types';

import DateFnsUtils from '@date-io/date-fns';
import heLocale from "date-fns/locale/he";
import format from 'date-fns/format';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addYears from 'date-fns/addYears';

import styles from './datePickerStyle';

const DATE_FORMAT = 'dd/MM/yy';
export const DISPLAY_FORMAT = 'dd/MM/yy';

interface DateInputProps {
    date: MaterialUiPickersDate;
    updateDate: (date: MaterialUiPickersDate) => void;
}

const today: Date = new Date();
const thisMonth: Date = startOfMonth(today);
const nextYear: Date = endOfMonth((addYears(today, 1)));

const DateInput: React.FC<DateInputProps> = (props): JSX.Element => {
    const { date, updateDate } = props;

    const classes = styles({});

    return (
        <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            locale={heLocale}
        >
            <KeyboardDatePicker
                autoOk
                className={classes.datePicker}
                inputProps={{
                    className: classes.datePickerInput,
                }}
                InputProps={{
                    disableUnderline: true,
                    dir: 'ltr'
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.datePickerLabel,
                    },
                    required: true
                }}
                InputAdornmentProps={{
                    position: "start",
                }}
                FormHelperTextProps={{
                    hidden: true
                }}
                value={date}
                placeholder={format(today, DATE_FORMAT)}
                okLabel=''
                cancelLabel=''
                minDateMessage='תאריך הכניסה לתפקיד צריך להיות עתידי'
                maxDateMessage='תאריך הכניסה לתפקיד יהיה לכל היותר שנה קדימה'
                invalidDateMessage='תאריך לא תקין'
                onBlur={() => {
                    
                }}
                openTo='date' // We will most likely post a new job, in the same year                    
                onChange={updateDate}
                format={DISPLAY_FORMAT}
                minDate={thisMonth} // Hide previous months
                maxDate={nextYear} // Job's entry date is relevant up to 12 months from today
                views={["year", "month", "date"]}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DateInput;