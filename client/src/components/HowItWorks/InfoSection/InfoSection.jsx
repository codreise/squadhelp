import CONSTANTS from '../../../constants';
import styles from './InfoSection.module.sass';
import React, { useState } from 'react';

function InfoSection() {
  const [isNamesForSaleOpen, setIsNamesForSaleOpen] = useState(false);
  const [isNamingContestsOpen, setIsNamingContestsOpen] = useState(false);

  // Функція для відкриття або закриття списку "Names For Sale"
  const toggleNamesForSale = () => {
    setIsNamesForSaleOpen(!isNamesForSaleOpen);
  };

  // Функція для відкриття або закриття списку "Naming Contests"
  const toggleNamingContests = () => {
    setIsNamingContestsOpen(!isNamingContestsOpen);
  };

  return (
    <div>
      <section className={styles.blueSection}>
        <header className={styles.header}>
          {/* Рядок пошуку */}
          <div className={styles.searchBar}>
            <input type="text" placeholder="Seatch over 100.000 names" />
            <button>Пошук</button>
          </div>
          {/* Навігаційні елементи */}
          <nav className={styles.navigation}>
            <ul>
              <li>Account</li>
              <li>Contact</li>
              <li>Favorites</li>
              <li>
                <button>Start Contest</button>
              </li>
              <li className={styles.dropdown}>
                <span onClick={toggleNamesForSale}>Names For Sale</span>
                {isNamesForSaleOpen && (
                  <div className={styles.dropdownContent}>
                    <p>Popular Brandable Names</p>
                    <p>Premium Domains For Sale</p>
                    <p>Short Domains</p>
                    <p>3 Letter Domains</p>
                    <p>4 Letter Domains</p>
                    <p>5 Letter Domains</p>
                    <p>One Word Names</p>
                    <p>Industry Domains</p>
                    <p>Location Based Names</p>
                    <p>Recommended For You</p>
                    <p>Become A Seller</p>
                  </div>
                )}
              </li>
              <li onClick={toggleNamingContests}>Naming Contests</li>
              {isNamingContestsOpen && (
                <ul className={styles.columnList}> {/* Додайте стиль columnList */}
                  <li>Start A Contest</li>
                  <li>How It Works</li>
                  <li>Contest Pricing</li>
                  <li>Agency Services</li>
                  <li>Our Work</li>
                  <li>Recent Winners</li>
                  <li>Active Contests</li>
                  <li>Become A Creative</li>
                </ul>
              )}
            </ul>
          </nav>
        </header>
        {/* Тут можна додати іншу інформацію */}
      </section>
    </div>
  );
}

export default InfoSection;