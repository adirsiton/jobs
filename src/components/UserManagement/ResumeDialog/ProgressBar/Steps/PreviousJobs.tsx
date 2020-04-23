import React from 'react';
import { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import SelectCom from './Select/select';
import DatePicker from './DatePicker/datePicker';
import { Job, defaultJob } from '../../../../../types/userTypes';
import { Unit, Branch, Department } from '../../../../../types/Departments';
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

    const dateInput = (currDate: MaterialUiPickersDate, field: string): JSX.Element => {
        return (
            <DatePicker date={currDate}
                updateDate={(date: MaterialUiPickersDate) => {
                    setEnteredPrevJob({
                        ...enteredPrevJob,
                        [field]: date
                    })
                }}
            />
        )
    }

    const inputDiv = (title: string, input: JSX.Element): JSX.Element => {
        return (
            <div className={classes.inputDiv}>
                <InputLabel classes={{ root: classes.label, asterisk: classes.asterisk }} required={true}> {title} </InputLabel>
                {input}
            </div>
        )
    }

    const selects = (job: Job): JSX.Element => {
        return (<div className={classes.previousJobsRow}>
            {inputDiv("יחידה",
                <SelectCom
                    selectedValue={job.unitId}
                    dataItems={units}
                    setValue={(id: number) => {
                        setEnteredPrevJob({
                            ...enteredPrevJob,
                            unitId: id
                        })
                    }} />)}
            {inputDiv("ענף",
                <SelectCom
                    selectedValue={job.branchId}
                    dataItems={job.unitId !== -1 ?
                        branches.filter(branch => branch.unit_id === job.unitId) : []
                    }
                    setValue={(id: number) => {
                        setEnteredPrevJob({
                            ...enteredPrevJob,
                            branchId: id
                        })
                    }} />)}
            {inputDiv("מדור",
                <SelectCom
                    selectedValue={job.departmentId}
                    dataItems={job.branchId !== -1 ?
                        deparments.filter(deparment => deparment.branch_id === job.branchId) : []
                    }
                    setValue={(id: number) => {
                        setEnteredPrevJob({
                            ...enteredPrevJob,
                            departmentId: id
                        })
                    }} />)}
        </div>)
    }

    const JobNameInput = (name: string): JSX.Element => {
        return (<div className={classes.inputDiv}>
            <InputLabel classes={{ asterisk: classes.asterisk }} required={true}>
                שם התפקיד
            </InputLabel>
            <TextField
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEnteredPrevJob({
                        ...enteredPrevJob,
                        jobName: event.target.value
                    })
                }
                InputProps={{
                    disableUnderline: true
                }}
                className={`${classes.inputfield} ${classes.longInput}`}
            />
        </div>)
    }


    const JobComponent = (job: Job, isDefault: boolean): JSX.Element => {
        return (
            <div className={classes.previousJobsContainer}>
                <div className={classes.previousJobsRow}>
                    {inputDiv("מ-", dateInput(job.startDate, "startDate"))}
                    {inputDiv("עד", dateInput(job.endDate, "endDate"))}
                </div>

                {selects(job)}

                <div className={classes.previousJobsRow}>
                    {JobNameInput(job.jobName)}
                    <Button
                        className={classes.removeJobBtn}
                        onClick={() => {
                            if (isDefault) {
                                setEnteredPrevJob(defaultJob);
                            } else {
                                setPreviousJobs(previousJobs.filter(currJob => currJob.id !== job.id));
                            }
                        }}>
                        {isDefault ? "נקה" : "הסר"}
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