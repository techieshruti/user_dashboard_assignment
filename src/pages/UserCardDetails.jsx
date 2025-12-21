import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";


const UserCardDetails = () => {
  const { id } = useParams();
  const navigate =useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;


  return (
    <div className='max-w-3xl mx-auto px-6 py-6'>
      <button
      onClick={()=>navigate(-1)}
      className='mb-4 text-blue-300'
      >← Back</button>

      <div>
        <h1>Name: {user.name}</h1>
        <p>Email:{user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
      </div>

<div>
  <h2>Address</h2>
  <p>{user.address.street},{user.address.suite},{" "}{user.address.city}-{user.address.zipcode}</p>
</div>

<div>
  <h2>Geo Location</h2>
  <p>Latitude: {user.address.geo.lat}</p>
  <p>Longitude: {user.address.geo.lng}</p>

</div>

    </div>
  )
}

export default UserCardDetails