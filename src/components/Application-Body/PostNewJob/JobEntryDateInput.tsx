import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import heLocale from "date-fns/locale/he";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import { DatePicker } from "@material-ui/pickers/DatePicker/DatePicker";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import styles from './PostNewJobStyles';
import SwitchInput from './SwitchInput';

interface JobEntryDateProps {
    shouldChooseDate: boolean;
    setShouldChooseDate: (shouldChooseDate: boolean) => void;
    entryDate: MaterialUiPickersDate;
    setEntryDate: (entryDate: MaterialUiPickersDate) => void;
}

const today: Date = new Date();
const nextYear: Date = new Date(new Date(today).setFullYear(today.getFullYear() + 1));

const JobEntryDateInput: React.FC<JobEntryDateProps> = (props): JSX.Element => {
    const { shouldChooseDate, setShouldChooseDate, entryDate, setEntryDate } = props;

    const classes = styles({});

    const entryDateInput = (): JSX.Element => {
        return (
            <MuiPickersUtilsProvider 
                utils={DateFnsUtils}
                locale={heLocale}
            >
                <DatePicker
                    clearable
                    disablePast
                    className={classes.datePicker}
                    inputProps={{
                        className: classes.datePickerInput,
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.datePickerLabel,
                        },
                        required: true
                    }}                    
                    value={entryDate}
                    okLabel='אישור'
                    cancelLabel='ביטול'
                    clearLabel='ניקוי'
                    label="שנה/חודש"
                    openTo='month' // We will most likely post a new job, in the same year                    
                    onChange={setEntryDate}
                    format="MM/yy"
                    minDate={today} // Hide previous years
                    maxDate={nextYear} // Job's entry date is relevant up to 12 months from today
                    views={["year", "month"]}
                />
            </MuiPickersUtilsProvider>
        );
    }

    return (
        <div className={classes.jobEntryDateFields}>
            <Typography className={classes.jobEntryDateTitle}>
                כניסה לתפקיד
            </Typography>
            <SwitchInput 
                leftText="תאריך"
                rightText="מיידי"
                checked={shouldChooseDate}
                setChecked={setShouldChooseDate} />
            { shouldChooseDate && entryDateInput()}
        </div>
    );    
}

export default JobEntryDateInput;