import React from 'react';
import styles from '../style/userList.module.css';
import MessageInput from './messageInput';
import MessageDisaplay from './messageDisaplay';

export default function SectionContainer({
  handleMessage,
  setUserMessage,
  UserMessage,
  text,
}) {
  return (
    <section className={styles.chatRoom}>
      <MessageDisaplay text={text} />
      <MessageInput
        handleMessage={handleMessage}
        setUserMessage={setUserMessage}
        UserMessage={UserMessage}
      />
    </section>
  );
}
