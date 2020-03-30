import * as React from 'react';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
// import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import styles from './PostNewJobStyles';
import { Switch, TextField, MenuItem } from '@material-ui/core';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface PostNewJobProps {
    closeDialog: () => void;
}


const today = new Date();

interface DepartmentObject {
    [key: string]: string
}

interface Department {
    unit: string;
    branch: string;
    department: string;
}


const DEPARTMENT_TO_DISPLAY: DepartmentObject = {
    unit: "יחידה",
    branch: "ענף",
    department: "מדור" 
};

const PostNewJob: React.FC<PostNewJobProps> = ({ closeDialog }): JSX.Element => {
    const classes = styles({});
    const [shouldChooseDate, setShouldChooseDate] = useState<boolean>(false);
    const [shouldHaveSeniority, setShouldHaveSeniority] = useState<boolean>(false);
    const [shouldHaveDamach, setShouldHaveDamach] = useState<boolean>(false);
    const [yearsInSeniority, setYearsInSeniority] = useState<number>(1);
    const [entryDate, setEntryDate] = useState<MaterialUiPickersDate>(null);
    const [department, setDepartment] = useState<Department & DepartmentObject>({
        unit: "",
        branch: "",
        department: ""
    });

    const getTitle = (): JSX.Element => {
        return (
            <DialogTitle className={classes.dialogTitle}>
                פרסום תפקיד חדש
            </DialogTitle>
        );
    }

    const getDepartmentHeader = (): JSX.Element => {
        return (
            <div className={classes.departmentHeader}>
                <Typography variant="caption">
                    שיוך
                </Typography>
                <div className={classes.dashLine} />
            </div>
        );
    }

    const getDepartmentFields = (): JSX.Element => {
        const updateDepartmentField = (field: string, value: string): void => {
            console.log(42);
            setDepartment({...department,
                [field]: value
            });
        }

        const selectors: JSX.Element[] = Object.keys(DEPARTMENT_TO_DISPLAY).map(field => 
            <div 
                className={classes.departmentField}
                key={field}
            >
                <Typography>
                    {DEPARTMENT_TO_DISPLAY[field]}
                </Typography>
                <Select
                    className={classes.select}
                    classes={{
                        icon: classes.selectIcon
                    }}
                    value={department[field]}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "center"
                        },
                        getContentAnchorEl: null
                    }}
                    onChange={(event: any) => 
                        updateDepartmentField(field, event.target.value)}
                >
                    <MenuItem 
                        key="1"    
                        value="1"
                    >
                        שילוביות
                    </MenuItem>
                </Select>
            </div>
        );
        
        return (
            <div className={classes.departmentFields}>
                {selectors}
            </div>
        );
    }

    const getDepartment = (): JSX.Element => {
        return (
            <> 
                {getDepartmentHeader()}
                {getDepartmentFields()}
            </>
        );
    }

    const getJobRequirementsHeader = (): JSX.Element => {
        return (
            <div className={classes.jobRequirementsHeader}>
                <Typography 
                    className={classes.jobRequirementsHeaderTitle}
                    variant="caption"
                >
                    דרישות התפקיד
                </Typography>
                <div className={classes.dashLine} />
            </div>
        );
    }

    const getJobStandard = (): JSX.Element => {
        const STANDARDS: string[] = ["סרן", 'רס"ן', 'רס"ל'];

        const standardCheckboxes: JSX.Element[] = STANDARDS.map(standard => 
            <div className={classes.checkboxField} key={standard}>
                <Checkbox 
                    className={classes.checkbox}
                    icon={<CircleUnchecked className={classes.checkboxIcon} />} 
                    checkedIcon={<CircleCheckedFilled className={classes.checkboxIcon} />} />
                <Typography>
                    {standard}
                </Typography>
            </div>
        );
        
        return (
            <div className={classes.standardFields}>
                <Typography className={classes.standardTitle}>
                    תקן
                </Typography>
                {standardCheckboxes}
            </div>
        );    
    }

    const getJobEntryDate = (): JSX.Element => {
        return (
            <div className={classes.jobEntryDateFields}>
                <Typography className={classes.jobEntryDateTitle}>
                    כניסה לתפקיד
                </Typography>
                <Typography>
                    מיידי
                </Typography>
                <Switch
                    className={classes.flippedSwitch}
                    checked={shouldChooseDate}
                    onChange={() => setShouldChooseDate(!shouldChooseDate)}           
                />
                <Typography>
                    תאריך
                </Typography>
                { shouldChooseDate &&
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
                }
            </div>
        );    
    }

    const getJobSeniority = (): JSX.Element => {
        const MAX_SENIORITY_IN_YEARS = 50;

        return (
            <div className={classes.jobSeniorityFields}>
                <Typography className={classes.jobSeniorityTitle}>
                    דרוש ותק?
                </Typography>
                <Typography>
                    לא
                </Typography>
                <Switch
                    className={classes.flippedSwitch}
                    checked={shouldHaveSeniority}
                    onChange={() => setShouldHaveSeniority(!shouldHaveSeniority)}           
                />
                <Typography>
                    כן
                </Typography>
                { shouldHaveSeniority && 
                    <TextField
                        classes={{
                            root: classes.numberInput
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.numberInputLabel,
                            },
                            required: true
                        }}
                        type="number"
                        value={yearsInSeniority}
                        label="ותק בשנים"
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const seniorityYearsInput = parseInt(event.target.value) | 1;

                            setYearsInSeniority(
                                Math.min(
                                    Math.max(1, seniorityYearsInput), 
                                    MAX_SENIORITY_IN_YEARS)
                                )
                        }}
                        inputProps={{
                            min: 1,
                            max: MAX_SENIORITY_IN_YEARS, // What is the maximum vetek a person might have? ^^
                            style: { // Couldn't do in jss, TODO
                                textAlign: "center"
                            }
                        }}
                    />
                }
            </div>
        );
    }

    const getJobDamach = (): JSX.Element => {
        return (
            <div className={classes.jobDamachFields}>
                <Typography className={classes.jobDamachTitle}>
                    מוכר לדמ"ח?
                </Typography>
                <Typography>
                    לא
                </Typography>
                <Switch
                    className={classes.flippedSwitch}
                    checked={shouldHaveDamach}
                    onChange={() => setShouldHaveDamach(!shouldHaveDamach)}           
                />
                <Typography>
                    כן
                </Typography>
            </div>
        );
    }    

    const getJobRequirementsFields = (): JSX.Element => {
        return (
            <>
                {getJobStandard()}
                {getJobEntryDate()}
                {getJobSeniority()}
                {getJobDamach()}
            </>
        );
    } 

    const getJobRequirements = (): JSX.Element => {
        return (
            <> 
                {getJobRequirementsHeader()}
                {getJobRequirementsFields()}
            </>
        );
    }

    const getJobDescription = (): JSX.Element => {
        const jobDescriptionPlaceHolder = "כאן כתוב תיאור של התפקיד ועוד דרישות של מי שפרסם את התפקיד, אנחנו נתן מקום לשלוש שורות ככה שאנשים יוכלו לחפור ולהתפלצן בכייף שלהם."

        return (
            <>
                <Typography>
                    תיאור התפקיד
                </Typography>
                <TextareaAutosize 
                    className={classes.jobDescriptionArea}
                    rowsMin={3}
                    rowsMax={3}
                    placeholder={jobDescriptionPlaceHolder}
                />
            </>
        );
    }

    const getPostButton = (): JSX.Element => {
        return (
            <Button 
                className={classes.postButton}
                variant="contained"
                onClick={closeDialog}
            >
                פרסום
            </Button>
        )
    }

    return (
      <Dialog
        fullWidth={true}
        open={true}
        onClose={closeDialog}
        PaperProps={{
            className: classes.dialogPaper
        }}
      >
        {getTitle()}
        <DialogContent className={classes.dialogContent}>
            {getDepartment()}
            {getJobRequirements()}
            {getJobDescription()}
            {/* {getContactInformation()} */}
        </DialogContent>
        <DialogActions>
            {getPostButton()}
        </DialogActions>
      </Dialog>
  );
}

export default PostNewJob;
