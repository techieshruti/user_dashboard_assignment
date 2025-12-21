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
    <div className="mx-4 justify-center items-center">

      {/* header */}
      <div className="flex flex-col sm:justify-between mt-4 gap-4 mb-4 sm:flex-row">
        <div>
          {/* Search */}
          <input 
          className="bg-gray-100 px-8 py-2 rounded-xl border border-[#cae4ef]"
          type="text" placeholder="Search by Username..."/>
        </div>

        {/* craete User */}
        <button
        className="bg-[#213448] text-white px-5 py-2 cursor-pointer rounded-xl"
        >Create User +</button>
      </div>


      <h1 className="font-bold text-2xl py-2 ml-4">User Dashboard</h1>

      {/* UserCard */}
      <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
        {users.map((user)=> (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
      
    </div>
  );
};

export default Dashboard;
