import { useHistory } from "react-router";
import { useFormik } from "formik";

export default function (){


    let history = useHistory();
    
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

    const formik = useFormik({
      initialValues: {
          Name: '',
          Emailid:'',
          Phonenumber:'',
        },
      validate,
      onSubmit: async (values) => {
        
        let Name = values.Name;
        let Emailid = values.Emailid;
        let Phonenumber = values.Phonenumber;
        await fetch("https://63f50ba255677ef68bc8f99d.mockapi.io/Teacher",{
        method: "POST",
        body: JSON.stringify({
          Name,
          Emailid,
          Phonenumber
        }),
        headers: {
          "Content-type":"application/json"
        }

      })

      history.push('/teachers');
        
      }
    })

    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Create </h1>
            </div>
        </div>
    <form onSubmit={formik.handleSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" placeholder="Name" name="Name" value={formik.values.Name} onChange={formik.handleChange}/>
      {formik.touched.Name && formik.errors.Name ? (<div style={{color:'red'}}>{formik.errors.Name}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Emailid</label>
      <input type="text" class="form-control" placeholder="Emailid" name="Emailid" value={formik.values.Emailid} onChange={formik.handleChange} />
      {formik.touched.Emailid && formik.errors.Emailid ? (<div style={{color:'red'}}>{formik.errors.Emailid}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Phonenumber</label>
      <input type="number" class="form-control" placeholder="Phonenumber" name="Phonenumber" value={formik.values.Phonenumber} onChange={formik.handleChange} />
      {formik.touched.Phonenumber && formik.errors.Phonenumber ? (<div style={{color:'red'}}>{formik.errors.Phonenumber}</div> ) : null}
    </div>
    <div className="col-md-12">
        
            <input class="btn btn-primary" type="submit" value="submit"/>
       
    </div>
   </div>
   </form>
   </div>
    </>
}