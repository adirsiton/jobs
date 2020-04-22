import * as React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route,
  Link
} from 'react-router-dom';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsPage from './components/Home-Page/JobsAppBody';
import User from './components/UserManagement/UserResume';


const App: React.FC<{}> = (): JSX.Element => {
  return (
    <Router>
      <JobsAppBar user={{ name: "אדיר סטיון", userInitials: "א י" }} />
      <Switch>
        <Route exact path="/user" component={User} />
        <Route exact path="/" component={JobsPage} />
      </Switch>
    </Router>
  );
}
export default App;
