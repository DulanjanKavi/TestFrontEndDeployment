import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminOverView = () => {
    const navigate = useNavigate();

    return (
        <div className='text-black bg-red-800 p-4'>
            <h1>Admin Overview</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
                onClick={() => navigate('/register')}
            >
                Go to Register
            </button>
        </div>
    );
};

export default AdminOverView;

