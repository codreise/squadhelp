import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './ContentSection.module.sass';

const ContentSection = () => {
  const data = CONSTANTS.CONT_SECTION;
  return (
    <section className={styles.contentSection}>
      {data.map(({ image, text }, index) => (
        <div className={styles.contentContainer} key={index}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}howItWorks/${image}`}
            alt="stats-image"
          />
          <p
            className={styles.contentText}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      ))}
    </section>
  );
};

export default ContentSection;