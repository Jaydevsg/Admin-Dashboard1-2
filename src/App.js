import './App.css';
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AddStudents from './Components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditStudent from './Components/EditStudent'
import {useState} from 'react'
function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

  let [students,setStudents] = useState([
      {
        name:"Jay",
        email:"jay@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Nivi",
        email:"Nivi@gmail.com",
        mobile:"45678123",
        class:"B20WE"
      },
      {
        name:"Pras",
        email:"pras@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Chets",
        email:"chets@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Arvind",
        email:"arvind@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Pranu",
        email:"pranu@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Aksh",
        email:"Aksh@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Lali",
        email:"lali@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Hari",
        email:"hari@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      }
  ]);

  return <>
    <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<AllStudents data={{students,setStudents}}/>}/>
                      <Route path = '/add-student' element={<AddStudents data={{students,setStudents}}/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent data={{students,setStudents}}/>}/>
                      <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;