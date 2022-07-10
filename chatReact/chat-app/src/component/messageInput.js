import React from 'react';
import styles from '../style/userList.module.css';
import { useRef } from 'react';

export default function MessageInput({
  setUserMessage,
  handleMessage,
  UserMessage,
}) {
  const inputRed = useRef(null);
  return (
    <form onSubmit={handleMessage}>
      <input
        className={styles.message}
        name='message'
        type='message'
        value={UserMessage.message}
        ref={inputRed}
        onChange={e =>
          setUserMessage({ ...UserMessage, message: e.target.value, id: '' })
        }
      />
      <input value='submit' className={styles.submit} type='submit' />
    </form>
  );
}
