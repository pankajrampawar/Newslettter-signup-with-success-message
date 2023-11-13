import React from 'react';
import iconList from './assets/images/icon-list.svg'
import leftImage from './assets/images/illustration-sign-up-mobile.svg'
import bigImage from './assets/images/illustration-sign-up-desktop.svg'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (e)=>{
      const newEmail = e.target.value;
      setEmail(newEmail);
    }

    React.useEffect(() => {
      // Use useEffect to perform actions after state updates
      if (isChecked && isValidEmail) {
        navigate(`/success/${email}`);
      }
    }, [isChecked, isValidEmail, navigate]);

    const handleClick = ()=>{
      const checkMail = ()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);
        setIsChecked(true);
      }
      checkMail();
  }


    return (
        <div className='app'>
        <img src={leftImage} alt="illustration-image" className='top-image'/>
        <div className='left-side'>
          <h1>Stay updated!</h1>
          <p className="heading-details">Join 60000+ product managers receiving monthly updates on:</p>
          <div className="bullet-info">
            <p className='line'>
              <img src={iconList} alt='bullet-image' className='iconList'/>
              <p>Product discovery and building what matters.</p>
            </p>
            <p className='line'>
              <img src={iconList} alt='bullet-image' className='iconList'/>
              <p>Measuring to ensure updates are a success</p>
            </p>
            <p className='line'>
              <img src={iconList} alt='bullet-image' className='iconList'/>
              <p>And much more!</p>
            </p>
          </div>
          <div className='final-box'>
            <div className='rowpara'>
            <p>Email address</p>{ isValidEmail ? '' : <p className='invalidCase'>Valid Email Required</p>}
            </div>
            <input 
              type='email' 
              id='userEmail' 
              value={email} 
              placeHolder='email@company.com'
              onChange={handleChange}
              style={{borderColor: isValidEmail ? 'initial' : 'red', backgroundColor: isValidEmail ? 'initial' : 'hsl(4, 100%, 67%)'}}
            />
            <button onClick={handleClick}>Subscribe to monthly newsletter</button>
          </div>
          </div>
          <div className='right-side'>
            <img className='rightImage' src={bigImage} alt='image-illustration'/>
          </div>
       </div>
    )
}