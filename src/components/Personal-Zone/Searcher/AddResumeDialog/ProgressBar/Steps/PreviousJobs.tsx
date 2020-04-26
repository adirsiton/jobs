import React from 'react';
import { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import SelectInput from './Select/select';
import DatePicker from './DatePicker/datePicker';
import { Job, defaultJob } from '../../../../../../types/User';
import { Unit, Branch, Department } from '../../../../../../types/Departments';
import styles from './StepsStyle';

interface PreviousJobsStepProps {
    units: Unit[];
    branches: Branch[];
    deparments: Department[];
    previousJobs: Job[];
    setPreviousJobs: (job: Job[]) => void;
    enteredPrevJob: Job;
    setEnteredPrevJob: (job: Job) => void;
    jobName: string;
    setJobName: (name: string) => void;
}

const PreviousJobsStep: React.FC<PreviousJobsStepProps> = (props): JSX.Element => {
    const classes = styles();
    const { units, branches, deparments,
        previousJobs, setPreviousJobs, enteredPrevJob, setEnteredPrevJob } = props;
    const [currentId, setCurrentId] = useState<number>(1);

    const updateJob = (job: Job, isNew: boolean): void => {
        if (isNew) {
            setEnteredPrevJob({
                ...job
            })
        } else {
            setPreviousJobs(previousJobs.map(prevJob => {
                if (prevJob.id === job.id) {
                    return job
                } else {
                    return prevJob
                }
            }));
        }
    }

    const inputDiv = (title: string, input: JSX.Element): JSX.Element => {
        return (
            <div className={classes.inputDiv}>
                <InputLabel classes={{ root: classes.label, asterisk: classes.asterisk }} required={true}> {title} </InputLabel>
                {input}
            </div>
        )
    }

    const datePickers = (job: Job, isNew: boolean): JSX.Element => {
        return (
            <div className={classes.previousJobsRow}>
                {inputDiv("מ-",
                    <DatePicker date={job.startDate}
                        updateDate={(date: MaterialUiPickersDate) => {
                            updateJob({
                                ...job,
                                startDate: date
                            }, isNew)
                        }}
                    />)}
                {inputDiv("עד",
                    <DatePicker date={job.endDate}
                        updateDate={(date: MaterialUiPickersDate) => {
                            updateJob({
                                ...job,
                                endDate: date
                            }, isNew)
                        }}
                    />)}
            </div>)
    }

    const selects = (job: Job, isNew: boolean): JSX.Element => {
        return (
            <div className={classes.previousJobsRow}>
                {inputDiv("יחידה",
                    <SelectInput
                        selectedValue={job.unitId}
                        dataItems={units}
                        setValue={(id: number) => {
                            updateJob({
                                ...job,
                                unitId: id
                            }, isNew)
                        }} />)}
                {inputDiv("ענף",
                    <SelectInput
                        selectedValue={job.branchId}
                        dataItems={job.unitId !== -1 ?
                            branches.filter(branch => branch.unit_id === job.unitId) : []
                        }
                        setValue={(id: number) => {
                            updateJob({
                                ...job,
                                branchId: id
                            }, isNew)
                        }} />)}
                {inputDiv("מדור",
                    <SelectInput
                        selectedValue={job.departmentId}
                        dataItems={job.branchId !== -1 ?
                            deparments.filter(deparment => deparment.branch_id === job.branchId) : []
                        }
                        setValue={(id: number) => {
                            updateJob({
                                ...job,
                                departmentId: id
                            }, isNew)
                        }} />)}
            </div>)
    }

    const JobNameInput = (job: Job, isNew: boolean): JSX.Element => {
        return (<div className={classes.inputDiv}>
            <InputLabel classes={{ asterisk: classes.asterisk }} required={true}>
                שם התפקיד
            </InputLabel>
            <TextField
                value={job.jobName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateJob({
                        ...job,
                        jobName: event.target.value
                    }, isNew)
                }
                InputProps={{
                    disableUnderline: true
                }}
                className={`${classes.inputfield} ${classes.longInput}`}
            />
        </div>)
    }


    const JobComponent = (job: Job, isNew: boolean): JSX.Element => {
        return (
            <div key={job.id} className={classes.previousJobsContainer}>
                {datePickers(job, isNew)}
                {selects(job, isNew)}

                <div className={classes.previousJobsRow}>
                    {JobNameInput(job, isNew)}
                    <Button
                        className={classes.removeJobBtn}
                        onClick={() => {
                            if (isNew) {
                                setEnteredPrevJob(defaultJob);
                            } else {
                                setPreviousJobs(previousJobs.filter(currJob => currJob.id !== job.id));
                            }
                        }}>
                        {isNew ? "נקה" : "הסר"}
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={classes.perviousJobsDiv}>
                {
                    previousJobs.map(Job => JobComponent(Job, false))
                }
                {previousJobs.length !== 3 && JobComponent(enteredPrevJob, true)}
                <Button
                    className={classes.nextJobBtn}
                    onClick={() => {
                        setPreviousJobs([...previousJobs,
                        {
                            ...enteredPrevJob,
                            id: currentId
                        }]);
                        setCurrentId((prevCurrentId) => prevCurrentId + 1);
                        setEnteredPrevJob(defaultJob);
                    }}
                    disabled={previousJobs.length === 3}>
                    + הוספת ג'וב
                </Button>
            </div>
        </div>
    );
}

export default PreviousJobsStep;