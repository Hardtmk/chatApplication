import React from 'react'
import styles from './join.module.css'

export default function Name({setUserRecord,userRecord,submitFunction}) {
  return (
    <div>

 <form className={styles.form} onSubmit={submitFunction} >
<h1>Welcome to Junk Food Club</h1>
<input
className={styles.name}
value={userRecord.name}
onChange={(e)=>{setUserRecord({...userRecord, name: e.target.value})}}
/>
   <label>Name</label>
  <input className={styles.submit} value='submit' type="submit"/>
</form>

    </div>
  )
}
