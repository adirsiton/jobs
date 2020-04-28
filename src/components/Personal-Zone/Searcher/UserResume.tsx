import * as React from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import Avatar from '@material-ui/core/Avatar';

import styles from './UserResumeStyle';
import NoResume from './NoResume/NoResume'
import { UserStore } from '../../../store/UserStore';
import FavoriteJobs from './FavoriteJobs/FavoriteJobs';

interface UserResumeOwnProps {
    userStore?: UserStore;
}

type UserResumeProps = UserResumeOwnProps & RouteComponentProps;

const UserResume: React.FC<UserResumeProps> = (props): JSX.Element => {
    const classes = styles();
    const userStore: UserStore = props.userStore!;
    const { match } = props;

    return (
        <div className={classes.container}>
            <div className={classes.introduction}>
                <Avatar className={classes.avatar}>
                    {userStore.getUserInitials}
                </Avatar>
                <div className={classes.introductionContent}>
            <span className={classes.headline}> היי {userStore.getUser.name}!</span>
                    <span> הגעת לאזור האישי שלך בג'ובניק</span>
                </div>
            </div>
            <Route path={`${match.path}/favorites`} render={() => <FavoriteJobs/>} />
            <Route exact path={match.path} render={() => <NoResume/>} />
        </div>
    );
}
export default inject('userStore')(withRouter(UserResume));