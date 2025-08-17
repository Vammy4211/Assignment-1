import { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const AddDonor = () => {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });
  const navigate = useNavigate(); // <-- Move this inside the component

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/donors', formData);
      alert('Donor added!');
      setFormData({ name: '', email: '', amount: '' });
    } catch (error) {
      alert('Failed to add donor.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Add Donor</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={e => setFormData({ ...formData, amount: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Add Donor</button>
      </form>
      <button
        onClick={() => navigate('/donors')}
        className="w-full bg-blue-600 text-white p-2 rounded mt-4"
      >
        View Donor List
      </button>
    </div>
  );
};

export default AddDonor;