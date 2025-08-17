import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const donors = [
  {
    name: 'Vammy',
    email: 'vammy@gmail.com',
    amount: 1160,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vammy',
  },
];

const girlPhoto =
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'; // smiling little girl

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const topDonor = donors[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-10 py-10">
        {/* LEFT: Hero image with Most Valued Donor card */}
        <div className="relative">
          <img
            src={girlPhoto}
            alt="Smiling little girl"
            className="h-[480px] w-full object-cover rounded-2xl shadow-md"
          />

          {/* Most Valued Donor card (top-left corner) */}
          <div className="absolute -top-6 -left-4 sm:top-4 sm:left-4 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-200 p-4 sm:p-5 w-[280px]">
            <div className="text-sm font-semibold text-gray-800 mb-2">
              🌟 Most Valued Donor
            </div>
            <div className="flex items-center gap-3">
              <img
                src={topDonor.avatar}
                alt={topDonor.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-bold text-gray-900">{topDonor.name}</div>
                <div className="text-xs text-gray-500">{topDonor.email}</div>
              </div>
            </div>
            <div className="mt-3 text-emerald-600 font-semibold">
              ${topDonor.amount.toLocaleString()} Donated
            </div>
          </div>
        </div>

        {/* RIGHT: Auth form + actions */}
        <div className="flex items-center">
          <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 text-center">
              Welcome to Online Donor Tracker
            </h1>
            <p className="text-gray-600 text-center mt-2">
              Login or register to add donors and view contributions.
            </p>

            {/* Login / Register form */}
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Auth buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => navigate('/login')}
                  className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="w-1/2 bg-gray-900 hover:bg-black text-white font-semibold py-2.5 rounded-lg shadow"
                >
                  Register
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="mx-3 text-xs uppercase tracking-wider text-gray-500">
                or
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              By continuing you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
