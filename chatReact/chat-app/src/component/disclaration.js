import React from 'react';
import styles from '../style/userList.module.css';

export default function Disclaration({ handleClick }) {
  return (
    <div className={styles.disclaration}>
      <p>我瞭解文明發言的重要性，不會在討論區中發表任何不當言論</p>
      <button className={styles.exchange} onClick={handleClick}>
        開始交流
      </button>
    </div>
  );
}
