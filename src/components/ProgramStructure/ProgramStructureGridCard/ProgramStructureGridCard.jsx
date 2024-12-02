import React from 'react';
import './ProgramStructureGridCard.css';

function ProgramStructureGridCard({data, ind}) {
  return (
    <div className='ProgramStructureGridCardMainDiv'>
        <div className={ind%2 == 0 ? 'ProgramStructureGridCardImgDiv' : 'ProgramStructureGridCardImgDiv ProgramStructureGridCardImgDiv44'}>
            <img src={data.image} alt="program-structure-card-img" />
        </div>
        <div className='ProgramStructureGridCardDetailsDiv'>
            <h2>{data.week}</h2>
            <div>
                <h2>{data.title}</h2>
                <span>{data.desc}</span>
            </div>
        </div>
    </div>
  )
}

export default ProgramStructureGridCard;