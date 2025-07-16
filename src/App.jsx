import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminOverView from './View/AdminOverview/AdminOverView';
import Register from './View/Register/Register';
import Verify from './View/Verify/Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminOverView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
