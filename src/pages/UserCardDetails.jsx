import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const UserCardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div className="max-w-3xl mx-auto px-6 py-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600"
      >
        ← Back
      </button>

      <div className="bg-blue-50 shadow-md rounded-xl p-6 space-y-4">
        <h1 className="text-3xl font-bold">{user.name}</h1>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>

        <div>
          <h2 className="text-xl font-semibold mt-4">Address</h2>
          <p>
            {user.address.street}, {user.address.suite},{" "}
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-4">Geo Location</h2>
          <p>Latitude: {user.address.geo.lat}</p>
          <p>Longitude: {user.address.geo.lng}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCardDetails;