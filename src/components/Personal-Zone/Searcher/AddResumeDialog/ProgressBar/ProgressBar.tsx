import React from "react";
import { useState, useEffect } from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";

import { AllSelectOptions } from "../../../../../types/AllSelectOptions";
import { Job, defaultJob, UserResume } from "../../../../../types/User";
import PersonalDetails from "./Steps/PersonalDetails";
import PreviousJobsStep from "./Steps/PreviousJobs";
import NextJob from "./Steps/NextJob";
import styles from "./ProgressBarStyle";
import { UserStore } from "../../../../../store/UserStore";
import { observer, inject } from "mobx-react";
import { StepInfo, ResumeStep, initStepsValues } from "./Steps/Step";

interface ProgressBarProps {
    allSelectOptions: AllSelectOptions | null;
    userStore?: UserStore;
    closeDialog: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = (props): JSX.Element => {
    const classes = styles();
    const userStore: UserStore = props.userStore!;

    const { allSelectOptions, closeDialog } = props;

    const [activeStep, setActiveStep] = React.useState<ResumeStep>(
        ResumeStep.PERSONAL_DETAILS
    );
    const [selectedRoleId, setSelectedRoleId] = useState<number>(
        allSelectOptions?.roleOptions[0].id || 0
    );
    const [selectedRankId, setSelectedRankId] = useState<number>(
        allSelectOptions?.standardOptions[0].id || 0
    );
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [enteredPrevJob, setEnteredPrevJob] = useState<Job>(defaultJob);
    const [previousJobs, setPreviousJobs] = useState<Job[]>([]);
    const [jobName, setJobName] = useState<string>("");
    const [nextRoles, setNextRoles] = useState<number[]>([]);
    const [aboutMe, setAboutMe] = useState<string>("");
    const [steps, setSteps] = useState<StepInfo[]>(initStepsValues);

    const getStepContent = (step: ResumeStep): JSX.Element => {
        switch (step) {
            case ResumeStep.PERSONAL_DETAILS:
                return (
                    <PersonalDetails
                        roles={allSelectOptions?.roleOptions || []}
                        ranks={allSelectOptions?.standardOptions || []}
                        selectedRoleId={selectedRoleId}
                        setSelectedRoleId={setSelectedRoleId}
                        selectedRankId={selectedRankId}
                        setSelectedRankId={setSelectedRankId}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        user={userStore.getUser}
                        inputErrors={steps[ResumeStep.PERSONAL_DETAILS].errors}
                    />
                );
            case ResumeStep.PREVIOUS_JOBS:
                return (
                    <PreviousJobsStep
                        units={allSelectOptions?.unitOptions || []}
                        branches={allSelectOptions?.branchOptions || []}
                        deparments={allSelectOptions?.departmentOptions || []}
                        enteredPrevJob={enteredPrevJob}
                        setEnteredPrevJob={setEnteredPrevJob}
                        previousJobs={previousJobs}
                        setPreviousJobs={setPreviousJobs}
                        jobName={jobName}
                        setJobName={setJobName}
                    />
                );
            case ResumeStep.NEXT_JOB:
                return (
                    <NextJob
                        roles={allSelectOptions?.roleOptions || []}
                        nextRoles={nextRoles}
                        setNextRoles={setNextRoles}
                        aboutMe={aboutMe}
                        setAboutMe={setAboutMe}
                    />
                );
            default:
                return <></>;
        }
    };

    const handleNext = (): void => {
        if (validateStep()) {
            if (activeStep + 1 < steps.length) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                submitResume();
            }
        }
    };

    const handleBack = (): void => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const validateStep = (): boolean => {
        switch (activeStep) {
            case ResumeStep.PERSONAL_DETAILS: {
                const alteredSteps: StepInfo[] = steps.slice();
                alteredSteps[ResumeStep.PERSONAL_DETAILS].errors = {};

                if (!/^\d{10}$/.test(phoneNumber)) {
                    if (phoneNumber === "") {
                        alteredSteps[
                            ResumeStep.PERSONAL_DETAILS
                        ].errors.phoneError = "מספר טלפון לא יכול להיות ריק";
                    } else {
                        alteredSteps[
                            ResumeStep.PERSONAL_DETAILS
                        ].errors.phoneError =
                            "מספר טלפון חייב להכיל 10 ספרות בלבד";
                    }

                    setSteps(alteredSteps);
                    return false;
                }
                return true;
            }
            default: {
                return true;
            }
        }
    };

    const submitResume = async (): Promise<void> => {
        const resumeDetails: UserResume = {
            upn: userStore.getUser.upn,
            selectedRoleId,
            selectedRankId,
            phoneNumber,
            aboutMe,
            nextRoles,
            previousJobs: previousJobs,
        };
        await userStore.saveUserResume(resumeDetails);
        closeDialog();
    };

    return (
        <div className={classes.root}>
            <Stepper
                activeStep={activeStep}
                orientation='vertical'
                classes={{ root: classes.stepper }}
            >
                {steps.map((label, index) => (
                    <Step key={label.title}>
                        <StepLabel
                            classes={{
                                root: classes.stepLabel,
                                iconContainer: classes.iconContainer,
                                label: classes.label,
                            }}
                        >
                            {label.title}
                        </StepLabel>
                        <StepContent classes={{ root: classes.stepContent }}>
                            <div className={classes.specificStepContet}>
                                {getStepContent(index)}
                            </div>
                            <div className={classes.actionsContainer}>
                                {activeStep !== 0 && (
                                    <Button
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        הקודם
                                    </Button>
                                )}
                                {activeStep !== steps.length - 1 ? (
                                    <Button
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        הבא
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        שמור
                                    </Button>
                                )}
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default inject("userStore")(observer(ProgressBar));
