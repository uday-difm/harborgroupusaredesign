'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { FormField } from '@/app/component/dashboard-ui/FormField';
import { useToast } from '@/app/component/dashboard-ui/Toast';

const SignIn = () => {
  const [errors, setErrors] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors('');

    try {
      const res = await fetch(`/api/dashboard/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        addToast('Login successful', 'success');
        router.push('/dashboard');
      } else {
        setErrors(data.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setErrors('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - Dashboard</title>
        <meta name="description" content="Sign in to your account" />
      </Head>

      <div className="relative min-h-screen bg-navy-50 flex items-center justify-center p-4">
        {/* Background Pattern / Decor (Optional, but using a minimal approach) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-navy-100/40 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-navy-900 font-display">Dashboard</h1>
            <p className="text-navy-500 mt-2">Sign in to manage your content</p>
          </div>

          <div className="card-elevated p-8 sm:p-10 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                type="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
              />

              <FormField
                type="password"
                label="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              {errors && <p className="text-error text-sm font-medium">{errors}</p>}

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-navy-300 text-accent focus:ring-accent/30" />
                  <span className="text-sm text-navy-600">Remember me</span>
                </label>
                <a href="/dashboard/reset-password" className="text-sm font-medium text-accent hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;