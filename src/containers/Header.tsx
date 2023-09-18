import '../styles/Header.scss'
import Logo from '../images/Weo Logo.svg'
import { ReactComponent as Mic } from "../images/mic.svg";
import { ReactComponent as Medal} from "../images/huychuong.svg"

const Header: React.FC<unknown> = () => {

  return (
    <div className="Header">
      <div className='logo'><img src={Logo} width={'48px'}/></div>
      <div className='search-container'>
        <div className='paddingleft'></div>
        <div className='input'>
          <input placeholder='Search Everything'></input>
        </div>
        <div className='micSvg'>
          <Mic/>
        </div>
      </div>
      <div className='actionButton'>
          <Medal/>
          <div>
            <div className="button" style={{ display: 'flex' }}>
              <svg width="23" height="18" viewBox="0 0 23 18">
                <path
                  fill="transparent"
                  strokeWidth="3"
                  stroke="var(--on-surface)"
                  strokeLinecap="round"
                  d="M 2 2.5 L 20 2.5"
                  className="top"
                />
                <path
                  fill="transparent"
                  strokeWidth="3"
                  stroke="var(--on-surface)"
                  strokeLinecap="round"
                  d="M 2 9.423 L 20 9.423"
                  opacity="1"
                  className="middle"
                />
                <path
                  fill="transparent"
                  strokeWidth="3"
                  stroke="var(--on-surface)"
                  strokeLinecap="round"
                  d="M 2 16.346 L 20 16.346"
                  className="bottom"
                />
              </svg>
            </div>
          </div>      
    </div>
    </div>
  );
};

export default Header;