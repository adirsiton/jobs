import * as React from 'react';

import { Provider } from 'mobx-react';

import {
    BrowserRouter as Router, Switch,
    Route
} from 'react-router-dom';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Home-Page/JobsAppBody';
import jobsStore from './store/JobsStore';
import userStore from './store/UserStore';
import PersonalZone from './components/Personal-Zone/PersonalZone';

import cookie from 'js-cookie';

const App: React.FC<{}> = (): JSX.Element => {
    const a = cookie.getJSON('user');
    console.log(a);

    return (
        <Provider jobsStore={jobsStore} userStore={userStore}>
            <Router>
                <JobsAppBar />
                <Switch>
                    <Route path='/personal' component={PersonalZone} />
                    <Route exact path="/" component={JobsAppBody} />
                </Switch>
            </Router>
        </Provider>
    );
}
export default App;
