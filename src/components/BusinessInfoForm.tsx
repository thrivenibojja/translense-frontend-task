import React from 'react';
import './BussinessInfoForm.css';

interface BusinessInfoFormProps {
  onEmailOTP: () => void;
  onMobileOTP: () => void;
  showEmailOTP: boolean;
  showMobileOTP: boolean;
  onProceed: () => void;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({
  onEmailOTP,
  onMobileOTP,
  showEmailOTP,
  showMobileOTP,
  onProceed,
}) => {
  return (
    <div className="business-info-form">
      <h5 className="section-title">Business Information</h5>

      <div className="form-row">
        <div className="form-group">
          <label>Business Name</label>
          <input type="text" placeholder="Enter Business Name" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>State</label>
          <input type="text" placeholder="Enter State" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Enter City" />
        </div>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="Enter Address" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Opening Time</label>
          <input type="time" />
        </div>
        <div className="form-group">
          <label>Closing Time</label>
          <input type="time" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group email-group">
    <label>Email</label>
    <div className="input-with-button">
      <input type="email" placeholder="Enter Email" />
      <button onClick={onEmailOTP} className="send-otp-button">Send OTP</button>
    </div>
    {showEmailOTP && <input type="text" placeholder="Enter OTP" className="otp-input" />}
  </div>

  <div className="form-group mobile-group">
    <label>Mobile Number</label>
    <div className="input-with-button">
      <input type="tel" placeholder="Enter Mobile Number" />
      <button onClick={onMobileOTP} className="send-otp-button">Send OTP</button>
    </div>
    {showMobileOTP && <input type="text" placeholder="Enter OTP" className="otp-input" />}
  </div>
      </div>

      <div className="form-group upload-image-group">
        <label>Upload Image of Your Restaurant</label>
        <input type="file" id="upload-image" style={{ display: 'none' }} />
        <label htmlFor="upload-image" className="upload-image-label">
          Click to upload image
        </label>
      </div>

      <div className="proceed-button-container">
        <button onClick={onProceed} className="proceed-button">
          Proceed to Owner & Manager Details →
        </button>
      </div>
    </div>
  );
};

export default BusinessInfoForm;