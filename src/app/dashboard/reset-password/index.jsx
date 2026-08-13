'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { baseUrl } from '@/lib/config';
import { FormField } from '@/app/component/dashboard-ui/FormField';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpmsg, setOptmsg] = useState('');
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setErrors('');
    setLoading(true);
    try {
      await axios.post(`${baseUrl}/api/dashboard/admin/reset-password`, { email });
      setOptmsg('Sent OTP to your email. Please check!');
      setStep(2);
    } catch (error) {
      setErrors(error.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setErrors('');
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/dashboard/admin/verify-otp`, { email, otp });

      if (response.data.success) {
        setOptmsg('OTP verified successfully!');
        setStep(3);
      } else {
        setErrors('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setErrors(error.response?.data?.error || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setErrors('');
    if (newPassword !== confirmPassword) {
      setErrors('Passwords do not match');
      return;
    }
    setLoading(true);

    try {
      await axios.post(`${baseUrl}/api/dashboard/admin/update-password`, {
        email,
        otp,
        newPassword,
        confirmPassword,
      });
      setStep(4);
    } catch (error) {
      setErrors(error.response?.data?.Error || 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  if (step === 4) {
    router.push('/dashboard/login');
    return null;
  }

  const renderStepFields = () => {
    switch (step) {
      case 1:
        return (
          <FormField
            type="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        );
      case 2:
        return (
          <FormField
            type="text"
            label="OTP Code"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter verification code"
            required
          />
        );
      case 3:
        return (
          <div className="space-y-6">
            <FormField
              type="password"
              label="New Password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
            <FormField
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password - Dashboard</title>
      </Head>

      <div className="relative min-h-screen bg-navy-50 flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-navy-100/40 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-navy-900 font-display">Forgot Password</h1>
            <p className="text-navy-500 mt-2">
              {otpmsg ? otpmsg : 'Enter your verified email to receive a reset link.'}
            </p>
          </div>

          <div className="card-elevated p-8 sm:p-10 w-full">
            <form
              onSubmit={
                step === 1
                  ? handleForgotPassword
                  : step === 2
                  ? handleOtpVerification
                  : handleUpdatePassword
              }
              className="space-y-6"
            >
              {renderStepFields()}

              {errors && <p className="text-error text-sm font-medium">{errors}</p>}

              <button
                type="submit"
                className={`w-full btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Processing...' : step === 3 ? 'Update Password' : 'Next'}
              </button>

              <div className="text-center pt-4">
                <a href="/dashboard/login" className="text-sm font-medium text-navy-500 hover:text-navy-900">
                  Back to Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
