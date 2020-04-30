
/* Object Example:
{
    title: "פרטים אישיים",
    role: "תפקיד לא יכול להיות ריק",
    phone: "טלפון חייב להכיל מספרים בלבד"
}
*/

export interface InputErrors {
    [inputIdError: string]: string; // input ids with error messages
}

export interface StepInfo {
    title: string;
    errors: InputErrors;
}

export enum ResumeStep {
    PERSONAL_DETAILS,
    PREVIOUS_JOBS,
    NEXT_JOB
}

export const initStepsValues: StepInfo[] = [
    {
        title: "פרטים אישיים",
        errors: {}
    },
    {
        title: "ג'ובים קודמים",
        errors: {}
    },
    {
        title: "הג'וב הבא",
        errors: {}
    }
];