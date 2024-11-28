import React from 'react';
import './HomePage.css';
import SoberLife from '../../components/SoberLife/SoberLife';
import TeamMembers from '../../components/TeamMembers/TeamMembers';

function HomePage() {
  return (
    <div className='HomePageMainDiv'>
        <SoberLife />

        <div className='WelcomeDescriptionDiv'>
            <p>Welcome to the At-Home De-Addiction Program by Veda Rehabilitation & Wellness.<br />
            This comprehensive 8-week therapeutic intervention is designed to help individuals overcome addiction<br />in the privacy and comfort of their own homes. By combining Veda’s renowned rehabilitation services<br />with LGH’s digital support, we offer a structured pathway to lasting recovery.</p>
        </div>

        <TeamMembers />
    </div>
  )
}

export default HomePage;