import * as React from 'react';
import { Route, RouteComponentProps, withRouter, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.introduction}>
                    <Avatar className={classes.avatar}>
                        {userStore.getUserInitials}
                    </Avatar>
                    <div className={classes.introductionContent}>
                        <span className={classes.headline}>
                            היי {userStore.getUser.name}!
                        </span>
                        <span> הגעת לאזור האישי שלך בג'ובניק</span>
                    </div>
                </div>
                <Route path={`${match.path}/favorites`} render={() => (
                    <Link to="/personal">
                        <Button className={classes.resumeLink}>
                            מעבר לרזומה שלך
                        </Button>
                    </Link>
                )}/>
            </div>
            <Route path={`${match.path}/favorites`} render={() => <FavoriteJobs/>} />
            <Route exact path={match.path} render={() => <NoResume/>} />
        </div>
    );
}
export default inject('userStore')(withRouter(UserResume));