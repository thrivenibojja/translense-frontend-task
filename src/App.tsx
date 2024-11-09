import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PartnerWithUs from './pages/PartnerWithUs';
import OwnerManagerDetailsForm from './components/OwnerManagerDetailsForm';
import BusinessInfoForm from './components/BusinessInfoForm';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import './components/Layout.css';
import './app.css';

const App: React.FC = () => {
  // Default handlers for OTP and form navigation
  const handleEmailOTP = () => { console.log("Email OTP triggered"); };
  const handleMobileOTP = () => { console.log("Mobile OTP triggered"); };
  const handleProceed = () => { console.log("Proceed to next step"); };

  // State for controlling OTP visibility
  const [showEmailOTP, setShowEmailOTP] = React.useState(false);
  const [showMobileOTP, setShowMobileOTP] = React.useState(false);

  return (
    <Router>
      <Routes>
        {/* Route with only the content (no Header, no LeftSidebar) */}
        <Route
          path="/"
          element={<PartnerWithUs />}
        />

        {/* Route with the full layout (Header, LeftSidebar, BusinessInfoForm) */}
        <Route
          path="/business-info"
          element={
            <div className="app-layout">
              <Header />
              <div className="main-content">
                <LeftSidebar />
                <div className="right-content">
                  <BusinessInfoForm
                    onEmailOTP={handleEmailOTP}
                    onMobileOTP={handleMobileOTP}
                    showEmailOTP={showEmailOTP}
                    showMobileOTP={showMobileOTP}
                    onProceed={handleProceed}
                  />
                </div>
              </div>
            </div>
          }
        />

        {/* Route for OwnerManagerDetailsForm with layout */}
        <Route
          path="/owner-manager-details"
          element={
            <div className="app-layout">
              <div className="main-content">
                <div className="right-content">
                  <OwnerManagerDetailsForm
                    onEmailOTP={handleEmailOTP}
                    onMobileOTP={handleMobileOTP}
                    showEmailOTP={showEmailOTP}
                    showMobileOTP={showMobileOTP}
                    onPrev={() => {}}
                    onNext={() => {}}
                  />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;