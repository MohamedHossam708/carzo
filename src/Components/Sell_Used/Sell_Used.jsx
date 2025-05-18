import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import FormInput from '../utlis/FormInput'; // Assuming your FormInput component is a custom reusable component
import { validationSchema } from './validationSchema';

const CarForm = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);

  // Image upload handler
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

  // Handle image click to replace
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    fileInputRef.current?.click();
  };

  // Delete image
  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      brand: '',
      Price: '',
      Model: '',
      Condition: '',  // Change this field to text input
      dealership: '',
      Phone: '',
      Location: '',
      city: '',  // Add the new field for city
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Log values on submit
      console.log('Form values before submission:', values);

      // Make POST request to the backend API
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
.then((response) => {
  console.log('Successfully submitted:', response.data);
})
.catch((error) => {
  console.error('Error submitting form:', error);
});
    }
  });

  return (
    <div className="w-3/4 mx-auto p-5 font-sans  bg-white rounded-2xl">
      <h2 className="text-center text-blue-900 text-2xl mb-5">Enter Used Car Details</h2>

      {/* Image Upload Section */}
      <div className="flex justify-center gap-4 mb-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(index)}
            title="Click to replace this image"
          >
            <img src={image} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleImageDelete(index);
              }}
              className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-bl"
              title="Delete image"
            >
              ❌
            </button>
          </div>
        ))}

        {images.length < 3 && (
          <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-3xl text-gray-300 cursor-pointer">
            +
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
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
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <FormInput label="Brand" name="brand" {...formik.getFieldProps('brand')} error={formik.touched.brand && formik.errors.brand} />
        <FormInput label="Price" name="Price" type="number" {...formik.getFieldProps('Price')} error={formik.touched.Price && formik.errors.Price} />
        <FormInput label="Model" name="Model" {...formik.getFieldProps('Model')} error={formik.touched.Model && formik.errors.Model} />
        
        {/* Changed the Condition field to a text input */}
        <FormInput label="Condition" name="Condition" {...formik.getFieldProps('Condition')} error={formik.touched.Condition && formik.errors.Condition} />

        <FormInput label="Dealership" name="dealership" {...formik.getFieldProps('dealership')} error={formik.touched.dealership && formik.errors.dealership} />
        <FormInput label="Phone" name="Phone" {...formik.getFieldProps('Phone')} error={formik.touched.Phone && formik.errors.Phone} />
        <FormInput label="Location" name="Location" {...formik.getFieldProps('Location')} error={formik.touched.Location && formik.errors.Location} />
        <FormInput label="City" name="city" {...formik.getFieldProps('city')} error={formik.touched.city && formik.errors.city} />  {/* New input for city */}

        <button type="submit" className="bg-blue-900 text-white p-2 rounded-lg mt-5">
          Sell Now
        </button>

        
      </form>
    </div>
  );
};

export default CarForm;
