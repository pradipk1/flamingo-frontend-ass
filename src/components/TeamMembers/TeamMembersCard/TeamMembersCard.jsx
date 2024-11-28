import React from 'react';
import "./TeamMembersCard.css";

function TeamMembersCard({data}) {
  return (
    <div className='TeamMembersCardDiv'>
        <img src={data.image} alt="team-member-img" />
        <h2>{data.name}</h2>
        <span>{data.role}</span>
    </div>
  )
}

export default TeamMembersCard;