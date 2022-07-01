import React,{useCallback} from 'react'
import styles from './userList.module.css'
export default function MessageDisaplay({text}) {
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  return (
    <div>
     <div className={styles.ChatWord}>
     <p className={styles.chatting}>Chat Room</p>
     </div>
					<div className={styles.chatContainer}>
					<div className={styles.sinngleChat}>
<div className={styles.text}>
 		{
                   text.map((users,index)=>{
const lastMessage=text.length-1===index
return(
                  <div 
                  ref={lastMessage? setRef : null}
                  key={index}
						 className={users.className}>								
				      <div className={styles.displayFlex}>																				
						<img className={styles.userImg} src={users.image} />
						<div className={styles.boxtext}>
						<span >{users.message}</span>	
						</div>
						</div>
						<div className={styles.detail}>
						<span>{users.name}</span>		
						<span className={styles.time}>{users.time}</span>
						</div>
						</div>			
)											
})
																				
                }
																
					</div>
				</div>
				

				</div>			

    </div>
  )
}
