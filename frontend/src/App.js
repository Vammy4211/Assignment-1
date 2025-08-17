import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
//import Tasks from './pages/Tasks';
import AddDonor from './pages/AddDonor';
import DonorList from './pages/DonorList';
import Home from './pages/Home';
import Index from './pages/index';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-donor" element={<AddDonor />} />
        <Route path="/donors" element={<DonorList />} />
      </Routes>
    </Router>
  );
}

export default App;
