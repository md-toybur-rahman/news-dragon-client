import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='my-5 p-3' style={{backgroundColor: 'lightgray', borderRadius: '8px'}}>
            <h4>Q-Zone</h4>
            <div className=''>
                <img className='mb-4' src={qZone1} alt="" />
                <img className='mb-4' src={qZone2} alt="" />
                <img className='mb-4' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;