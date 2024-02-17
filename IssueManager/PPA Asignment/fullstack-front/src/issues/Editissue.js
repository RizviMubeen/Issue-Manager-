import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';


export default function EditIssue() {

    let navigate=useNavigate();
    const { id } = useParams();

const[issue,setissue]=useState({
  
  summary:"",
  status:"",
  email:"",
  issue:""
});
useEffect(()=>{
loadissue()
},[]
)

const{issues,summary,status,email}=issue;

const onInputChange=(e)=>{
    setissue({...issue,[e.target.name]:e.target.value});
};

const onSubmit= async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/allissues/${id}`,issue);
    navigate("/");
};
const loadissue=async()=>{
  const result=await axios.get(`http://localhost:8080/allissues/${id}`,issue);
  setissue(result.data);
}

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Issue</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Issue
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Issue"
                name="issue"
                value={issue.issue}
                onChange={(e)=>onInputChange(e)} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Summary" className="form-label">
                Summary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Small summary"
                name="summary" 
                value={issue.summary}
                onChange={(e)=>onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
              />
            </div>

            <div className="mb-3">
            <label htmlFor="Status" className="form-label">
              Status
            </label>
            <select
              className="form-control"
              name="status"
              value={status}
              onChange={(e) => onInputChange(e)}
            >
              <option value="finished">Finished</option>
              <option value="todo" >Todo</option>
              <option value="active">Active</option>
            </select>
          </div>

            <button type="submit" className="btn btn-outline-primary">Edit</button>
            <Link  className="btn btn-outline-danger mx-2" to={"/"}>Cancel</Link>
            </form>

            </div>
        </div>
    </div>
  );
}
