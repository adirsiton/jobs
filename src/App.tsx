import * as React from 'react';

import JobsAppBar from './components/Application-Header/JobsAppBar';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <JobsAppBar user={{name: "אדיר סטיון", userInitials: "א י"}} />
    </div>
  );
}
export default App;
