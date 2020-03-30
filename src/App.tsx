import * as React from 'react';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Application-Body/JobsAppBody';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <JobsAppBar user={{name: "Meshushe", userInitials: "Shmuel"}} />
      <JobsAppBody />
    </div>
  );
}
export default App;
