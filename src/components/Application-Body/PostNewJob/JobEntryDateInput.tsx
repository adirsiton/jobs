import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
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

const JobEntryDateInput: React.FC<JobEntryDateProps> = (props): JSX.Element => {
    const { shouldChooseDate, setShouldChooseDate, entryDate, setEntryDate } = props;

    const classes = styles({});

    const entryDateInput = (): JSX.Element => {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
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
                    label="שנה/חודש"
                    onChange={(date: MaterialUiPickersDate) => {if(date) setEntryDate(date)}} 
                    format="MM/yy"
                    minDate={today}
                    // maxDate={today}, TODO
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