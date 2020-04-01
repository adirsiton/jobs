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
import { Role } from '../../../types/Role';
import { Standard } from '../../../types/Standard';
import { DepartmentData, DepartmentsManager, EMPTY_DEPARTMENT } from '../../../types/Departments';
import DepartmentInput from './DepartmentInput';
import JobRoleInput from './JobRoleInput';
import JobStandardsInput from './JobStandardsInput';
import JobEntryDateInput from './JobEntryDateInput';
import JobSeniorityInput from './JobSeniorityInput';
import JobDamachInput from './JobDamachInput';
import JobNicknameInput from './JobNicknameInput';
import JobDescriptionInput from './JobDescriptionInput';

interface PostNewJobProps {
    closeDialog: () => void;
}

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

    const getJobRequirementsFields = (): JSX.Element => {
        return (
            <>
                <JobRoleInput setRole={setRole} />
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
            <DepartmentInput department={department} setDepartment={setDepartment} />
            {getJobRequirements()}
            <JobNicknameInput 
                jobNickname={jobNickname}
                setJobNickname={setJobNickname} />
            <JobDescriptionInput 
                jobDescription={jobDescription}
                setJobDescription={setJobDescription} />
            {/* {getContactInformation()} */}
        </DialogContent>
        <DialogActions>
            {getPostButton()}
        </DialogActions>
      </Dialog>
  );
}

export default PostNewJob;
