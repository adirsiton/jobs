import * as React from 'react';

import { Provider } from 'mobx-react';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Home-Page/JobsAppBody';
import jobsStore from './store/JobsStore';
import JobsAppEmployerBody from './components/Personal-Zone/Employer/JobsAppEmployerBody';
import userStore from './store/UserStore';

import cookie from 'js-cookie';

const App: React.FC<{}> = (): JSX.Element => {
  const a = cookie.getJSON('user');
  console.log(a);
  return (
    <Provider jobsStore={jobsStore} userStore={userStore}>
      <JobsAppBar />
      { userStore.user.isRamad ? <JobsAppEmployerBody /> : <JobsAppBody />}
    </Provider>
  );
}
export default App;
