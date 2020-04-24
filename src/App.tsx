import * as React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route,
} from 'react-router-dom';
import cookie from 'js-cookie';
import { Provider } from 'mobx-react';


import JobsAppBar from './components/Application-Header/JobsAppBar';
import rootStore from './store/RootStore';
import JobsAppBody from './components/Home-Page/JobsAppBody';
import PersonalZone from './components/Personal-Zone/PersonalZone';


const App: React.FC<{}> = (): JSX.Element => {

  return (
    <Provider
      rootStore={rootStore}
      jobsStore={rootStore.jobsStore}
      userStore={rootStore.userStore}
    >
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
