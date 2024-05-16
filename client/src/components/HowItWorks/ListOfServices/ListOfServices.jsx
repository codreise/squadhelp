import React from 'react';
import styles from './ListOfServices.module.sass';
import CONSTANTS from '../../../constants';
import { Link } from 'react-router-dom';

const ListOfServices = () => {
  const items = CONSTANTS.LIST_SERVICES;

  return (
    <section className={styles.serviceSection}>
      <article>
        <span className={styles.serviceTag}></span>
        <h2 className={styles.serviceTitle}>3 Ways To Use Squadhelp</h2>
        <p className={styles.serviceText}>
          Squadhelp offers 3 ways to help you find the perfect name for your business.
        </p>
      </article>
      <div className={styles.serviceContainerItems}>
        {items.map(({ title, text, image, btnText }, index) => (
          <article key={index}>
            <img
              className={styles.serviceImage}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}howItWorks/${image}`}
              alt={title}
            />
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceText}>{text}</p>
            <Link to="/startContest">
              <button className={styles.serviceBtn}>{btnText}</button>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ListOfServices;