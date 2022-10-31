import axios, { AxiosResponse } from 'axios';
import { CompanyData } from '../types/companyTypes';

export interface Hair {
  color: string;
  type: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface CompanyCoordinates {
  lat: number;
  lng: number;
}

export interface CompanyAddress {
  address: string;
  city: string;
  coordinates: CompanyCoordinates;
  postalCode: string;
  state: string;
}

export interface Company {
  address: CompanyAddress;
  department: string;
  name: string;
  title: string;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

// =========================================

const URL = 'https://dummyjson.com/users';

type responseType = {
  users: UserData[];
};

const formatData = (data: UserData[]): CompanyData[] => {
  return data.map((user: UserData): CompanyData => {
    const {
      id,
      image,
      company: {
        department,
        name,
        title,
        address: {
          address,
          city,
          postalCode,
          state,
          coordinates: { lat, lng },
        },
      },
    } = user;
    return {
      id,
      image,
      address: {
        address,
        city,
        postalCode,
        state,
        coordinates: { lat, lng },
      },
      department,
      name,
      title,
    };
  });
};

export const fetchCompanies = async (): Promise<CompanyData[]> => {
  const response: AxiosResponse<responseType> = await axios.get(URL);
  return formatData(response.data.users);
};
