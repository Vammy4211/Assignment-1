import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/donors')
      .then(res => setDonors(res.data))
      .catch(() => alert('Failed to fetch donors.'));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Donor List</h2>
      <ul>
        {donors.map(donor => (
          <li key={donor._id} className="mb-2 border-b pb-2">
            <strong>{donor.name}</strong> ({donor.email}) - ₹{donor.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;