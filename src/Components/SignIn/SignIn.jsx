import React from 'react';
import img from "../../assets/signin.jpg";
import logo from '../../assets/logo.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setloading] = React.useState(false);
  const [apiError, setapiError] = React.useState(null);

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      setloading(true);
      axios
        .post('http://arabytak.runasp.net/api/Account/login', values)
        .then(res => {
          const { token, appUserId, displayName, email } = res.data;

          // Save to localStorage
          localStorage.setItem('userToken', token);
          localStorage.setItem('appUserId', appUserId);
          localStorage.setItem('displayName', displayName);
          localStorage.setItem('email', email);

          setloading(false);
          navigate('/Home'); // Navigate to profile
        })
        .catch(err => {
          setapiError(err.response?.data.message || 'Login failed');
          setloading(false);
        });
    },
  });

  return (
    <div className='h-screen flex flex-row-reverse overflow-hidden'>
      {/* Right side: Form */}
      <div className='left-side w-2/5 p-8 flex flex-col justify-center items-center bg-white'>
        <img src={logo} className='w-1/2 mb-4' alt="logo" />
        <h1 className='text-4xl font-bold mb-8 text-blue-950'>Sign In</h1>

        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
          {/* Email */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red-600 mt-1">{formik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {formik.touched.password && formik.errors.password && (
              <div className="text-sm text-red-600 mt-1">{formik.errors.password}</div>
            )}
          </div>

          {/* API Error */}
          {apiError && <div className="text-red-600 text-sm mb-3">{apiError}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <span className="text-sm mt-4 block text-center">
            Don’t have an account?{' '}
            <Link to="/SignUp" className='text-blue-600 font-bold'>
              Register
            </Link>
          </span>
        </form>
      </div>

      {/* Left side: Image */}
      <div className="right-side w-3/5 relative">
        <img className='w-full h-full rounded-lg object-cover object-bottom-left' src={img} alt="Sign In" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default SignIn;
