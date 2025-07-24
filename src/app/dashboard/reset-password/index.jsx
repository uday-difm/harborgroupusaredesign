'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { baseUrl } from '@lib/config';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpmsg, setOptmsg] = useState('');
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState('');

  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setErrors('');
    try {
      await axios.post(`${baseUrl}/api/dashboard/admin/reset-password`, { email });
      setOptmsg('Sent OTP to your email. Please check!');
      setStep(2);
    } catch (error) {
      setErrors(error.response?.data?.error || 'Something went wrong.');
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setErrors('');
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
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setErrors('');
    if (newPassword !== confirmPassword) {
      setErrors('Passwords do not match');
      return;
    }

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
          <div className="mb-4">
            <label className="text-sm font-semibold text-white mb-2 block">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full rounded-md px-4 py-3 bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label className="text-sm font-semibold text-white mb-2 block">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter verification code"
              className="w-full rounded-md px-4 py-3 bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        );
      case 3:
        return (
          <>
            <div className="mb-4">
              <label className="text-sm font-semibold text-white mb-2 block">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                placeholder="New password"
                className="w-full rounded-md px-4 py-3 bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-white mb-2 block">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm password"
                className="w-full rounded-md px-4 py-3 bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password | WMH India</title>
      </Head>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
        style={{
          backgroundImage:
            "url('https://worldmodelhunt.s3-eu-central-2.ionoscloud.com/dashboard_images/WMH_11zon.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-black/50 z-0" />

        <div className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-md rounded-xl p-8 sm:p-10 shadow-2xl border border-white/30">
          <h2 className="text-center text-3xl font-extrabold text-white mb-2">Forgot Password</h2>
          <p className="text-center text-gray-200 mb-6 text-sm sm:text-base">
            {otpmsg
              ? 'Enter the verification code sent to your email.'
              : 'Enter your verified email to receive a reset link.'}
          </p>

          <form
            onSubmit={
              step === 1
                ? handleForgotPassword
                : step === 2
                ? handleOtpVerification
                : handleUpdatePassword
            }
          >
            {renderStepFields()}
            {errors && <p className="text-red-300 text-sm mb-4">{errors}</p>}

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300"
            >
              {step === 3 ? 'Update Password' : 'Next'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
