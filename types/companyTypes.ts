import { CompanyAddress } from '../utils/http';

export interface CompanyData {
  id: number;
  image: string;
  address: CompanyAddress;
  department: string;
  name: string;
  title: string;
}

// {
//   id,
//   image,
//   address: {
//     address,
//     city,
//     postalCode,
//     state,
//     coordinates: { lat, lng },
//   },
//   department,
//   name,
//   title,
// }
