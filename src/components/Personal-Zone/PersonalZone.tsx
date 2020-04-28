import * as React from "react";

import { observer, inject } from "mobx-react";

import JobsAppEmployerBody from "./Publisher/JobsAppEmployerBody";
import SearcherPage from "./Searcher/PersonalArea";
import { UserStore } from "../../store/UserStore";

interface PersonalZoneProps {
  userStore: UserStore;
}

const PersonalZone: React.FC<PersonalZoneProps> = (props): JSX.Element => {
  const userStore: UserStore = props.userStore;

  return (
    <>
      {userStore.getUser.isRamad ? <JobsAppEmployerBody /> : <SearcherPage />}
    </>
  );
};

export default inject("userStore")(observer(PersonalZone));
