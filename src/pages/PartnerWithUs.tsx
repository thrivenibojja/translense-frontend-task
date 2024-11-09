import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // Updated to useNavigate in React Router v6
import Layout from '../components/Layout';
import BusinessInfoForm from '../components/BusinessInfoForm';
import OwnerManagerDetailsForm from '../components/OwnerManagerDetailsForm';
import { RootState } from '../store/store';

const PartnerWithUs: React.FC = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.form.step);
  const navigate = useNavigate();  // Hook for navigation in React Router v6

  // Navigate to the next page
  const handleProceed = () => {
    navigate('/owner-manager-details');  // Navigate to the next page (assuming you have routing set up)
  };

  return (
    <Layout>
      {step === 1 ? (
        <BusinessInfoForm
          onEmailOTP={() => {}}
          onMobileOTP={() => {}}
          showEmailOTP={false}
          showMobileOTP={false}
          onProceed={handleProceed}  // Pass the onProceed function
        />
      ) : (
        <OwnerManagerDetailsForm
          onEmailOTP={() => {}}
          onMobileOTP={() => {}}
          showEmailOTP={false}
          showMobileOTP={false}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}
    </Layout>
  );
};

export default PartnerWithUs;



