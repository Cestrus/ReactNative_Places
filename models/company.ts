import { CompanyAddress } from '../utils/http';

export interface CompanyData {
  id: number;
  image: string;
  address: CompanyAddress;
  department: string;
  name: string;
  title: string;
}

class Company {
  id: number;
  image: string;
  address: CompanyAddress;

  department: string;
  name: string;
  title: string;

  constructor(
    id: number,
    image: string,
    address: string,
    city: string,
    postalCode: string,
    state: string,
    lat: number,
    lng: number,
    department: string,
    name: string,
    title: string
  ) {
    this.id = id;
    this.image = image;
    this.address = {
      address,
      city,
      state,
      postalCode,
      coordinates: {
        lat,
        lng,
      },
    };
    this.department = department;
    this.name = name;
    this.title = title;
  }
}

export default Company;
