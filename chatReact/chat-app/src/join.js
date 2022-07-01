
import React, { useEffect, useRef, useState,useContext } from "react"
import io from "socket.io-client"
import { AccessContext } from './userContext'
import styles from './userList.module.css'
import FoodIcon from './FoodIcon'
import Name from './Name'
import Disclaration from "./disclaration"
import Member from './member'
import { v4 as uuidV4 } from 'uuid'
import MessageInput from "./messageInput"
import MessageDisaplay from "./messageDisaplay"
import SectionContainer from "./SectionContainer"

const JoinChat=()=>{
const [userRecord, setUserRecord]=useState({name:'',image:''})
const {dataUser, setDataUser}=useContext(AccessContext)
const [frontPage,setFrontPage]= useState(true);
const [disclaration,setDisclaration]=useState(false)
const [mainContent, setMainContent]=useState(false)
// const [UserMessage, setUserMessage] = useState({message:'',name:dataUser[dataUser.length-1].name,image:dataUser[dataUser.length-1].image})
const [UserMessage, setUserMessage] = useState({})
const [id,setId]=useState(null)
const [text,setText] = useState([])
const [notify,setNotify]=useState(null)
const socketRef = useRef()

setTimeout(function(){
   setNotify(null)
},6000)

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:4000",
         	    { query: { id } }
					)
			socketRef.current.on("record", data => {
            console.log(data)
                setDataUser(data)
			})
         socketRef.current.on('notify',data=>{
         setNotify(data)
         console.log(data)
         })
         			socketRef.current.on("getmessage",datas => {
                     console.log(datas)
setText([...text,datas])

			})
			return () => socketRef.current.disconnect()
		},
		[dataUser,text]
	)


const handleSubmit=async(e)=>{
e.preventDefault()
const {name}=userRecord
const {image}=userRecord
setUserMessage({...UserMessage,name:name,image:image})

if(!name || !image){
    alert('name and image cannot be empty')
    return;
}
setFrontPage(false)
setDisclaration(true)
setId(uuidV4())
	socketRef.current.emit("join", {name, image})
}
console.log(dataUser)
console.log(UserMessage)
console.log('id=+'+id)



const handleClick=()=>{
   setDisclaration(false)
   setMainContent(true)
}
	const handleMessage=(e)=>{
      const {name} = UserMessage
      const {image} = UserMessage
		const {message}= UserMessage
		const time = new Date(Date.now()).getHours()+':'+new Date(Date.now()).getMinutes()
				socketRef.current.emit('message',{time,name,image,message})
		e.preventDefault()

	}



 return (
<div>

{frontPage && <FoodIcon setUserRecord={setUserRecord} userRecord={userRecord}/>}
{ frontPage && <Name setUserRecord={setUserRecord} userRecord={userRecord} submitFunction={handleSubmit}/>}
       
{disclaration && <Disclaration handleClick={handleClick}/>}

{mainContent &&

<div className={styles.disPlay}>	
<div className={styles.background}>	
{true&&<Member dataUser={dataUser} notify={notify}/>}
<SectionContainer text={text} handleMessage={handleMessage} setUserMessage={setUserMessage}
 UserMessage={UserMessage} />
</div>
</div>}
</div>

)
}

export default JoinChat

