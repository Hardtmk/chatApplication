// import milkshake from './milkshake.png'
// import cheeseburger from './cheeseburger.png'
// import React, { useEffect, useRef, useState } from "react"
// import io from "socket.io-client"
// import './App.css'

// const JoinChat=()=>{
// const [userRecord, setUserRecord]=useState({name:'',image:''})
// const [dataUser, setDataUser]=useState([])

// const socketRef = useRef()
// // 爲什麽不work 呢？


// 	useEffect(
// 		() => {
// 			socketRef.current = io.connect("http://localhost:4000")
// 			socketRef.current.on("record", ({  name, image }) => {
// 				// 數組的話可以這樣set
//              console.log(image)
//                 setDataUser([ ...dataUser, { name, image } ])
//                    console.log(dataUser)
// 			})
//             // 不明白爲什麽這裏會有一個disconnect
// 			return () => socketRef.current.disconnect()
// 		},
// 		[]
// 	)


//     // console.log(userRecord.image)
//     console.log(userRecord.image)
//     // console.log(userRecord.name)

// const handleSubmit=async(e)=>{
// e.preventDefault()
// const {name}=userRecord
// const {image}=userRecord

// // 這裏就只能使用一個名字？
// 	socketRef.current.emit("join", {name, image })


// }

// 	const renderChat = () => {

// 		return dataUser.map(({ name, image }, index) => (
// 			<div key={index}>
// 				<h3>
// 					{name}
// 				</h3>
//                  {/* <img src={IMGPATH+movie.poster_path} width='200' /> */}
//                 <img src={image} Alt={image}/>
// 			</div>
// 		))
// 	}


//  return (
// <div>
// <form onSubmit={handleSubmit}>
// <input
// name='name'
// type='name'
// value={userRecord.name}
// onChange={(e)=>{setUserRecord({...userRecord, name: e.target.value})}}
// />
//         <h1>{userRecord.image}</h1>
//         <h1>{userRecord.name}</h1>
//  <div>
//            <img src={cheeseburger} alt='chessburger'/>
   
//                             <input
//                                 id="cheessburger"
//                                 type="radio"
//                                 name="img"
//                                 value={cheeseburger}
//                             onChange={(e)=>setUserRecord({...userRecord, image: e.target.value})}
                                
//                             />
                
//                   <img src={milkshake} alt='milkshake'/>
//                             <input
//                                 type="radio"
//                                 name="img"
//                                 value={milkshake}
//                                                onChange={(e)=>setUserRecord({...userRecord, image: e.target.value})}
                    
                              
//                             />
               
                             
//                         </div>
//   <input type="submit"/>
// </form>

// <div className="render-chat">
// 				<h1>Chat Log</h1>
// 				{renderChat()}
// 			</div>

// </div>





// )
// }


// export default JoinChat