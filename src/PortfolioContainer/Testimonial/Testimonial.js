import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
// import ScrollService from '../../utilities/ScrollService';
// import Animations from '../../utilities/Animations';
// import lady from '../../assets/Testimonial/lady.png';
import man from '../../assets/Testimonial/man.png';
import mike from '../../assets/Testimonial/mike.png';

import "./Testimonial.css";

export default function Testimonial(props) {

    // let fadeInScreenHandler = (screen)=>{
    //     if(screen.fadeScreen !== props.id)
    //     return
    //     Animations.animations.fadeInScreen(props.id)
    // }
    // const fadeInSubscription = 
    // ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dot: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
            0:{
              items:1,  
            },
            768:{
              items:1,
            },
            1000:{
               items:3
            },
        }
    }

  return (
    <div className='testimonial-container' id={props.id ||""}>
          <ScreenHeading 
          title={'Quotes'} 
          subHeading={'What Most Successful People say..'}/>

          <section className='testimonial-section' >
              <div className='container'>
                  <div className='row'>
                      <OwlCarousel className="Owl-carousel" 
                      id="testimonial-carousel" {...options}>

                          <div className='col-lg-12'>
                              <div className='testi-item'>
                                  <div className='testi-comment'>
                                       <p>
                                           <i className='fa fa-quote-left'/>
                                           Change will not come if we wait for  some  other  person  or  some  other time.
                                            We are the ones we've  been  waiting for. We are the  change that we seek.                                        
                                            <i className='fa fa-quote-right'/>
                                       </p>
                                       {/* <ul className='stars list-unstyled'>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star-half-alt'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                       </ul> */}
                                  </div>
                                  <div className='client-info'>
                                      <img src={man}
                                      alt='no internet connection'></img>
                                      <h5>Barack Obama</h5>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-12'>
                              <div className='testi-item'>
                                  <div className='testi-comment'>
                                       <p>
                                           <i className='fa fa-quote-left'/>
                                           If you don't design your own life plan, chances are you'll fall into someone else's plan.
                                           And guess what they have planned for you? Not much.
                                            <i className='fa fa-quote-right'/>
                                       </p>
                                       {/* <ul className='stars list-unstyled'>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star-half-alt'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                       </ul> */}
                                  </div>
                                  <div className='client-info'>
                                      <img src={mike}
                                      alt='no internet connection'></img>
                                      <h5>Jim Rohn</h5>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-12'>
                              <div className='testi-item'>
                                  <div className='testi-comment'>
                                       <p>
                                           <i className='fa fa-quote-left'/>
                                           Keep on going, and the chances are that you will stumble on something, 
                                           perhaps when you are least expecting it.
                                          I never heard of anyone ever stumbling on something sitting down.
                                            <i className='fa fa-quote-right'/>
                                       </p>
                                          {/* <ul className='stars list-unstyled'>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star-half-alt'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li> 
                                       </ul> */}
                                  </div>
                                  <div className='client-info'>
                                      <img src={man}
                                      alt='no internet connection'></img>
                                      <h5>Charles F. Kettering</h5>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-12'>
                              <div className='testi-item'>
                                  <div className='testi-comment'>
                                       <p>
                                           <i className='fa fa-quote-left'/>
                                             There are two methods in software design. One is to make program very simple
                                             , there are abviously no errors. The other is to make it so complicated,
                                             there are no obvious error.
                                            <i className='fa fa-quote-right'/>
                                       </p>
                                       {/* <ul className='stars list-unstyled'>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star-half-alt'/>
                                              </li>
                                              <li>
                                                  <i className='fa fa-star'/>
                                              </li>
                                       </ul> */}
                                  </div>
                                  <div className='client-info'>
                                      <img src={mike}
                                      alt='no internet connection'></img>
                                      <h5>Tony Hoare</h5>
                                  </div>
                              </div>
                          </div>


                      </OwlCarousel>
                  </div>
              </div>
          </section>
    </div>
  )
}
