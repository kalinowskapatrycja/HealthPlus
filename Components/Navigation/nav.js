import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const onHomeClick = (i) => {
    if (i === 1) {
      setRedirectUrl('/');
    } else if (i === 2) {
      setRedirectUrl('/Tracker');
    } else if (i === 3) {
        setRedirectUrl('/Chat');
    }else if (i === 4) {
      setRedirectUrl('/Forum');
    }else if (i === 5) {
        setRedirectUrl('/Contacts');
    }
  };

  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }

    return (
        <div>
            <nav className="nav">
                <button className='redirect-btn' onClick={onHomeClick(1)}> Health +</button>
                <button className='redirect-btn' onClick={onHomeClick(2)}> Track </button>
                <button className='redirect-btn' onClick={onHomeClick(3)}> Chat </button>
                <button className='redirect-btn' onClick={onHomeClick(4)}> Forums </button>
                <button className='redirect-btn' onClick={onHomeClick(5)}> Contacts </button>

            </nav>
        </div>
    );
}

export default Footer;