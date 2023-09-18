import React from 'react';
import '../styles/FillterBox.scss'
import { ReactComponent as More} from '../images/dropArrow.svg'

const FilterBox: React.FC<unknown> = () => {

  return (
    <div className="filterBox">
      <div className='geo'>
        <img src='https://cdn.weoja.com/assets//flags/4x3/vn.svg' width={'24px'}></img>
        <div className='textGeo'>Vietnam (Tiếng Việt)</div>
      </div>
      <div className='safemode'>
        <div>Safe search:</div>
        <div>Moderate</div>
        <div><More/></div>
      </div>
      <div className='timeset'>
        <div>Any time</div>
        <div><More/></div>
      </div>
    </div>
    );
};

export default FilterBox;