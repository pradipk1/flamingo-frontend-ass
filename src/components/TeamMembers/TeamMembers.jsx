import React from 'react';
import "./TeamMembers.css";
import TeamMembersCard from './TeamMembersCard/TeamMembersCard';
import teamMembersData from './teamMembersData';


function TeamMembers() {
  return (
    <div className='TeamMembersMainDiv'>
        <div className='TemMembersH2Div'><h2>Veda and LGH team members</h2></div>

        <div className='TeamMembersFlexDiv'>
            {
                teamMembersData.map((ele,i) => (
                    <TeamMembersCard key={`teamMembers-${i}`} data={ele}/>
                ))
            }
        </div>
    </div>
  )
}

export default TeamMembers;