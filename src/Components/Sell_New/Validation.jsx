import * as Yup from 'yup';

export const validationSchema = Yup.object({
  brand: Yup.string().required('Brand is required'),
  Model: Yup.string().required('Model is required'),
  Price: Yup.number()
    .typeError('Price must be a number')
    .required('Price is required')
    .positive('Price must be a positive number'),
  Condition: Yup.string().required('Condition is required'),
  dealership: Yup.string().required('Dealership is required'),
  Phone: Yup.string().required('Phone is required'),
  Location: Yup.string().required('Location is required'),

  // Optional fields (no `.required()` here)
  Gears: Yup.string(),
  Year: Yup.string(),
  FuelEfficiency: Yup.string(),
  TopSpeed: Yup.string(),
  OriginCountry: Yup.string(),
  AssemblyCountry: Yup.string(),
  Acceleration: Yup.string(),
  Length: Yup.string(),
  Width: Yup.string(),
  Height: Yup.string(),
  GroundClearance: Yup.string(),
  Wheelbase: Yup.string(),
  TrunkSize: Yup.string(),
  Seats: Yup.string(),
  Drivetrain: Yup.string(),
  Fuel: Yup.string(),
  HorsePower: Yup.string(),
  Transmission: Yup.string(),
  Color: Yup.string(),
});
