import { useState } from 'react';
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Admin from '../pages/Admin'
import ReactDOM from "react-dom/client";
import bcrypt from "bcryptjs";
import { db } from '../FirebaseConfig'
import { useAuth } from '../AuthContext';


const AdminLogin = () => {
  const { setIsAdmin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

    const handleUnauthorized = (msg) => {
    alert(msg);
    navigate("/", { replace: true });
    };




























  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,_119,_198,_0.3),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,_119,_198,_0.3),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,_200,_255,_0.2),_transparent_50%)]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-32 h-32 border border-purple-400/20 rounded-full animate-spin top-1/4 left-1/4" style={{ animationDuration: '20s' }}></div>
        <div className="absolute w-24 h-24 border-2 border-cyan-400/20 rotate-45 top-3/4 right-1/4" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
        <div className="absolute w-16 h-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg rotate-12 bottom-1/3 left-1/6 animate-pulse"></div>
        <div className="absolute w-20 h-20 border border-blue-400/20 rounded-lg rotate-45 top-1/2 right-1/6 animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Login container */}
      <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 w-full max-w-md shadow-2xl shadow-black/50 relative z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl hover:shadow-black/70">
        
        {/* Logo */}
        <div className="text-center pb-5">
          <h1 className="text-4xl font-light tracking-widest pb-1 text-transparent" style={{ background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight:"400" }}>
            ADMIN
          </h1>
          <p className="text-gray-400 text-sm tracking-wide">Welcome back !</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Email field */}
          <div className="group">
            <label htmlFor="email" className="block text-gray-300 text-sm pb-2 font-medium tracking-wider">
              Email &#x2192;
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-white/10 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 focus:-translate-y-1 outline-none group-hover:scale-105"
              required
            />
          </div>

          {/* Password field */}
          <div className="group pt-6 pb-7">
            <label htmlFor="password" className="block text-gray-300 text-sm pb-2 font-medium tracking-wider">
              Password &#x2192;
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-white/10 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 focus:-translate-y-1 outline-none group-hover:scale-105"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-600 text-white font-medium rounded-xl transition-all duration-300 hover:from-slate-700 hover:to-slate-800 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Custom styles for animations and effects */}
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(20px) rotate(240deg); }
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;