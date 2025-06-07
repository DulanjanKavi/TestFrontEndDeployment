import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminOverView from './View/AdminOverview/AdminOverView';
import Register from './View/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminOverView />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
