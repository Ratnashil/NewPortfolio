import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';


export default function Profile() {
  return (
    <div className='profile-container'>
          <div className='profile-parent'>
              <div className='profile-details'>
                  <div className='colz'>
                      <div className='colz-icon'>
                      <a href='https://github.com/Ratnashil'>
                          <i className='fa fa-github-square'></i>
                      </a>
                      <a href='https://www.facebook.com/shilratna.somkuwar'>
                          <i className='fa fa-facebook-square'></i>
                      </a>
                      <a href='https://www.linkedin.com/in/shilratna'>
                          <i className="fa fa-linkedin-square"></i>
                      </a>
                      <a href='https://www.instagram.com/shilratna_somkuwar/'>
                          <i className='fa fa-instagram'></i>
                      </a>
                      <a href='https://twitter.com/shilratna55'>
                          <i className='fa fa-twitter'></i>
                      </a>
                      </div>
                  </div>
                  <div className='profile-details-name'>
                      <span className='primary-text'>
                          {" "}
                          Hello, I'M <span className='highlighted-text'>Shilratna</span>
                      </span>
                  </div>
                  <div className='profile-details-role'>
                      <span className='primary-text'>
                          {" "}
                          <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev",
                                1000,
                                "Full Stack Dev",
                                1000,
                                "Java Software Dev",
                                1000,
                                "React Dev",
                                1000,
                            ]}
                            />
                          </h1>
                          <span className='profile-role-tagline'>
                              Knack of building applications with front and back 
                              end operations.
                          </span>
                      </span>
                  </div>
                  <div className='profile-options'>
                  <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
                      <a href='Shilratna_Somkuwar.pdf' download='Shilratna_Somkuwar.pdf'>
                          <button className='btn highlighted-btn'>Get Resume</button>
                      </a>
                  </div>
              </div>
              <div className='profile-picture'>
                  <div className='profile-picture-background'></div>
              </div>
          </div> 
    </div>
  )
}
