{/*import React from 'react';
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
};*/}

import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, applyActionCode } from 'firebase/auth';
import { useSearchParams } from 'react-router-dom';

const firebaseConfig = {

    apiKey: "AIzaSyDsjpleMAZvh4v6dIodbEZ9Au3NOitktpw",
    authDomain: "badvegan.firebaseapp.com",
    databaseURL: "https://badvegan-default-rtdb.firebaseio.com",
    projectId: "badvegan",
    storageBucket: "gs://badvegan.firebasestorage.app",
    messagingSenderId: "939374407337",
    appId: "1:939374407337:web:3a78d222898b165f29c3b8",
    measurementId: "G-89JBN05M90"
};

initializeApp(firebaseConfig);

const AdminOverView = () => {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState("Verifying...");
    const oobCode = searchParams.get("oobCode");
    const mode = searchParams.get("mode");

    useEffect(() => {
        const verifyEmail = async () => {
            if (mode === "verifyEmail" && oobCode) {
                try {
                    const auth = getAuth();
                    await applyActionCode(auth, oobCode);
                    setStatus("✅ Email verified successfully!");
                } catch (err) {
                    setStatus("❌ Verification failed: " + err.message);
                }
            } else {
                setStatus("Invalid verification request.");
            }
        };
        verifyEmail();
    }, [mode, oobCode]);

    const openApp = () => {
        window.location.href = "badvegan://verified"; // Your app's deep link
    };

    return (
        <div style={{ textAlign: "center", marginTop: "5rem", color: "#FCF9ED", background: "#2A2A2C", height: "100vh" }}>
            <h1>BadVegan Email Verification</h1>
            <p>{status}</p>
            {status.includes("✅") && (
                <button onClick={openApp} style={{ padding: "1em 2em", marginTop: "2em", background: "#98B5FF", color: "#2A2A2C", fontWeight: "bold", border: "none", borderRadius: "5px" }}>
                    Open App
                </button>
            )}
        </div>
    );
};

{/*export default VerificationPage;


  apiKey: "AIzaSyDsjpleMAZvh4v6dIodbEZ9Au3NOitktpw",
  authDomain: "badvegan.firebaseapp.com",
  databaseURL: "https://badvegan-default-rtdb.firebaseio.com",
  projectId: "badvegan",
  storageBucket: "gs://badvegan.firebasestorage.app",
  messagingSenderId: "939374407337",
  appId: "1:939374407337:web:3a78d222898b165f29c3b8",
  measurementId: "G-89JBN05M90"*/}


export default AdminOverView;

