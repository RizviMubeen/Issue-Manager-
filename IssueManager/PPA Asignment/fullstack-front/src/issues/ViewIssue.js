import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewIssue() {
  const [issue, setissue] = useState({
    summary:"",
    status:"",
    email:"",
    issue:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadIssue();
  }, []);

  const loadIssue = async () => {
    const result = await axios.get(`http://localhost:8080/allissues/${id}`);
    setissue(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Issue Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Issue id : {issue.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Issue:</b>
                  {issue.issue}
                </li>
                <li className="list-group-item">
                  <b>Summary:</b>
                  {issue.summary}
                </li>
                <li className="list-group-item">
                  <b>Assignee:</b>
                  {issue.email}
                </li>
                <li className="list-group-item">
                  <b>Status:</b>
                  {issue.status}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
  }