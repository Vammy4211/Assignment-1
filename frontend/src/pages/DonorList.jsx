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
    <div className="max-w-3xl mx-auto mt-12 bg-white p-8 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Donor List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {donors.map(donor => (
          <div key={donor._id} className="flex items-center bg-gray-50 rounded-lg shadow p-4">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${donor.name}`}
              alt={donor.name}
              className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
            />
            <div>
              <span className="font-bold text-lg">{donor.name}</span>
              <div className="text-gray-500 text-sm">{donor.email}</div>
              <div className="text-green-600 font-semibold text-md mt-1">₹{donor.amount}</div>
            </div>
            {donor.cause && (
              <div className="text-blue-600 text-sm mt-1">Cause: {donor.cause}</div>
            )}
          </div>
        ))}
      </div>
      {donors.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No donors yet. Be the first to contribute!</div>
      )}
    </div>
  );
};

export default DonorList;