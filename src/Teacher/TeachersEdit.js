import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { useFormik } from "formik";

export default function Teachersedit(props){

    let history = useHistory();
    let [initialData,setInitialState]  = useState({});
    useEffect( async()=>{
        let data = await fetch(`https://63f50ba255677ef68bc8f99d.mockapi.io/Teacher/${props.match.params.id}`);
        let parsedData = await data.json();
         formik.values.Name = parsedData.Name;
        formik.values.Emailid = parsedData.Emailid;
        formik.values.Phonenumber = parsedData.Phonenumber;
        setInitialState(parsedData); 
    },[]);
    
    let validate = (values) =>{
      const errors = {}
      if(!values.Name){
        errors.Name = 'Name is Required';
      }
      if(!values.Emailid){
        errors.Emailid = 'Emailid is Required';
      }
      if(!values.Phonenumber){
        errors.Phonenumber = 'Phonenumber is Required';
      }
     return errors
    }
  
    const formik =  useFormik({
      initialValues: {
          Name:"",
          Emailid:"",
          Phonenumber:""
        },
      validate,
      onSubmit: async (values) => {
        
        let Name = values.Name;
        let Emailid = values.Emailid;
        let Phonenumber = values.Phonenumber;
        await fetch(`https://63f50ba255677ef68bc8f99d.mockapi.io/Teacher/${props.match.params.id}`,{
        method: "PUT",
        body: JSON.stringify({
          Name,
          Emailid,
          Phonenumber
        }),
        headers: {
          "Content-type":"application/json"
        }

      })

      history.push('/Teachers');
        
      }
    })

    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Edit Product Form</h1>
            </div>
        </div>
       { JSON.stringify(initialData) === '{}' ? <div><h1>Loading...!!</h1></div> :
    <form onSubmit={formik.handleSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" class="form-control" name="Name" value={formik.values.Name} onChange={formik.handleChange}/>
      {formik.touched.Name && formik.errors.Name ? (<div style={{color:'red'}}>{formik.errors.Name}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label htmlFor="inputPassword4">Emailid</label>
      <input type="text" class="form-control"  name="Emailid" value={formik.values.Emailid} onChange={formik.handleChange} />
      {formik.touched.Emailid && formik.errors.Emailid ? (<div style={{color:'red'}}>{formik.errors.Emailid}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label htmlFor="inputEmail4">Phonenumber</label>
      <input type="number" class="form-control"  name="Phonenumber" value={formik.values.Phonenumber} onChange={formik.handleChange} />
      {formik.touched.Phonenumber && formik.errors.Phonenumber ? (<div style={{color:'red'}}>{formik.errors.Phonenumber}</div> ) : null}
    </div>
    <div className="col-md-12">        
            <input class="btn btn-primary" type="submit" value="submit"/>     
    </div>
   </div>
   </form> }
   </div>
    </>
}