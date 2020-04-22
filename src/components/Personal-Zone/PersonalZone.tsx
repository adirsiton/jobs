import * as React from 'react';

import { observer, inject } from 'mobx-react';

import JobsAppEmployerBody from './Publisher/JobsAppEmployerBody';
import { UserStore } from '../../store/UserStore';

interface PersonalZoneProps {
    userStore: UserStore;
}

const PersonalZone: React.FC<PersonalZoneProps> = (props): JSX.Element => {
    const userStore: UserStore = props.userStore;

    return (<>
        { userStore.user.isRamad 
            ? <JobsAppEmployerBody /> 
            : <>אישי</> /* Todo: Illi, Instead of 'אישי', connect to your personal zone screen of candidate :)*/ 
        }
    </>);

}

export default inject('userStore')(observer(PersonalZone));
