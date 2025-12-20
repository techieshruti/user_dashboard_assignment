import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) throw new Error("Failed to fetch Users data!");

        const data = await response.json();
        setUsers(data);

      } catch (e) {
        setError(e.message);
      } finally {
        setFetching(false);
      }
    };
    fetchUserData();
  },[]);

  if(fetching) return <p>fetching user data</p>
  if(error) return <p className="text-red-800">x{error}</p>

  return (
    <div className="m-4">
      <h1 className="font-bold text-xl">User Dashboard</h1>

      {/* UserCard */}

      <div>
        {users.map((user)=> (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
      
    </div>
  );
};

export default Dashboard;
