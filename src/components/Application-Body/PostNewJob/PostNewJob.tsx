import * as React from 'react';
import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import styles from './PostNewJobStyles';
import JobBaseLocationInput from './JobBaseLocationInput';
import { BaseLocation } from '../../../types/BaseLocation';
import DepartmentInput from './DepartmentInput';
import { DepartmentData, DepartmentsManager, EMPTY_DEPARTMENT } from '../../../types/Departments';
import JobNicknameInput, { isJobNicknameInValidLength } from './JobNicknameInput';
import JobRoleInput from './JobRoleInput';
import { Role } from '../../../types/Role';
import JobStandardsInput from './JobStandardsInput';
import { Standard } from '../../../types/Standard';
import JobEntryDateInput from './JobEntryDateInput';
import JobSeniorityInput from './JobSeniorityInput';
import JobDamachInput from './JobDamachInput';
import JobDescriptionInput, { isJobDescriptionInValidLength } from './JobDescriptionInput';
import JobContactInformationInput from './JobContactInformationInput';
import { ContactInformation, EMPTY_CONTACT_INFORMATION } from '../../../types/ContactInformation';

interface PostNewJobProps {
    closeDialog: () => void;
}

const PostNewJob: React.FC<PostNewJobProps> = ({ closeDialog }): JSX.Element => {
    const classes = styles({});
    
    // useStates, Ordered by the display view (Top to bottom)
    const [baseLocation, setBaseLocation] = useState<BaseLocation>(BaseLocation.NO_BASE_LOCATION);    
    const [department, setDepartment] = useState<DepartmentData>(EMPTY_DEPARTMENT);
    const [jobNickname, setJobNickname] = useState<string>('');
    const [role, setRole] = useState<Role>(Role.NO_ROLE);
    const [standards, setStandards] = useState<Standard[]>([]);
    const [shouldChooseDate, setShouldChooseDate] = useState<boolean>(true/*Change to false */);
    const [entryDate, setEntryDate] = useState<MaterialUiPickersDate>(null);
    const [shouldHaveSeniority, setShouldHaveSeniority] = useState<boolean>(false);
    const [yearsInSeniority, setYearsInSeniority] = useState<number>(1);
    const [shouldHaveDamach, setShouldHaveDamach] = useState<boolean>(false);
    const [jobDescription, setJobDescription] = useState<string>('');
    const [isPostButtonDisabled, setIsPostButtonDisabled] = useState<boolean>(false);
    const [didValidationFail, setDidValidationFail] = useState<boolean>(false); // Validation is tested after click on post button
    const [contactInformation, setContactInformation] = useState<ContactInformation>(EMPTY_CONTACT_INFORMATION);

    useEffect(() => {
        const isInputFull: boolean = 
            baseLocation !== BaseLocation.NO_BASE_LOCATION &&
            DepartmentsManager.isDepartmentSelected(department) &&
            role !== Role.NO_ROLE &&
            standards.length > 0 &&
            (!shouldChooseDate || entryDate !== null);

            setIsPostButtonDisabled(!isInputFull);
    }, [baseLocation, department, role, standards, shouldChooseDate, entryDate]);

    useEffect(() => {
        if (didValidationFail) {
            // TODO After comments on validations
        }
    }, []);

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
                <Typography variant="subtitle1">
                    שיוך
                </Typography>
                <div className={classes.dashLine} />
            </div>
        );
    }

    const getDepartmentFields = (): JSX.Element => {
        return (
            <div className={classes.subtitlesMargin}
            >
                <JobBaseLocationInput
                    baseLocation={baseLocation}
                    setBaseLocation={setBaseLocation} />
                <DepartmentInput 
                    department={department} 
                    setDepartment={setDepartment} />
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
                    variant="subtitle1"
                >
                    פרטי התפקיד
                </Typography>
                <div className={classes.dashLine} />
            </div>
        );
    }

    const getJobRequirementsFields = (): JSX.Element => {
        return (
            <div 
                className={classes.subtitlesMargin}
            >
                <JobNicknameInput 
                    jobNickname={jobNickname}
                    setJobNickname={setJobNickname}
                    didValidationFail={didValidationFail} />
                <JobRoleInput
                    role={role} 
                    setRole={setRole} />
                <JobStandardsInput 
                    standards={standards}
                    setStandards={setStandards} />
                <JobEntryDateInput
                    shouldChooseDate={shouldChooseDate}
                    setShouldChooseDate={setShouldChooseDate}
                    entryDate={entryDate}
                    setEntryDate={setEntryDate} />
                <JobSeniorityInput
                    shouldHaveSeniority={shouldHaveSeniority}
                    setShouldHaveSeniority={setShouldHaveSeniority}
                    yearsInSeniority={yearsInSeniority}
                    setYearsInSeniority={setYearsInSeniority} />
                <JobDamachInput 
                    shouldHaveDamach={shouldHaveDamach}
                    setShouldHaveDamach={setShouldHaveDamach} />
            </div>
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

    const isAllInputValid = (): boolean => {
        return isJobNicknameInValidLength(jobNickname) &&
            isJobDescriptionInValidLength(jobDescription);
    }

    const createNewPost = (): void => {
        if (isAllInputValid()) {
            closeDialog();
        } else {
            setDidValidationFail(true);
        }
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
                <span> { /* Span is for the tooltip, when button is disabled */ }
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
        );
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
            <JobDescriptionInput 
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
                didValidationFail={didValidationFail} />
            <JobContactInformationInput 
                contactInformation={contactInformation}
                setContactInformation={setContactInformation}
            />
        </DialogContent>
        <DialogActions>
            {getPostButton()}
        </DialogActions>
      </Dialog>
  );
}

export default PostNewJob;
