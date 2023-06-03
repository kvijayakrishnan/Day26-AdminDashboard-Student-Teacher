import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export default function Teachers(){
  
    let [TeacherList,setTeacherList] = useState([]);
    useEffect(async ()=> {
        let users = await fetch("https://63f50ba255677ef68bc8f99d.mockapi.io/Teacher");
        let userData = await users.json();
        setTeacherList([...userData])
      
    },[])

    async function deleteData(id){
        await fetch(`https://63f50ba255677ef68bc8f99d.mockapi.io/Teacher/${id}`,{
            method: "DELETE",
            body: null,
            headers: {
              "Content-type":"/students"
            }
          })
          toast('Record Deleted',{position:"top-center"}); 
          window.setTimeout(function(){window.location.href = window.location.href},5000)
          
    }
    return <>
    <div class="container-fluid">




<Link className="btn btn-primary m-3" to="/teacherscreate">Create Teacher</Link>
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Teachers List</h6>
    </div>
    
    <div class="card-body">
        <div class="table-responsive">
            {
                TeacherList.length > 0 ?
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Emailid</th>
                        <th>Phonenumber</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                       TeacherList.map((obj)=>{
                            return <tr>
                            <td>{obj.Name}</td>
                            <td>{obj.Emailid}</td>
                            <td>{obj.Phonenumber}</td>
                            <td>
                                <Link to={`/teachersedit/${obj.id}`}className="btn btn-warning">Edit</Link>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={()=>{
                                    deleteData(obj.id)
                                }}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                  </tbody>
            </table>
            : <div><h1>Loading..!</h1></div>
                }
        </div>
    </div>
</div>

</div>
    </>
}