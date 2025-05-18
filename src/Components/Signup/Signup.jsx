import React from 'react'
import img from "../../assets/signup.jpg"
import logo from '../../assets/logo.png'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setloading] = React.useState(false);
  const [apiError, setapiError] = React.useState(null);
  const [userLogin, setUserLogin] = React.useState(null);

  // Form fields
  const fields = [
    { id: 'firstName', label: 'First Name', type: 'text' },
    { id: 'lastName', label: 'Last Name', type: 'text' },
    { id: 'userName', label: 'Username', type: 'text' },
    { id: 'phoneNumber', label: 'Phone Number', type: 'tel' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
  ];

  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, 'Too short').max(20, 'Too long').required('First name is required'),
    lastName: Yup.string().min(2, 'Too short').max(20, 'Too long').required('Last name is required'),
    userName: Yup.string().min(3, 'Too short').max(15, 'Too long').required('Username is required'),
    phoneNumber: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, 'Invalid Egyptian phone number')
      .required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Too short')
      .max(12, 'Too long')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .matches(/[^A-Za-z0-9]/, 'Must contain at least one special character')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      setloading(true);
      axios
        .post('http://arabytak.runasp.net/api/Account/register', values)
        .then(res => {
          localStorage.setItem('userToken', res.data.token);
          setUserLogin(res.data.token);
        //   navigating to login page after successful registration
          setloading(false);
          navigate('/SignIn');
        })
        .catch(err => {
          setapiError(err.response?.data.message || 'Registration failed');
          setloading(false);
        });
    },
  });

  return (
    <div className='h-screen flex overflow-hidden'>
      {/* Form */}
      <div className='left-side w-2/5 p-8 flex flex-col justify-center items-center bg-white'>
        
        <img src={logo} className='w-1/2 mb-4' alt="logo" />
        <h1 className='text-4xl font-bold mb-8 text-blue-950'>SignUp</h1>

        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
          {/* First + Last Name in one row */}
          <div className="flex gap-4 mb-5">
            {fields.slice(0, 2).map(({ id, label, type }) => (
              <div key={id} className="relative z-0 w-1/2 group">
                <input
                  type={type}
                  name={id}
                  id={id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[id]}
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  htmlFor={id}
                  className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {label}
                </label>
                {formik.touched[id] && formik.errors[id] && (
                  <div className="text-sm text-red-600 mt-1">{formik.errors[id]}</div>
                )}
              </div>
            ))}
          </div>

          {/* Other fields */}
          {fields.slice(2).map(({ id, label, type }) => (
            <div key={id} className="relative z-0 w-full mb-5 group">
              <input
                type={type}
                name={id}
                id={id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[id]}
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor={id}
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {label}
              </label>

              {/* Validation error */}
              {formik.touched[id] && formik.errors[id] && (
                <div className="text-sm text-red-600 mt-1">{formik.errors[id]}</div>
              )}

              {/* Password rule note */}
              {id === 'password' && (
                <p className="text-xs text-gray-500 mt-1">
                  Password must contain uppercase, lowercase, number, and symbol.
                </p>
              )}
            </div>
          ))}

          {/* API error */}
          {apiError && <div className="text-red-600 text-sm mb-3">{apiError}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          <span>Already have an account? <Link to="/SignIn" className='text-blue-600 font-bold'>Login</Link>  </span>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="right-side w-3/5 relative">
        <img className='w-full h-full rounded-lg object-cover' src={img} alt="Sign Up" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent"></div>

      </div>
    </div>
  );
};

export default SignUp;
