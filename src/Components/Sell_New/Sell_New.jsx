import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { validationSchema } from './Validation';
import FormInput from '../utlis/FormInput';
import { FaTrash, FaCamera } from 'react-icons/fa';

const SellNewCarForm = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImage = URL.createObjectURL(file);

    setImages(prev => {
      if (selectedImageIndex !== null) {
        const updated = [...prev];
        updated[selectedImageIndex] = newImage;
        return updated;
      }
      return [...prev, newImage].slice(0, 3);
    });

    setSelectedImageIndex(null);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    fileInputRef.current?.click();
  };

  const handleImageDelete = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const formik = useFormik({
    initialValues: {
      brand: '', Price: '', Model: '', Condition: '', dealership: '', Phone: '', Location: '',
      Gears: '', Year: '', FuelEfficiency: '', TopSpeed: '', OriginCountry: '', AssemblyCountry: '',
      Acceleration: '', Length: '', Width: '', Height: '', GroundClearance: '', Wheelbase: '',
      TrunkSize: '', Seats: '', Drivetrain: '', Fuel: '', HorsePower: '', Transmission: '', Color: ''
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post(
        'http://arabytak.runasp.net/api/Car/CreateNewCar',
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      )
      .then(res => console.log('Success:', res.data))
      .catch(err => console.error('Submit error:', err));
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl font-sans">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">Sell New Car</h2>

      {/* Image Upload Section */}
      <div className="flex gap-4 justify-center mb-6 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-24 h-24 border-2 border-blue-200 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => handleImageClick(index)}
            title="Click to replace"
          >
            <img src={image} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover" />
            <button
              onClick={(e) => { e.stopPropagation(); handleImageDelete(index); }}
              className="absolute top-1 right-1 bg-red-600 text-white text-xs p-1 rounded-full hidden group-hover:block"
              title="Delete"
            >
              <FaTrash size={12} />
            </button>
          </div>
        ))}

        {images.length < 3 && (
          <label className="w-24 h-24 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer text-blue-500 hover:border-blue-600">
            <FaCamera size={20} />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          'brand', 'Price', 'Model', 'Condition', 'dealership', 'Phone', 'Location',
          'Gears', 'Year', 'FuelEfficiency', 'TopSpeed', 'OriginCountry', 'AssemblyCountry',
          'Acceleration', 'Length', 'Width', 'Height', 'GroundClearance', 'Wheelbase',
          'TrunkSize', 'Seats', 'Drivetrain', 'Fuel', 'HorsePower', 'Transmission', 'Color'
        ].map((field) => (
          <FormInput
            key={field}
            label={field}
            name={field}
            type={field === 'Price' ? 'number' : 'text'}
            {...formik.getFieldProps(field)}
            error={formik.touched[field] && formik.errors[field]}
          />
        ))}

        <div className="col-span-full">
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg py-2 rounded-lg transition"
          >
            Sell Now 🚗
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellNewCarForm;
