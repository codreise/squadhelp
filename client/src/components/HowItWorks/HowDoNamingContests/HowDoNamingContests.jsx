import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './HowDoNamingContests.module.sass';

const HowDoNamingContests = () => {
  const staticImagesPath = CONSTANTS.STATIC_IMAGES_PATH;

  return (
    <>
      <hr />
      <section className={styles.namingContestsSection}>
        <img
          className={styles.namingContestsImage}
          src={`${staticImagesPath}howItWorks/cup-image1.svg`}
          alt="cup-image1"
        />
        <h2 className={styles.namingContestsTitle}>How Do Naming Contests Work?</h2>
        <div className={styles.namingContestsItems}>
          <img
            className={styles.namingContestsImage}
            src={`${staticImagesPath}howItWorks/man-image2.svg`}
            alt="man-image2"
          />
          <ul className={styles.namingContestsList}>
            {[1, 2, 3, 4].map((number) => (
              <li key={number} className={styles.namingContestsListItem}>
                <span>{number}.</span>
                {getContentForStep(number)}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
    </>
  );
};

const getContentForStep = (step) => {
  switch (step) {
    case 1:
      return "Your first step is to fill out the Naming Brief. You'll start receiving name ideas within minutes.";
    case 2:
      return "Rate the submissions and provide feedback to creatives. The more feedback you give, the more name ideas you'll receive.";
    case 3:
      return "Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.";
    case 4:
      return "Choose a Winner. The winning creative gets paid for their submission.";
    default:
      return '';
  }
};

export default HowDoNamingContests;