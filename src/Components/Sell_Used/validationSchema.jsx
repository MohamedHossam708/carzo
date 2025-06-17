import * as Yup from 'yup';

export const validationSchema = Yup.object({
  brand: Yup.string().required('Brand is required'),
  Price: Yup.number().required('Price is required').positive('Price must be a positive number'),
  Model: Yup.string().required('Model is required'),
  
  // Validation for the "Condition" field (just required for now)
  Condition: Yup.string().required('Condition is required'),

  dealership: Yup.string().required('Dealership is required'),
  Phone: Yup.string().required('Phone is required'),
  Location: Yup.string().required('Location is required'),
  city: Yup.string().required('City is required'),
});
