import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import JoinChat from './join'
import {AccessContext} from './userContext'
import { useState } from 'react';
function App() {

const [dataUser,setDataUser]=useState([])

  return (
<BrowserRouter>
<AccessContext.Provider value={{dataUser, setDataUser}}>
<Routes>
<Route path='/' element={<JoinChat/>}/>
<Route path='*' element={<p>找不到頁面</p>}/>
</Routes>
   </AccessContext.Provider>
</BrowserRouter>

    
  );
}

export default App;


// 也就是一層一層的關係，最外層的就是app, 然後home, home 裏面還包著其他component
// 然後就要定義哪個path是去哪個網址