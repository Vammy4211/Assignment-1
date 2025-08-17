import { useNavigate } from 'react-router-dom';

const donors = [
  { name: "vammy", email: "vammy@gmail.com", amount: 116, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vammy" },
  { name: "Ravi", email: "ravi@gmail.com", amount: 250, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ravi" },
];

const causes = [
  { title: "Support Children's Education", description: "Help underprivileged children get access to quality education and resources." },
  { title: "Medical Aid for All", description: "Contribute to life-saving treatments for those in need." },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Online Donor Tracker</h1>
      <p className="mb-8 text-lg text-gray-700 text-center">
        Make a difference by supporting a cause and tracking your donations!
      </p>
      <div className="mb-10 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Featured Causes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {causes.map((cause, idx) => (
            <div key={idx} className="bg-white shadow rounded p-5">
              <h3 className="font-bold text-lg mb-2">{cause.title}</h3>
              <p className="text-gray-600">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Recent Donors</h2>
        <div className="flex gap-8 justify-center">
          {donors.map((donor, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white shadow rounded p-4">
              <img src={donor.avatar} alt={donor.name} className="w-20 h-20 rounded-full mb-2 animate-bounce" />
              <span className="font-bold">{donor.name}</span>
              <span className="text-sm text-gray-500">{donor.email}</span>
              <span className="text-green-600 font-semibold">₹{donor.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/add-donor')}
          className="bg-green-600 text-white px-6 py-2 rounded shadow text-lg"
        >
          Add Donor
        </button>
        <button
          onClick={() => navigate('/donors')}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow text-lg"
        >
          View Donor List
        </button>
      </div>
    </div>
  );
};

export default Index;