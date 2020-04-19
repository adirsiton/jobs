import * as React from 'react';

import { Provider } from 'mobx-react';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Application-Body/JobsAppBody';
import jobsStore from './store/JobsStore';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <Provider jobsStore={jobsStore}>
      <JobsAppBar user={{name: "אדיר סטיון", userInitials: "א י"}} />
      <JobsAppBody />
    </Provider>
  );
}
export default App;
