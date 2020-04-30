import * as React from "react";

import Typograpy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./PersonalResumeStyle";
import PermIdentity from "@material-ui/icons/PermIdentity";

const PersonalResume: React.FC<{}> = (): JSX.Element => {
  const classes = styles();

  const previousJob = (previousJobDetails: string) => {
    return (
      <div className={classes.previousJob}>
        <div className={classes.row}>
          <div className={classes.jobSection}>
            <Typograpy variant='body1'>מ- </Typograpy>
            <span>05/19</span>
          </div>
          <div className={classes.jobSection}>
            <Typograpy variant='body1'>עד- </Typograpy>
            <span>היום</span>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.jobSection}>
            <Typograpy variant='body1'>יחידה:</Typograpy>
            <span className={classes.sectionValue}>מצפ"ן</span>
          </div>
          <div className={classes.jobSection}>
            <Typograpy variant='body1'>ענף: </Typograpy>
            <span className={classes.sectionValue}>פסגות</span>
          </div>
          <div className={classes.jobSection}>
            <Typograpy variant='body1'>מדור: </Typograpy>
            <span className={classes.sectionValue}>ל"א</span>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.jobSection}>
            <Typograpy variant='body1'>תפקיד: </Typograpy>
            <span className={classes.sectionValue}>מנהלת תכנון מוצר</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.resumeContainer}>
      <Typograpy className={classes.resumeHeader}>הרזומה שלך</Typograpy>
      <div className={classes.resumeBox}>
        <div className={classes.resumePersonalDetails}>
          <div className={classes.topSection}>
            <div className={classes.noPicturePlaceholder}>
              <PermIdentity className={classes.noPictureIcon}></PermIdentity>
            </div>
            <div className={classes.resumeContactDetails}>
              <Typograpy
                variant='body1'
                className={`${classes.resumeSearcherName}`}
              >
                סרן יובל אדרי
              </Typograpy>
              <span className={classes.resumeSearcherID}>מ.א 8018757</span>
              <div className={classes.resumeSearcherJobAndLocation}>
                <Typograpy variant='body1'>מקצוע: </Typograpy>
                <span className={classes.sectionText}>אחר</span>
                <Typograpy variant='body1'>טלפון:</Typograpy>
                <span className={classes.sectionText}>052-1111111</span>
              </div>
            </div>
          </div>
          <div className={classes.bottomSection}>
            <div className={classes.previousJobs}>{previousJob("")}</div>
          </div>
          <div className={classes.resumeFreeText}>
            בוגרת תואר ראשון במערכות מידע, עברתי קורס ניהול מוצר וניתוח מערכות
            מורחב בבסמ"ח
          </div>
          <div className={classes.row}>
            <span>מעניין אותי תפקיד:</span>
            <Typograpy className={`${classes.tag} ${classes.sectionValue}`}>
              PM
            </Typograpy>
          </div>
        </div>
        <div>
          <Button className={classes.resumeEditButton}>עריכה</Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalResume;
