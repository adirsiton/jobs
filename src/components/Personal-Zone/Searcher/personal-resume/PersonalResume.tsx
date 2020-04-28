import * as React from "react";

import Typograpy from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./PersonalResumeStyle";

const PersonalResume: React.FC<{}> = (): JSX.Element => {
  const classes = styles();

  return (
    <div className={classes.resumeContainer}>
      <Typograpy className={classes.resumeHeader}>הרזומה שלך</Typograpy>
      <div className={classes.resumeBox}></div>
    </div>
  );
};

export default PersonalResume;
