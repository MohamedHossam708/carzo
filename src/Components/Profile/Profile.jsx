import React, { useEffect, useState } from 'react';
import defaultAvatar from '../../assets/nopic.webp';
import axios from 'axios';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const displayName = localStorage.getItem('displayName') || '';
    const email = localStorage.getItem('email') || '';
    const [firstName = '', lastName = ''] = displayName.split(' ');

    setFormData({
      firstName,
      lastName,
      email,
      phoneNumber: '+201012766524', // Default/fallback
    });

    console.log('Token:', token);
  }, [token]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const displayName = localStorage.getItem('displayName') || '';
    const [storedFirst = '', storedLast = ''] = displayName.split(' ');
    const storedEmail = localStorage.getItem('email') || '';

    const fullNameChanged = formData.firstName !== storedFirst || formData.lastName !== storedLast;
    const emailChanged = formData.email !== storedEmail;

    const requests = [];

    if (fullNameChanged) {
      const newUserName = `${formData.firstName} ${formData.lastName}`;
      requests.push(
        axios.post(
  'http://arabytak.runasp.net/api/ManageUser/UpdateUser',
  { newUserName: newUserName },
  { headers: { Authorization: `Bearer ${userToken}` } }
    )
      );
    }

    if (emailChanged) {
      requests.push(
        axios.post(
          `http://arabytak.runasp.net/api/ManageUser/UpdateUser?newEmail=${encodeURIComponent(formData.email)}`,
          null,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      );
    }

    if (!fullNameChanged && !emailChanged) {
      requests.push(
        axios.post(
          'http://arabytak.runasp.net/api/ManageUser/UpdateUser',
          { ...formData },
          { headers: { Authorization: `Bearer ${token}` } }
        )
      );
    }

    Promise.all(requests)
      .then(responses => {
        console.log('Update successful:', responses.map(r => r.data));
        alert('Profile updated successfully!');
        // Update localStorage if needed:
        localStorage.setItem('displayName', `${formData.firstName} ${formData.lastName}`);
        localStorage.setItem('email', formData.email);
      })
      .catch(err => {
        console.error('Update failed:', err);
        alert('Update failed.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow rounded-b-3xl">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Profile</h1>

        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <img
              src={profileImage || defaultAvatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-sm text-gray-600">{formData.email}</p>
            </div>
          </div>

          <label className="cursor-pointer bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
            Upload New Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
