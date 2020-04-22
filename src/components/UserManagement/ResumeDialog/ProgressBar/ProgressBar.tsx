import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
// import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import PersonalDetails from './Steps/PersonalDetails';
import NextJob from './Steps/NextJob';

import { AllSelectOptions } from '../../../../types/AllSelectOptions';
import styles from './ProgressBarStyle';


interface ProgressBarProps {
    allSelectOptions: AllSelectOptions | null;
}

const ProgressBar: React.FC<ProgressBarProps> = (props): JSX.Element => {
    const classes = styles();
    const { allSelectOptions } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ["פרטים אישיים", "ג'ובים קודמים", "הג'וב הבא"];

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <PersonalDetails
                    roles={allSelectOptions?.roleOptions ? allSelectOptions?.roleOptions : []}
                    ranks={allSelectOptions?.standardOptions ? allSelectOptions?.standardOptions : []} />;
            case 1:
                return <> 2 </>;
            case 2:
                return <NextJob roles={allSelectOptions?.roleOptions ? allSelectOptions?.roleOptions : []} />;
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

    const handleReset = () => {
        setActiveStep(0);
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