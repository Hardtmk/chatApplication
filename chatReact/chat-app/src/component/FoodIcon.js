import React from 'react';
// import { useConversations } from '../contexts/ConversationsProvider';
import milkshake from '../img/milkshake.png';
import cheeseburger from '../img/cheeseburger.png';
import fries from '../img/fries.png';
import hotdog from '../img/hotdog.png';
import pizza from '../img/pizza.png';
import styles from '../style/join.module.css';

export default function FoodIcon({ setUserRecord, userRecord }) {
  return (
    <div>
      <div className={styles.container}>
        <button
          className={styles.btn}
          onClick={e => setUserRecord({ ...userRecord, image: e.target.src })}
        >
          <img src={cheeseburger} alt='chessburger' />
        </button>
        <button
          className={styles.btn}
          onClick={e => setUserRecord({ ...userRecord, image: e.target.src })}
        >
          <img className={styles.imgbtn} src={milkshake} alt='milkshake' />
        </button>
        <button
          className={styles.btn}
          onClick={e => setUserRecord({ ...userRecord, image: e.target.src })}
        >
          <img src={fries} className={styles.imgbtn} alt='fries' />
        </button>
        <button
          className={styles.btn}
          onClick={e => setUserRecord({ ...userRecord, image: e.target.src })}
        >
          <img src={hotdog} alt='hotdog' />
        </button>
        <button
          className={styles.btn}
          onClick={e => setUserRecord({ ...userRecord, image: e.target.src })}
        >
          <img src={pizza} alt='pizza' />
        </button>
      </div>
    </div>
  );
}
