import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const PostLoginWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tires' | 'wheels'>('tires');

  const handleVehicleMakeModelClick = async () => {
    try {
      const response = await fetch('https://axis.tirebuyer.com/api/fitment-service/vehicle');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  };

  return (
    <div className="center-container">
      <div className="post-login-window">
        <div className="tabs">
          <button
            className={`tab-switch-btn ${activeTab === 'tires' ? 'active' : ''}`}
            onClick={() => setActiveTab('tires')}
          >
            Tires
          </button>
          <button
            className={`tab-switch-btn ${activeTab === 'wheels' ? 'active' : ''}`}
            onClick={() => setActiveTab('wheels')}
          >
            Wheels
          </button>
        </div>
        <div className="content">
          {activeTab === 'tires' ? (
            <>
              <MDBBtn className="w-100 mb-2 no-transform" onClick={handleVehicleMakeModelClick}>
                Vehicle make & model
              </MDBBtn>
              <MDBBtn className="w-100 mb-2">Tire size</MDBBtn>
              <MDBBtn className="w-100 mb-2">Tire brand</MDBBtn>
            </>
          ) : (
            <>
              <MDBBtn className="w-100 mb-2">Wheel size</MDBBtn>
              <MDBBtn className="w-100 mb-2">Wheel brand</MDBBtn>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostLoginWindow;
