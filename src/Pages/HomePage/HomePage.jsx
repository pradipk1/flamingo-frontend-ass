import React from 'react';
import './HomePage.css';
import SoberLife from '../../components/SoberLife/SoberLife';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import ProgramForWho from '../../components/ProgramForWho/ProgramForWho';
import WhyChooseProgram from '../../components/WhyChooseProgram/WhyChooseProgram';
import ProgramStructure from '../../components/ProgramStructure/ProgramStructure';
import WhatReceive from '../../components/WhatReceive/WhatReceive';
import StartJourney from '../../components/StartJourney/StartJourney';
import CostOfProgram from '../../components/CostOfProgram/CostOfProgram';
import WelcomeScript from '../../components/WelcomeScript/WelcomeScript';

function HomePage() {
  return (
    <div className='HomePageMainDiv'>
        <SoberLife />

        <WelcomeScript />

        <TeamMembers />

        <ProgramForWho />

        <WhyChooseProgram />

        <ProgramStructure />

        <WhatReceive />

        <StartJourney />

        <CostOfProgram />
    </div>
  )
}

export default HomePage;