import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [issue,setissue]=useState([]);

    const{id}=useParams()

    useEffect(()=>{
        loadissue();
    },[]);

    const loadissue=async ()=>{
        const result= await axios.get("http://localhost:8080/allissues");
        setissue(result.data);
    };

    const deleteissue= async (id)=>{
        await axios.delete(`http://localhost:8080/allissues/${id}`);
        loadissue(); 
    }



  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Issue</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      
        issue.map((issues,index)=>(
          
    <tr>
      <th scope="row" key={issues.id}>{index}</th>
      <td>{issues.issue}</td>
      <td>{issues.status}</td>      
      <td>
      <Link
                    className="btn btn-primary mx-2"
                    to={`/viewissue/${issues.id}`}
                  >
                    View
        </Link>
        <Link className="btn btn-outline-primary mx-2"
        to={`/editissue/${issues.id}`}
        >Edit</Link>
        <button className="btn btn-danger mx-2" onClick={()=>deleteissue(issues.id)}>
            
            Delete</button>
      </td>
    </tr>
        ))
}
   

   
  </tbody>
</table>

        </div>
    </div>
  )
}
