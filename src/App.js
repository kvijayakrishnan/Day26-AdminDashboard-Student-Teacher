// importing modules and methods
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./Student/userContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// importing components

import Sidebar from './Component/Sidebar';
import Navigation from './Component/Navbar';
import Dashboard from './Component/Dashboard'
import Footer from "./Component/Footer";
import Teachers from "./Teacher/Teachers";
import TeacherCreate from "./Teacher/TeacherCreate";
import Teachersedit from "./Teacher/TeachersEdit";
import Student from "./Student/Students";
import Studentscreate from "./Student/StudentsCreate";
import Studentssedit from "./Student/StudentsEdit";



function App() {
 return <>
 <Router> 
   <div id="wrapper">
   <Sidebar></Sidebar>
   <div id="content-wrapper" class="d-flex flex-column">
   <div id="content">
        <Navigation></Navigation>
        <UserProvider>
        <Switch>
         <Route path="/dashboard" component={Dashboard} exact={true}></Route>
         <Route path="/teachers" component={Teachers} exact={true}></Route>
         <Route path="/students" component={Student} exact={true}></Route>
         <Route path="/studentscreate" component={Studentscreate} exact={true}></Route>
         <Route path="/teacherscreate" component={TeacherCreate} exact={true}></Route>
         <Route path="/teachersedit/:id" component={Teachersedit} exact={true}></Route>
         <Route path="/studentsedit/:id" component={Studentssedit} exact={true}></Route>
       </Switch>
       </UserProvider>
   </div>
   <Footer></Footer>
   </div>
 </div>
 </Router>


 </>
}

export default App;
