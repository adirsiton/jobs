import * as React from 'react';
import { useState, useEffect } from 'react';

import swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import Like from '../../../../../../assets/icons/Like.svg';
import styles from './PostNewJobStyles';
import JobBaseLocationInput from './JobBaseLocationInput';
import { BaseLocation, NO_BASE_LOCATION } from '../../../../../types/BaseLocation';
import DepartmentInput from './DepartmentInput';
import { DepartmentData, DepartmentsManager, EMPTY_DEPARTMENT } from '../../../../../types/Departments';
import JobNicknameInput, { isJobNicknameInValidLength } from './JobNicknameInput';
import JobRoleInput from './JobRoleInput';
import { Role, NO_ROLE } from '../../../../../types/Role';
import JobStandardsInput from './JobStandardsInput';
import { Standard } from '../../../../../types/Standard';
import JobEntryDateInput, { MONTH_DISPLAY_FORMAT } from './JobEntryDateInput';
import JobSeniorityInput from './JobSeniorityInput';
import JobDamachInput from './JobDamachInput';
import JobDescriptionInput, { isJobDescriptionInValidLength } from './JobDescriptionInput';
import JobContactInformationInput, { isContactInfoLegal } from './JobContactInformationInput';
import { ContactInformation, EMPTY_CONTACT_INFORMATION } from '../../../../../types/ContactInformation';
import { NEW_JOB_COLOR } from '../../../../../assets/projectJSS/Colors';
import { addNewAd } from '../../../../../server/ads';
import { format } from 'date-fns';
import { AllSelectOptions } from '../../../../../types/AllSelectOptions';

interface PostNewJobProps {
    allSelectOptions: AllSelectOptions;
    closeDialog: () => void;
    fetchAllAdsAfterPost: () => void;
}

const PostNewJob: React.FC<PostNewJobProps> = (props): JSX.Element => {
    const { allSelectOptions, closeDialog, fetchAllAdsAfterPost } = props;
    const classes = styles({});
    
    // useStates, Ordered by the display view (Top to bottom)
    const [baseLocation, setBaseLocation] = useState<BaseLocation>(NO_BASE_LOCATION);    
    const [department, setDepartment] = useState<DepartmentData>(EMPTY_DEPARTMENT);
    const [jobNickname, setJobNickname] = useState<string>('');
    const [role, setRole] = useState<Role>(NO_ROLE);
    const [standards, setStandards] = useState<Standard[]>([]);
    const [shouldChooseDate, setShouldChooseDate] = useState<boolean>(false);
    const [dateInError, setDateInError] = useState<boolean>(false);
    const [entryDate, setEntryDate] = useState<MaterialUiPickersDate>(null);
    const [shouldHaveSeniority, setShouldHaveSeniority] = useState<boolean>(false);
    const [yearsInSeniority, setYearsInSeniority] = useState<number>(1);
    const [shouldHaveDamach, setShouldHaveDamach] = useState<boolean>(false);
    const [jobDescription, setJobDescription] = useState<string>('');
    const [isPostButtonDisabled, setIsPostButtonDisabled] = useState<boolean>(false);
    const [didValidate, setDidValidate] = useState<boolean>(false); // Validation is tested after click on post button
    const [contactInformation, setContactInformation] = useState<ContactInformation>(EMPTY_CONTACT_INFORMATION);

    useEffect(() => {
        const isInputFull: boolean = 
            baseLocation.id !== NO_BASE_LOCATION.id &&
            DepartmentsManager.isDepartmentSelected(department) &&
            role.id !== NO_ROLE.id &&
            standards.length > 0 &&
            (!shouldChooseDate || (!dateInError && entryDate !== null)) &&
            isContactInfoLegal(contactInformation);

            setIsPostButtonDisabled(!isInputFull);
    }, [baseLocation, department, role, standards, shouldChooseDate, entryDate, dateInError, contactInformation]);

    useEffect(() => {
        if (didValidate) {
            // TODO After comments on validations
        }
    }, [didValidate]);

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
                    setBaseLocation={setBaseLocation}
                    allBaseLocationOptions={allSelectOptions.baseLocationOptions} />
                <DepartmentInput 
                    department={department} 
                    setDepartment={setDepartment} 
                    allUnitOptions={allSelectOptions.unitOptions} />
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
                    didValidate={didValidate} />
                <JobRoleInput
                    role={role} 
                    setRole={setRole}
                    allRoleOptions={allSelectOptions.roleOptions} />
                <JobStandardsInput 
                    standards={standards}
                    setStandards={setStandards}
                    allStandardOptions={allSelectOptions.standardOptions} />
                <JobEntryDateInput
                    shouldChooseDate={shouldChooseDate}
                    setShouldChooseDate={setShouldChooseDate}
                    entryDate={entryDate}
                    setEntryDate={setEntryDate}
                    dateInError={dateInError}
                    setDateInError={setDateInError} />
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

    const createNewPost = async (): Promise<void> => {
        if (isAllInputValid()) {
            try {
                await addNewAd({
                    baseLocation,
                    departmentData: department,
                    jobNickname,
                    role,
                    standards,
                    entryDate: entryDate ? format(entryDate!, MONTH_DISPLAY_FORMAT): '', // Empty means Immediately, format: MM/YY (No need for days atm)
                    yearsInSeniority: shouldHaveSeniority ? yearsInSeniority : 0,
                    shouldHaveDamach,
                    jobDescription,
                    contactInformation
                });
                fetchAllAdsAfterPost();
                closeDialog();
                const upperText = `פרסמנו את הג'וב ועכשיו אפשר יהיה למצוא אותו במסך הראשי,`;
                const lowerText =  'ברגע שתהיה התעניינות כלשהי בתפקיד נדאג לעדכן אותך מי המועמדים.';
                swal.fire({
                    title: 'יש אישור!',
                    imageUrl: Like,
                    imageHeight: 60,
                    imageWidth: 60,
                    html: `<Typography>${upperText}</Typography></br></br><Typography>${lowerText}</Typography>`,
                    width: '68ch',
                    confirmButtonText: '<Typography>אחלה, תודה</Typography>',
                    confirmButtonColor: NEW_JOB_COLOR ,
                });               
            }
            catch(error) {
                swal.fire({
                    title: 'קרתה שגיאה',
                    icon: 'error',
                    text: 'הייתה שגיאה בניסיון הוספה מודעה חדשה, נסו שנית'
                });
            }
        } else {
            setDidValidate(true);
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
            >
                <span> { /* Span is for the tooltip, when button is disabled */ }
                    <Button 
                        className={classes.postButton}
                        classes={{
                            label: classes.postButtonLabel,
                            startIcon: classes.postButtonIcon,
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
                didValidate={didValidate} />
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
