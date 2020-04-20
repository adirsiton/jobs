import * as React from 'react';

import { Provider } from 'mobx-react';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Application-Body/JobsAppBody';
import rootStore from './store/RootStore';

const App: React.FC<{}> = (): JSX.Element => {
  return (
      <Provider
          rootStore={rootStore}
          jobsStore={rootStore.jobsStore}
          userDetailsStore={rootStore.userDetailsStore}
      >
          <JobsAppBar />
          <JobsAppBody />
      </Provider>
  );
}
export default App;
