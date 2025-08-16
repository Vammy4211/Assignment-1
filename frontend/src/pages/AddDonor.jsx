import { useState } from 'react';
import axiosInstance from '../axiosConfig';

const AddDonor = () => {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });

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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
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
  );
};

export default AddDonor;