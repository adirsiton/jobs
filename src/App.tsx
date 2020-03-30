import * as React from 'react';

import { JobsAppBar } from './components/Application-Header/JobsAppBar';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <JobsAppBar user={{name: "Meshushe", userInitials: "Shmuel"}} />
    </div>
  );
}
export default App;
