'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const SignIn = () => {
  const [errors, setErrors] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setErrors('');    // Clear previous errors

    try {
      const res = await fetch(`/api/dashboard/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful');
        router.push('/dashboard');
      } else {
        setErrors(data.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setErrors('Something went wrong. Please try again later.');
    } finally {
      setLoading(false); // End loading state regardless of success or failure
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - WMH India</title>
        <meta name="description" content="Sign in to your WMH India account" />
      </Head>

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://harborgroupusa.s3-eu-central-2.ionoscloud.com/dashboard.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0" />

        <div className="relative z-10 max-w-7xl w-full px-4 py-10">
          <div className=" items-center ">
            {/* Right: Login Form */}
            <div className="bg-white/20 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-md mx-auto border border-white/30">
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Sign In</h2>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="username" className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-200">
                    <input
                      type="email"
                      name="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="username"
                      className="w-full px-4 py-2 border rounded-lg bg-white/80 text-gray-900 focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 group-focus-within:text-red-500">📧</span>
                  </div>
                </div>

                {/* Password */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-200">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      className="w-full px-4 py-2 border rounded-lg bg-white/80 text-gray-900 focus:outline-none"
                      placeholder="6+ Characters, 1 Capital letter"
                      required
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 group-focus-within:text-red-500">🔒</span>
                  </div>
                </div>

                {/* Error Message */}
                {errors && <p className="text-red-400 text-sm mb-4">{errors}</p>}

                {/* Remember Me Checkbox */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2 sm:gap-0">
                  <label className="inline-flex items-center text-white">
                    <input type="checkbox" className="form-checkbox text-red-500" />
                    <span className="ml-2 text-sm">Remember Me</span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`w-full py-3 bg-sky-500 text-white font-bold rounded-lg transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;