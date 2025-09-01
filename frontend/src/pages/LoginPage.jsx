import React, { useState } from 'react'

import { ShipWheelIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin.js';



const LoginPage = () => {

  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const {isPending, error, loginMutation} = useLogin();

  const handlelogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  }

  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="forest">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>
        {/* Login from Section */}
        <div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>
        {/*logo */}
        <div className='mb-4 flex items-center justify-start gap-2'>
          <ShipWheelIcon className='size-9 text-primary'/>
          <span className='text-3xl font-bold font-mono bg-clip-text text-transparentbg-gradient-to-r from-primary to-secondary tracking-wider'>
            Vida
          </span>
        </div>
        {/*error display message */}
        {error && (
          <div className='alert alert-error mb-4'>
            <span>{error.response.data.message}</span>
          </div>
        )}
        <div className='w-full'>
          <form onSubmit={handlelogin}>
            <div className='space-y-4'>
              <div>
                <h2 className='text-xl font-semibold'>Welcome Back</h2>
                <p className='text-sm opacity-70'>
                  Sign In to your account to continue your Journey</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='form-control w-full space-y-2'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input 
                    type="email"
                    placeholder='Enter your email'
                    className='input input-bordered w-full'
                    value={loginData.email}
                    onChange={(e) => setLogindata({...loginData, email: e.target.value})}
                    required
                  />
                </div>
                <div className='form-control w-full space-y-2'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input 
                    type="password"
                    placeholder='********'
                    className='input input-bordered w-full'
                    value={loginData.password}
                    onChange={(e) => setLogindata({...loginData, password: e.target.value})}
                    required
                  />
                </div>
                <button type='submit' className='btn btn-primary w-full' disabled={isPending}>
                  {isPending ? (
                    <>
                    <span className='loading loading-spinner loading-xs'></span>
                    Signing In... 
                    </>
                  ) : (
                    "Sign In"
                  )}

                </button>
                  <div className='text-center mt-4'>
                    <p className='text-sm'>
                      Don't have an account?{" "}
                      <Link to="/signup" className='text-primary hover:underline'>
                      Create One
                      </Link>
                    </p>
                  </div>
              </div>
            </div>
          </form>
        </div>
        </div>
        {/* Image Section */}
        <div className='hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center'>
          <div className='max-w-md p-8'>
            {/*Illustration Image */}
            <div className='relative aspect-square max-w-sm mx-auto'>
              <img src="/Video call-bro.png" alt="Language Section Illustration" className='w-full h-full' />
            </div>
            <div className='text-center mt-6 space-y-3'>
              <h2 className='text-xl font-semibold'>Connect With People WorldWide by Vida</h2>
              <p className='opacity-70'>
                  Do Conversations, connect with people, make friends and explore the world with Vida 
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage