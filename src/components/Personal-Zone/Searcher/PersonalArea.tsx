import * as React from "react";

import { inject } from "mobx-react";

import Avatar from "@material-ui/core/Avatar";

import styles from "./PersonalAreaStyle";
import NoResume from "./NoResume/NoResume";
import PersonalResume from "./personal-resume/PersonalResume";
import { UserStore } from "../../../store/UserStore";

interface UserResumeProps {
  userStore?: UserStore;
}

const UserResume: React.FC<UserResumeProps> = (props): JSX.Element => {
  const classes = styles();
  const userStore: UserStore = props.userStore!;

  return (
    <div className={classes.container}>
      <div className={classes.introduction}>
        <Avatar className={classes.avatar}>{userStore.getUserInitials}</Avatar>
        <div className={classes.introductionContent}>
          <span className={classes.headline}>
            {" "}
            היי {userStore.getUser.name}!
          </span>
          <span> הגעת לאזור האישי שלך בג'ובניק</span>
        </div>
      </div>
      {false ? <PersonalResume /> : <NoResume />}
    </div>
  );
};
export default inject("userStore")(UserResume);
