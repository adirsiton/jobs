import * as React from 'react';

import { Provider } from 'mobx-react';

import {
    BrowserRouter as Router, Switch,
    Route
} from 'react-router-dom';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Application-Body/JobsAppBody';
import jobsStore from './store/JobsStore';
import PersonalZone from './components/Personal-Zone/PersonalZone';

const App: React.FC<{}> = (): JSX.Element => {
    return (
        <Provider jobsStore={jobsStore}>
            <Router>
                <JobsAppBar user={{ name: "אדיר סטיון", userInitials: "א י" }} />
                <Switch>
                    <Route path='/personal' component={PersonalZone} />
                    <Route exact path="/" component={JobsAppBody} />
                </Switch>
            </Router>
        </Provider>
    );
}
export default App;
