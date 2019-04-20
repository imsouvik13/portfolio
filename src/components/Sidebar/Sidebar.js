import React, { Component } from 'react';
import './Sidebar.scss';
import meImg from './me.jpg';
export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <img src={meImg} alt='souvik' className='brand-img' />

        {/* <p className="alert"> Comming Soon </p> */}

        <div className='menu'>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>gallery</li>
            <li>contact</li>
          </ul>
        </div>

        <div className='social-icons'>
          <a target="newwindow" href='https://facebook.com/imsouvik13'>
            <i
              style={{ fontSize: '2rem', color: '#fff' }}
              className='fab fa-facebook-square'
            />
          </a>
          <a target="newwindow" href='https://instagram.com/imsouvik13'>
            
            <i
              style={{ fontSize: '2rem', color: '#fff' }}
              className='fab fa-instagram'
            />
          </a>
          <a target="newwindow" href='https://twitter.com/imsouvik13'>
            
            <i
              style={{ fontSize: '2rem', color: '#fff' }}
              className='fab fa-twitter-square'
            />
          </a>
          <a target="newwindow" href="mailto:imsouvik13@gmail.com">
            
            <i
              style={{ fontSize: '2rem', color: '#fff' }}
              className='fas fa-envelope'
            />
          </a>
        </div>
      </div>
    );
  }
}
