import * as React from 'react';

import styles from './PostNewJobStyles';
import { ContactInformation } from '../../../types/ContactInformation';

interface ContactInformationProps {
    contactInformation: ContactInformation;
    setContactInformation: (contactInformation: ContactInformation) => void;
}

const JobContactInformationInput: React.FC<ContactInformationProps> = (props): JSX.Element => {
    const { contactInformation, setContactInformation} = props;

    const classes = styles({});

    return (
        <div />
    );
}

export default JobContactInformationInput;
