import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/loginPage/loginPage';
import StudentHomepage from './components/pages/studentHomepage/studentHomepage';
import TeacherHomepage from './components/pages/teacherHomepage/teacherHomepage';
import StudentRegisterPage from './components/pages/studentRegisterPage/studentRegisterPage';
import TestPage from './components/pages/TakeTest/TestPage';

function App() {
  return (
    <BrowserRouter basename="/portal">
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/homeStudent' element={<StudentHomepage/>}/>
        <Route exact path='/homeTeacher' element={<TeacherHomepage/>}/>
        <Route exact path='/studentRegisterPage' element={<StudentRegisterPage/>}/>
        <Route exact path='/takeTestPage' element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
