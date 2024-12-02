import React from 'react';
import './ProgramStructure.css';
import programStructureData from './ProgramStructureData';
import ProgramStructureGridCard from './ProgramStructureGridCard/ProgramStructureGridCard';

function ProgramStructure() {
  return (
    <div className='ProgramStructureMainDiv'>
        <div className='ProgramStructureTextDiv'>
            <span>Program Structure:</span>
            <h2>Weekly Breakdown and Schedule</h2>
        </div>

        <div className='ProgramStructureGridDiv'>
            {
                programStructureData.map((ele, i) => (
                    <ProgramStructureGridCard data={ele} ind={i} key={`ProgramStructure-${i}`} />
                ))
            }
        </div>
    </div>
  )
}

export default ProgramStructure;