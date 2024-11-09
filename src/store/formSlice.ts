import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BusinessInfo, OwnerDetails } from '../types';

interface FormState {
  step: number;
  businessInfo: BusinessInfo;
  ownerDetails: OwnerDetails;
}

const initialState: FormState = {
  step: 1,
  businessInfo: {
    businessName: '',
    country: '',
    businessPlace: '',
    state: '',  // Make sure to include state and city here too
    city: '',   
    address: '',
    openingTime: '',
    closingTime: '',
    email: '',
    phoneNumber: '',
  },
  ownerDetails: {
    fullName: '',
    profilePic: null,
    dateOfBirth: '',
    state: '',  // Add state property for OwnerDetails
    city: '',   // Add city property for OwnerDetails
    country: '',
    address: '',
    email: '',
    phoneNumber: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Move to the next step
    nextStep: (state) => {
      if (state.step < 2) state.step += 1;
    },
    // Move to the previous step
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    // Update the business information
    updateBusinessInfo: (state, action: PayloadAction<BusinessInfo>) => {
      state.businessInfo = action.payload;
    },
    // Update the owner/manager details
    updateOwnerDetails: (state, action: PayloadAction<OwnerDetails>) => {
      state.ownerDetails = action.payload;
    },
    // Reset form to initial state (optional, in case of form reset)
    resetForm: (state) => {
      state.step = 1;
      state.businessInfo = {
        businessName: '',
        country: '',
        businessPlace: '',
        state: '',
        city: '',
        address: '',
        openingTime: '',
        closingTime: '',
        email: '',
        phoneNumber: '',
      };
      state.ownerDetails = {
        fullName: '',
        profilePic: null,
        dateOfBirth: '',
        state: '',  // Reset state
        city: '',   // Reset city
        country: '',
        address: '',
        email: '',
        phoneNumber: '',
      };
    },
  },
});

export const {
  nextStep,
  prevStep,
  updateBusinessInfo,
  updateOwnerDetails,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
;
