export enum Role {
    NO_ROLE = '',
    PROGRAMMER = 'תוכניתן',
    TEAM_LEADER = 'רש"צ',
    PRODUCT_MANAGER = "מנהל מוצר"
};

export const ROLES: Role[] = Object.values(Role).filter(role => role !== Role.NO_ROLE);