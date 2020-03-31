export enum Standard {
    NO_STANDARD = '',
    SEREN = 'סרן',
    RASAN = 'רס"ן',
    RASAL = 'רס"ל'
};

export const STANDARD_DISPLAYS: Standard[] = 
    Object.values(Standard)
        .filter(standard => standard !== Standard.NO_STANDARD);