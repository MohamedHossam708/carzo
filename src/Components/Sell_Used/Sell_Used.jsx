import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import FormInput from '../utlis/FormInput'; // مكون الإدخال المخصص
import { validationSchema } from './validationSchema';
import { FaTrash, FaCamera } from 'react-icons/fa';

const CarForm = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const newImage = URL.createObjectURL(file);

    setImages((prevImages) => {
      if (selectedImageIndex !== null) {
        const updatedImages = [...prevImages];
        updatedImages[selectedImageIndex] = newImage;
        return updatedImages;
      }
      return [...prevImages, newImage].slice(0, 3);
    });

    setSelectedImageIndex(null);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    fileInputRef.current?.click();
  };

  const handleImageDelete = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const formik = useFormik({
    initialValues: {
      brand: '',
      Price: '',
      Model: '',
      Condition: '',
      dealership: '',
      Phone: '',
      Location: '',
      city: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form values before submission:', values);
      axios.post(
        'http://arabytak.runasp.net/api/Car/CreateUsedCar',
        values,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      )
      .then((res) => console.log('Successfully submitted:', res.data))
      .catch((err) => console.error('Submit error:', err));
    }
  });

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 font-sans">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">Sell Used Car</h2>

      {/* Image Upload */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
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

      {/* Form Inputs */}
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Brand" name="brand" {...formik.getFieldProps('brand')} error={formik.touched.brand && formik.errors.brand} />
        <FormInput label="Price" name="Price" type="number" {...formik.getFieldProps('Price')} error={formik.touched.Price && formik.errors.Price} />
        <FormInput label="Model" name="Model" {...formik.getFieldProps('Model')} error={formik.touched.Model && formik.errors.Model} />
        <FormInput label="Condition" name="Condition" {...formik.getFieldProps('Condition')} error={formik.touched.Condition && formik.errors.Condition} />
        <FormInput label="Dealership" name="dealership" {...formik.getFieldProps('dealership')} error={formik.touched.dealership && formik.errors.dealership} />
        <FormInput label="Phone" name="Phone" {...formik.getFieldProps('Phone')} error={formik.touched.Phone && formik.errors.Phone} />
        <FormInput label="Location" name="Location" {...formik.getFieldProps('Location')} error={formik.touched.Location && formik.errors.Location} />
        <FormInput label="City" name="city" {...formik.getFieldProps('city')} error={formik.touched.city && formik.errors.city} />

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

export default CarForm;
