import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'bootstrap';


export default function Dashboard() {
    const [userCount, setUserCount] = useState(0);
    const [activeCount, setActiveCount] = useState(0);
    const [todoCount, setTodoCount] = useState(0);
    const [finishedCount, setFinishedCount] = useState(0);
    const [hoveredElement, setHoveredElement] = useState(null);
    const [issue,setUsers]=useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        await axios.get('http://localhost:8080/allissues')
            .then(response => setUserCount(response.data.length))
            .catch(error => console.error('Error fetching user count:', error));

            const result= await axios.get("http://localhost:8080/allissues");
            setUsers(result.data);
    

            axios.get('http://localhost:8080/allissues')
            .then(response => {
                const userData = response.data;
                setUserCount(userData.length);

                // Count different statuses
                let active = 0;
                let todo = 0;
                let finished = 0;
                const activeUsersData = [];

                userData.forEach(issue => {
                    switch (issue.status) {
                        case 'active':
                            active++;
                            activeUsersData.push(issue);
                            break;
                        case 'todo':
                            todo++;
                            break;
                        case 'finished':
                            finished++;
                            break;
                        // Add more cases if needed for other statuses
                        default:
                            break;
                    }
                });

                setActiveCount(active);
                setTodoCount(todo);
                setFinishedCount(finished);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    const handleMouseLeave = () => {
        setHoveredElement(null);
    };

    const handleHover = (countType) => {
        setHoveredElement(countType);
    };

    const getCountClass = (countType) => {
        return `count ${hoveredElement === countType ? 'hovered' : ''}`;
    };

    return (
    <div>
        <div id="counter">
            <div
                className={getCountClass('user')}
                onMouseEnter={() => handleHover('user')}
                onMouseLeave={handleMouseLeave}
            >
                <span className="fa fa-smile-o"></span>
                <p className="number">{userCount}</p>
                <h4>Total Issues</h4>
            </div>

            <div
                className={getCountClass('active')}
                onMouseEnter={() => handleHover('active')}
                onMouseLeave={handleMouseLeave}
            >
                <span className="fa fa-trophy"></span>
                <p className="number">{activeCount}</p>
                <h4>Active</h4>
            </div>

            <div
                className={getCountClass('todo')}
                onMouseEnter={() => handleHover('todo')}
                onMouseLeave={handleMouseLeave}
            >
                <span className="fa fa-trophy"></span>
                <p className="number">{todoCount}</p>
                <h4>To Do</h4>
            </div>

            <div
                className={getCountClass('finished')}
                onMouseEnter={() => handleHover('finished')}
                onMouseLeave={handleMouseLeave}
            >
                <span className="fa fa-trophy"></span>
                <p className="number">{finishedCount}</p>
                <h4>Finished</h4>
            </div>
        </div>
        
        <div className='container'>
        <div className='py-4'>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Issue</th>
      <th scope="col">Summary</th>
      <th scope="col">Assignee</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
    {
     issue.map((issues,index)=>(
    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{issues.issue}</td>
      <td>{issues.summary}</td>
      <td>{issues.email}</td> 
      <td>{issues.status}</td> 
         
      <td>
    

</td>
    </tr>
        ))
}
   

   
  </tbody>
</table>

        </div>
    </div>
        
        </div>
    );
}