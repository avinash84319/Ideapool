import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import IdeasPage from './screens/IdeasPage';
import SingleChat from './components/SingleChat';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="singlechat" element={<SingleChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
