import React from 'react';
import { useState, useEffect } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';

import { AllSelectOptions } from '../../../../types/AllSelectOptions';
import { Job, defaultJob } from '../../../../types/User';
import PersonalDetails from './Steps/PersonalDetails';
import PreviousJobsStep from './Steps/PreviousJobs';
import NextJob from './Steps/NextJob';
import styles from './ProgressBarStyle';

interface ProgressBarProps {
    allSelectOptions: AllSelectOptions | null;
}

const ProgressBar: React.FC<ProgressBarProps> = (props): JSX.Element => {
    const classes = styles();
    const { allSelectOptions } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedRoleId, setSelectedRoleId] = useState<number>(allSelectOptions?.roleOptions[0].id || 0);
    const [selectedRankId, setSelectedRankId] = useState<number>(allSelectOptions?.standardOptions[0].id || 0);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [enteredPrevJob, setEnteredPrevJob] = useState<Job>(defaultJob);
    const [previousJobs, setPreviousJobs] = useState<Job[]>([]);
    const [jobName, setJobName] = useState<string>("");
    const [nextRoles, setNextRoles] = useState<number[]>([]);
    const [aboutMe, setAboutMe] = useState<string>("");
    const steps = ["פרטים אישיים", "ג'ובים קודמים", "הג'וב הבא"];

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <PersonalDetails
                    roles={allSelectOptions?.roleOptions || []}
                    ranks={allSelectOptions?.standardOptions || []}
                    selectedRoleId={selectedRoleId} setSelectedRoleId={setSelectedRoleId}
                    selectedRankId={selectedRankId} setSelectedRankId={setSelectedRankId}
                    phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />;
            case 1:
                return <PreviousJobsStep
                    units={allSelectOptions?.unitOptions || []}
                    branches={allSelectOptions?.branchOptions || []}
                    deparments={allSelectOptions?.departmentOptions || []}
                    enteredPrevJob={enteredPrevJob}
                    setEnteredPrevJob={setEnteredPrevJob}
                    previousJobs={previousJobs}
                    setPreviousJobs={setPreviousJobs}
                    jobName={jobName}
                    setJobName={setJobName} />;
            case 2:
                return <NextJob
                    roles={allSelectOptions?.roleOptions || []}
                    nextRoles={nextRoles}
                    setNextRoles={setNextRoles}
                    aboutMe={aboutMe}
                    setAboutMe={setAboutMe} />;
            default:
                return 'Unknown step';
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical"
                classes={{ root: classes.stepper }}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel classes={{ root: classes.stepLabel, iconContainer: classes.iconContainer, label: classes.label }}>
                            {label}
                        </StepLabel>
                        <StepContent classes={{ root: classes.stepContent }}>
                            <div className={classes.specificStepContet}>
                                {getStepContent(index)}
                            </div>
                            <div className={classes.actionsContainer}>
                                {activeStep !== 0 &&
                                    <Button
                                        onClick={handleBack}
                                        className={classes.button} >
                                        הקודם
                                    </Button>}
                                {
                                    activeStep !== steps.length - 1 ?
                                        <Button
                                            onClick={handleNext}
                                            className={classes.button}>
                                            הבא
                                        </Button> :
                                        <Button
                                            onClick={() => { }}
                                            className={classes.button}>
                                            שמור
                                        </Button>
                                }
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default ProgressBar;