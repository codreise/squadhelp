import React from 'react';
import styles from './InformationSection.module.sass';
import ListFile from './ListFile/ListFile.jsx';
import CONSTANTS from '../../../constants.js';

const InformationSection = () => {
  const { informationSection, informationContainer, informationNav, informationList, informationListItem, informationItemLink, informationListContainer } = styles;

  return (
    <section className={informationSection}>
      <div className={informationContainer}>
        <nav className={informationNav}>
          <ul className={informationList}>
            <li className={informationListItem}>
              <a className={informationItemLink} href="#contests">
                Launching A Contest
              </a>
            </li>
            <li className={informationListItem}>
              <a className={informationItemLink} href="#marketplace">
                Buying From Marketplace
              </a>
            </li>
            <li className={informationListItem}>
              <a className={informationItemLink} href="#managed">
                Managed Contests
              </a>
            </li>
            <li className={informationListItem}>
              <a className={informationItemLink} href="#creatives">
                For Creatives
              </a>
            </li>
          </ul>
        </nav>
        <div className={informationListContainer}>
          {CONSTANTS.INFORMATION_SECTION.map((item, index) => (
            <ListFile key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;