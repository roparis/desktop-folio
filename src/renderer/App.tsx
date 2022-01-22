import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <a href="/profile">Profile</a>
    </div>
  );
};

const Profile = () => {
  return <p>Profile</p>;
};

export default function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Layout>
  );
}
