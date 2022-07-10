import React, { useCallback, useEffect, useRef } from 'react';
import styles from '../style/userList.module.css';

export default function Member({ dataUser, notify }) {
  const listUserRef = useRef();

  return (
    <section className={styles.UserList}>
      <div className={styles.titleList}>
        <p>Memeber List</p>
        <h5>{notify}</h5>
      </div>

      <div className={styles.showList}>
        <div className={styles.showList2}>
          {dataUser.map((list, index) => {
            const lastUser = list.length - 1 === index;
            return (
              <div
                ref={lastUser ? listUserRef : null}
                key={index}
                className={list.id}
              >
                <h3>{list.id}</h3>
                <h3>{list.name}</h3>
                <img className={list.id} src={list.image} Alt={list.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
