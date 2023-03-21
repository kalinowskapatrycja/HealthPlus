import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const onHomeClick = (i) => {
    if (i === 1) {
      setRedirectUrl('/Explore');
    } else if (i === 2) {
      setRedirectUrl('/');
    } else if (i === 3) {
      setRedirectUrl('/Forum');
    }
  };

  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }

    return (
        <div>
            <footer className="foot">
                <button className='redirect-btn' onClick={onHomeClick(1)}><img alt="redirection" className='redirect-img' src="./icons/wheat.png"></img></button>
                <button className='redirect-btn' onClick={onHomeClick(2)}><img alt="redirection" className='redirect-img' src="./icons/home.png"></img></button>
                <button className='redirect-btn' onClick={onHomeClick(3)}><img alt="redirection" className='redirect-img' src="./icons/user.png"></img></button>
            </footer>
        </div>
    );
}

export default Footer;