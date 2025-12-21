import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Search } from "lucide-react";
import CreateUserForm from "../components/CreateUserForm";

const formData=[
  {id:1, name:"name", type:"text", placeholder: "Enter your name..."},
  {id:2, name:"email", type:"email", placeholder: "Enter your email..."},
  {id:3, name:"phone", type:"number", placeholder: "Enter your phone..."},
  {id:4, name:"comapany", type:"text", placeholder: "Enter your company name..."},

]

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)

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

  // filter Users
  const filterByUsername = users.filter((user) => 
  user.name?.toLowerCase().includes(search.toLowerCase())
  );

  if(fetching) return <p>fetching user data</p>
  if(error) return <p className="text-red-800">x{error}</p>

// form handling
const addUser = (newUser) => {
  setUsers((prev) => [...prev, {id: Date.now(), ...newUser, company:{name: newUser.company},},]);
}

  return (
    <div className="mx-4 justify-center items-center">


      {/* header */}
      <div className="flex flex-col sm:flex-row sm:justify-between mt-4 gap-4 mb-4">

        {/* Search */}
        <div className="relative max-w-sm w-full">
          <input 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="w-full bg-gray-100 px-8 py-2 rounded-xl border border-[#cae4ef]"
          type="text" placeholder="Search by Username..."/>
          <Search 
          size={18} 
          className="absolute left-2 top-3 translate-0-y-1/2 text-[#213448]"/>
        </div>

        {/* craete User */}
        <button
        onClick={()=> setIsFormOpen(true)}
        className="bg-[#213448] text-white px-5 py-2 cursor-pointer rounded-xl"
        >Create User +</button>
      </div>

      {/* if form opens */}
      {isFormOpen && (
        <div className="fixed flex items-center z-50 justify-center inset-0">
          <div className="bg-gray-100 rounded-2xl shadow-xl p-6 w-[90%] max-w-xl relative pointer-events-auto">
            <button
          onClick={()=>setIsFormOpen(false)}
          className="absolute top-3 right-8 text-lg font-bold cursor-pointer"
          >X</button>
          <CreateUserForm
          formData={formData}
          addUser={(data)=>{addUser(data);
            setIsFormOpen(false);
          }}
          />
          </div>
        </div>
      )}


      <h1 className="font-bold text-2xl py-2 ml-4">User Dashboard</h1>

      {/* UserCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
        filterByUsername.length > 0 ?(
        filterByUsername.map((user)=> (
          <UserCard key={user.id} user={user}/>
        ))) : (<p>No user found</p>)
      }
      </div>
      
    </div>
  );
};

export default Dashboard;
