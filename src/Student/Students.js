import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Student() {
  let [studentList, setstudentList] = useState([]);
  useEffect(async () => {
    let users = await fetch(
      "https://63f50ba255677ef68bc8f99d.mockapi.io/Student"
    );
    let userData = await users.json();
    setstudentList([...userData]);
  }, useState([]));

  async function deleteData(id) {
    await fetch(`https://63f50ba255677ef68bc8f99d.mockapi.io/Student/${id}`,{method: "DELETE" });

    toast("Record Deleted", { position: "top-center" });
    window.setTimeout(function () {
      window.location.href = window.location.href;
    },Student);
  }
  return (
    <>
      <div class="container-fluid">
        <Link className="btn btn-primary m-3" to="/studentscreate">
          Create Student
        </Link>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Users List</h6>
          </div>

          <div class="card-body">
            <div class="table-responsive">
              {studentList.length > 0 ? (
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Emailid</th>
                      <th>Batch</th>
                      <th>Age</th>
                      <th>Edit</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentList.map((obj) => {
                      return (
                        <tr>
                          <td>{obj.Name}</td>
                          <td>{obj.Emailid}</td>
                          <td>{obj.Batch}</td>
                          <td>{obj.Age}</td>

                          <td>
                            <Link
                              to={`/studentsedit/${obj.id}`}
                              className="btn btn-warning"
                            >
                              Edit{" "}
                            </Link>
                          </td>
                          <td>
                            <button
                              type="button"
                              value="Delete"
                              className="btn btn-danger"
                              onClick={() => {
                                deleteData(obj.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div>
                  <h1>Loading..!</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
