import * as React from 'react';

import { Provider } from 'mobx-react';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Home-Page/JobsAppBody';
import jobsStore from './store/JobsStore';
import JobsAppEmployerBody from './components/Personal-Zone/Employer/JobsAppEmployerBody';

const App: React.FC<{}> = (): JSX.Element => {
  // Question, can both Publisher and Contact, see the posts?
  const isEmployer: boolean = true; // TODO: Fix this with logic from DB + jobsStore who is connected

  return (
    <Provider jobsStore={jobsStore}>
      <JobsAppBar user={{name: "אדיר סטיון", userInitials: "א י"}} />
      { isEmployer ? <JobsAppEmployerBody /> : <JobsAppBody />}
    </Provider>
  );
}
export default App;
