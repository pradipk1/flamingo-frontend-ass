import React from 'react';
import './CostOfProgram.css';

function CostOfProgram() {
  return (
    <div className='CostOfProgramMainDiv'>
        <div className='CostOfProgramH2Div'>
            <h2>Cost of the Program</h2>
        </div>

        <div className='CostOfProgramFlexDiv'>
            <div>
                <div>
                    <h2>30k per month</h2>
                    <span>if paid for 1 month</span>
                </div>
            </div>

            <div>
                <div>
                    <h2>50k per month</h2>
                    <span>if paid for 1 month</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CostOfProgram;