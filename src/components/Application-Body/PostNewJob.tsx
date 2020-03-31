import * as React from 'react';
import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
// import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import styles from './PostNewJobStyles';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DepartmentData, DepartmentsManager, EMPTY_DEPARTMENT } from '../../types/Departments';
import { Role, ROLE_DISPLAYS } from '../../types/Role';
import { Standard, STANDARD_DISPLAYS } from '../../types/Standard';

interface PostNewJobProps {
    closeDialog: () => void;
}

const JOB_NICKNAME_MAX_LENGTH = 35;

const today = new Date();

const PostNewJob: React.FC<PostNewJobProps> = ({ closeDialog }): JSX.Element => {
    const classes = styles({});
    
    const [department, setDepartment] = useState<DepartmentData>(EMPTY_DEPARTMENT);
    const [role, setRole] = useState<Role>(Role.NO_ROLE);
    const [standards, setStandards] = useState<Standard[]>([]);
    const [shouldChooseDate, setShouldChooseDate] = useState<boolean>(false);
    const [entryDate, setEntryDate] = useState<MaterialUiPickersDate>(null);
    const [shouldHaveSeniority, setShouldHaveSeniority] = useState<boolean>(false);
    const [yearsInSeniority, setYearsInSeniority] = useState<number>(1);
    const [shouldHaveDamach, setShouldHaveDamach] = useState<boolean>(false);
    const [jobNickname, setJobNickname] = useState<string>('');
    const [jobDescription, setJobDescription] = useState<string>('');
    const [isPostButtonDisabled, setIsPostButtonDisabled] = useState<boolean>(false);

    useEffect(() => {
        const isInputFull: boolean = DepartmentsManager.isDepartmentSelected(department) &&
            role !== Role.NO_ROLE &&
            standards.length > 0 &&
            (!shouldChooseDate || entryDate !== null);

            setIsPostButtonDisabled(!isInputFull);
    }, [department, role, standards, shouldChooseDate, entryDate]);

    const getTitle = (): JSX.Element => {
        return (
            <DialogTitle 
                className={classes.dialogTitle}
            >
                <Typography className={classes.dialogTitleText}>
                    פרסום תפקיד חדש
                </Typography>
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
        const departmentFieldMenuItems = (field: string): JSX.Element[] => {
            return DepartmentsManager.getDepartmentFieldOptions(department, field).map(value => 
                <MenuItem key={value} value={value}>
                    {value}
                </MenuItem>
            );
        }

        const selectors: JSX.Element[] = DepartmentsManager.getDepartmentFields().map(field => {
            const menuItems: JSX.Element[] = departmentFieldMenuItems(field);
            const isDisabled: boolean = menuItems.length === 0;
            const tooltipTitle: string = DepartmentsManager.getSelectToolTip(isDisabled, field);

            return (
                <div 
                    className={classes.departmentField}
                    key={field}
                >
                    <Typography>
                        {DepartmentsManager.getDepartmentFieldDisplay(field)}
                    </Typography>
                    <Tooltip 
                        title={tooltipTitle}
                        classes={{ 
                            tooltip: classes.tooltip
                        }}
                    >
                        <Select
                            className={classes.select}
                            classes={{
                                icon: classes.selectIcon,
                                disabled: classes.selectDisabled
                            }}
                            disabled={isDisabled}
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
                                setDepartment(DepartmentsManager.updateDepartment(department, field, event.target.value))}
                        >
                            {menuItems}
                        </Select>
                    </Tooltip>
                </div>
            )
        });
        
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

    const getJobRole = (): JSX.Element => {
        const radioes = ROLE_DISPLAYS.map(jobRole => 
            <FormControlLabel
                key={jobRole}
                value={jobRole} 
                control={<Radio onClick={() => setRole(jobRole)} />} 
                label={jobRole} 
            />
        );
        return (
            <div className={classes.jobRole}>
                <Typography>
                    תפקיד
                </Typography>
                <RadioGroup row>
                    {radioes}
                </RadioGroup>
            </div>
        );
    }

    const getJobStandard = (): JSX.Element => {
        const standardCheckboxes: JSX.Element[] = STANDARD_DISPLAYS.map(standard => 
            <div className={classes.checkboxField} key={standard}>
                <Checkbox 
                    className={classes.checkbox}
                    icon={<CircleUnchecked className={classes.checkboxIcon} />} 
                    checkedIcon={<CircleCheckedFilled className={classes.checkboxIcon} />}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                        setStandards(
                            event.target.checked 
                                ? [...standards, standard]
                                : standards.filter(selectedStandard => selectedStandard !== standard)
                        )
                    } />
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
                {getJobRole()}
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

    const getJobNickname = (): JSX.Element => {
        return (
            <>
                <Typography>
                    שם התפקיד
                </Typography>
                <TextField 
                    className={classes.jobNicknameText}
                    placeholder='למשל: מפתח צוות תכנון שו"ב'
                    value={jobNickname}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                        setJobNickname(event.target.value)
                    }
                    inputProps={{
                        maxLength: JOB_NICKNAME_MAX_LENGTH
                    }}
                />
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
                    value={jobDescription}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => 
                        setJobDescription(event.target.value)
                    }                    
                />
            </>
        );
    }

    const createNewPost = (): void => {
        closeDialog();
    }

    const getPostButton = (): JSX.Element => {
        const tooltipTitle: string = 
            isPostButtonDisabled 
                ? "יש למלא את כל השדות"
                : "";

        return (
            <Tooltip 
                title={tooltipTitle}
                classes={{ 
                    tooltip: classes.tooltip
                }}
            >
                <span>
                    <Button 
                        className={classes.postButton}
                        classes={{
                            label: classes.postButtonLabel,
                            startIcon: classes.postButtonIcon,
                            disabled: classes.postButtonDisabled
                        }}
                        disabled={isPostButtonDisabled}
                        variant="contained"
                        startIcon={<PostAddIcon />}
                        onClick={createNewPost}
                    >
                        <Typography className={classes.postButtonText}>
                            פרסום
                        </Typography>
                    </Button>
                </span>
            </Tooltip>
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
            {getJobNickname()}
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
