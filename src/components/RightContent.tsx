import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { nextStep, prevStep } from '../store/formSlice';
import BusinessInfoForm from './BusinessInfoForm';
import OwnerManagerDetailsForm from './OwnerManagerDetailsForm';

const RightContent: React.FC = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: RootState) => state.form.step);

  const [showEmailOTP, setShowEmailOTP] = useState(false);
  const [showMobileOTP, setShowMobileOTP] = useState(false);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleEmailOTP = () => {
    setShowEmailOTP(true);
  };

  const handleMobileOTP = () => {
    setShowMobileOTP(true);
  };

  // Define onProceed to pass to BusinessInfoForm
  const handleProceed = () => {
    handleNext();
    // Additional actions if necessary
  };

  return (
    <div className="right-content flex-grow-1 p-4">
      {currentStep === 1 && (
        <BusinessInfoForm
          onEmailOTP={handleEmailOTP}
          onMobileOTP={handleMobileOTP}
          showEmailOTP={showEmailOTP}
          showMobileOTP={showMobileOTP}
          onProceed={handleProceed} // Pass onProceed here
        />
      )}
      
      {currentStep === 2 && (
        <OwnerManagerDetailsForm
          onEmailOTP={handleEmailOTP}
          onMobileOTP={handleMobileOTP}
          showEmailOTP={showEmailOTP}
          showMobileOTP={showMobileOTP}
        />
      )}
    </div>
  );
};

export default RightContent;



