import { useHistory } from "react-router";
import { useFormik } from "formik";

export default function Studentscreate() {
  let history = useHistory();

  let validate = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.Name = "Name is Required";
    } else if (values.Name.length > 15) {
      errors.Name = "Must be 15 characters or less";
    }
    if (!values.Emailid) {
      errors.Emailid = "Emailid is Required";
    }
    if (!values.Batch) {
      errors.Batch = "Batch is Required";
    }
    if (!values.Age) {
      errors.Age = "Age is Required";
    } else if (values.Age <= 20) {
      errors.Age = "Required age is between 20 and 50";
    } else if (values.Age >= 50) {
      errors.Age = "Required age is between 20 and 50";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      Emailid: "",
      Batch: "",
      Age: "",
    },
    validate,
    onSubmit: async (values) => {
      let Name = values.Name;
      let Age = values.Age;
      let Emailid = values.Emailid;
      let Batch = values.Batch;

      await fetch("https://63f50ba255677ef68bc8f99d.mockapi.io/Student", {
        method: "POST",
        body: JSON.stringify({
          Name,
          Emailid,
          Batch,
          Age,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      history.push("/students");
    },
  });

  return (
    <>
      <div className="container" no>
        <div className="row">
          <div className="col-lg-12">
            <h1>Create Student</h1>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">FirstName</label>
              <input
                type="text"
                class="form-control"
                placeholder="Firstname"
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
              />
              {formik.touched.Name && formik.errors.Name ? (
                <div style={{ color: "red" }}>{formik.errors.Name}</div>
              ) : null}
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Emailid</label>
              <input
                type="text"
                class="form-control"
                placeholder="Emailid"
                name="Emailid"
                value={formik.values.Emailid}
                onChange={formik.handleChange}
              />
              {formik.touched.Emailid && formik.errors.Emailid ? (
                <div style={{ color: "red" }}>{formik.errors.Emailid}</div>
              ) : null}
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Batch</label>
              <input
                type="text"
                class="form-control"
                placeholder="Batch"
                name="Batch"
                value={formik.values.Batch}
                onChange={formik.handleChange}
              />
              {formik.touched.Batch && formik.errors.Batch ? (
                <div style={{ color: "red" }}>{formik.errors.Batch}</div>
              ) : null}
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Age</label>
              <input
                type="number"
                class="form-control"
                placeholder="Age"
                name="Age"
                value={formik.values.Age}
                onChange={formik.handleChange}
              />
              {formik.touched.Age && formik.errors.Age ? (
                <div style={{ color: "red" }}>{formik.errors.Age}</div>
              ) : null}
            </div>

            <div className="row">
              <div className="col-lg-6">
                <input class="btn btn-primary" type="submit" value="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
