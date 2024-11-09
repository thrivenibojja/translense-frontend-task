import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOwnerDetails } from '../store/formSlice';
import { OwnerDetails } from '../types';
import Layout from '../components/Layout';
import './OwnerManagerDetailsForm.css';

interface OwnerManagerDetailsFormProps {
  onPrev?: () => void;
  onNext?: () => void;
  onEmailOTP: () => void;
  onMobileOTP: () => void;
  showEmailOTP: boolean;
  showMobileOTP: boolean;
}

const OwnerManagerDetailsForm: React.FC<OwnerManagerDetailsFormProps> = ({
  onPrev,
  onNext,
  onEmailOTP,
  onMobileOTP,
  showEmailOTP,
  showMobileOTP,
}) => {
  const [formData, setFormData] = useState<OwnerDetails>({
    fullName: '',
    profilePic: null,
    dateOfBirth: '',
    state: '',
    city: '',
    country: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        profilePic: e.target.files[0],
      });
    }
  };

  const handleSubmit = () => {
    dispatch(updateOwnerDetails(formData));
  };

  return (
    <Layout>
      <h2>Owner & Manager Details</h2>
      <div className="owner-manager-container">
        <form>
          <div className="form-group horizontal">
            <div className="left">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Eg. Prabhat Kumar, Sushma Singh"
              />
            </div>
            <div className="right">
              <label>Upload Profile Picture</label>
              <input
                type="file"
                name="profilePic"
                onChange={handleFileChange}
                id="profilePic"
                style={{ display: 'none' }} // Hide the input element
              />
              <label
                className="upload-instruction"
                onClick={() => document.getElementById('profilePic')?.click()} // Trigger file input click
              >
                Click to upload a file
              </label>
              {formData.profilePic && (
                <p className="file-name">Selected file: {formData.profilePic.name}</p>
              )}
            </div>
          </div>

          {/* Address and other fields */}
          <div className="form-group">
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>

          {/* State */}
          <div className="form-group horizontal">
            <div className="left">
              <label>State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
              />
            </div>
          </div>

          {/* City and Country */}
          <div className="form-group horizontal">
            <div className="left">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>
            <div className="right">
              <label>Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </div>
          </div>

          {/* Email and Mobile Number with OTP buttons */}
          <div className="form-group horizontal">
            <div className="left">
              <label>Email *</label>
              <div className="otp-input">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <button type="button" className="otp-button-small" onClick={onEmailOTP}>
                  Send OTP
                </button>
              </div>
            </div>
            <div className="right">
              <label>Mobile Number *</label>
              <div className="otp-input">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                />
                <button type="button" className="otp-button-small" onClick={onMobileOTP}>
                  Send OTP
                </button>
              </div>
            </div>
          </div>

          {/* OTP fields */}
          {showEmailOTP && (
            <div className="otp-input">
              <input type="text" placeholder="Enter Email OTP" />
            </div>
          )}

          {showMobileOTP && (
            <div className="otp-input">
              <input type="text" placeholder="Enter Mobile OTP" />
            </div>
          )}

          {/* Submit Button */}
          <div className="button-container">
            <button type="button" className="button button-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default OwnerManagerDetailsForm;
