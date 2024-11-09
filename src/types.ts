// src/types.ts

export interface BusinessInfo {
    businessName: string;
    country: string;
    businessPlace: string;
    state: string;
    city: string;
    address: string;
    openingTime: string;
    closingTime: string;
    email: string;
    phoneNumber: string;
  }
  
  export interface OwnerDetails {
    fullName: string;
    profilePic: File | null;
    dateOfBirth: string;
    state: string;  // Add state property
    city: string;   // Add city property
    country: string;
    address: string;
    email: string;
    phoneNumber: string;
  }
  