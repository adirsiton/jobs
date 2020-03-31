import * as React from 'react';

import JobsAppBar from './components/Application-Header/JobsAppBar';
import JobsAppBody from './components/Application-Body/JobsAppBody';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <JobsAppBar user={{name: "אדיר סטיון", userInitials: "א י"}} />
      <JobsAppBody />
    </div>
  );
}
export default App;
