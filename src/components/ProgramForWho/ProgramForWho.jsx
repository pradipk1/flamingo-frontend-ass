import React from 'react';
import './ProgramForWho.css';

function ProgramForWho() {
  return (
    <div className='ProgramForWhoMainDiv'>
        <div className='ProgramForWhoImgDiv'>
            <img src="https://s3-alpha-sig.figma.com/img/6993/34d8/cc47c88e5b02f60703ccf3284cc2a171?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LcRxpCHK3KrGFGE5mUaLIeZEcl200SdApBt4Rw3q4hXvmQJG1vO8s6IAPrHjP2E6JZnhzzwwIaqgzr0eERvIQCwTYxXd3SqLXqlvqjLGxrpNOn8P2JnoPykfg-TIGRvOppUUn69PxkWrJwiE5lbe9AJaJSRxtnXdii3icu7GOGS~NUKjBec0myBg1GCZImjrOV8Qu3tDUkiECt6lin5wZ6XDzaG9lfIab3wROrrystY-DtGjOJHfTBmMx0IXHo70NuNfWNt9p~x1NfmaEV7gdqrAio0YyDSQEffmstl6~FlBK6kNefonhvZiPnaTA14lvtNq~h97GvqvjLHvJqRDNQ__" alt="" />
        </div>

        <div className='ProgramForWhoDescParentDiv'>
            <div className='ProgramForWhoH2Div'>
                <h2>Who Is This Program For?</h2>
            </div>

            <div className='ProgramForWhoDescChildDiv'>
                <h2>This program is perfect for individuals who:</h2>
                <ul>
                    <li>Prefer a private, home-based solution for overcoming addiction.</li>
                    <li>Need flexibility to integrate recovery into their daily routines.</li>
                    <li>Have completed an inpatient program and require ongoing support to maintain sobriety.</li>
                    <li>Experience addiction to substances like alcohol, weed, or cigarettes, which can be safely stopped without hospitalization.</li>
                    <li>Are committed to long-term recovery, ranging from chronic users to social drinkers.</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default ProgramForWho;