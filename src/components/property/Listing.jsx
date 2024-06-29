import React from 'react';
import './../../style/property/listing.css';
import p1 from '../../assets/image/property/property-1.jpg'
import author from "../../assets/image/property/author.jpg"
import p2 from '../../assets/image/property/property-2.jpg'
import p3 from '../../assets/image/property/property-3.jpg'
import p4 from '../../assets/image/property/property-4.png'
import p5 from '../../assets/image/property/property-5.jpg'
import p6 from '../../assets/image/property/property-6.jpg'
import p7 from '../../assets/image/property/property-7.jpg'
import p8 from '../../assets/image/property/property-8.jpg'
import a3 from '../../assets/image/property/author3.jpg'
import a2 from '../../assets/image/property/author2.jpg'
import a4 from '../../assets/image/property/author4.jpg'
import a5 from '../../assets/image/property/author5.jpg'
import a6 from '../../assets/image/property/author6.jpg'
import a7 from '../../assets/image/property/author7.jpg'
import a8 from '../../assets/image/property/author8.jpg'
import { Footer } from '../footer';
const Listing = () => {
  return (
    <>
    
      <section className="property" id="property">

        <div className="container">

          <p className="section-subtitle">Properties listing 205</p>

          <ul className="property-list has-scrollbar">

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p1} alt="New Apartment Nice View" style={{w:"100"}} />
                  </a>
                
                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>D 801 the woods apartment, Lucknow </address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">Flat For Rent</a>
                  </h3>
                  <div className="card-price">
                    <strong>Rs. 12,000 (negotiable) </strong>
                  </div>

                  <p className="card-text">
                    Semi Furnished, 4th floor  <br/>
                    
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Both</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={author} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Deepti rastogi</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p2} alt="Modern Apartments" style={{w:"100"}} />
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Gomb Nagar,lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">House for rent</a>
                 </h3>
                  <div className="card-price">
                    <strong>Rs. 10,000</strong>/Month
                  </div>

                  <p className="card-text">
                  Semi Furnished, Ground floor
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Western</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a2} alt="William Seklo" style={{w:"100"}} />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Vindhya Vikram</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p3} alt="Comfortable Apartment" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Chinnat sarik road, Lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                <h3 className="h3 card-title">
                    <a href="#">House For Rent </a>
                  </h3>

                  <div className="card-price">
                    <strong>Rs. 14,000</strong>/Month
                  </div>

                  

                  <p className="card-text">
                  Semi Furnished, Ground floor
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Both</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a3} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Rajesh kumar</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p4} alt="Luxury villa in Rego Park" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Keshav Nagar, Lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                <h3 className="h3 card-title">
                    <a href="#">House For Rent</a>
                  </h3>
                  <div className="card-price">
                    <strong>Rs. 8,500</strong>
                  </div>

                  

                  <p className="card-text">
                  Semi Furnished, Ground
                  </p>

                  <ul className="card-list">
 
                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Both</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a4} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Aman Saxena</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    


      <section className="property" id="property">
        <div className="container">

          <p className="section-subtitle">Properties listing 205</p>

          <ul className="property-list has-scrollbar">

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p5} alt="New Apartment Nice View" style={{w:"100"}}/>
                  </a>
                
                  <div className="card-badge green">For sale</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Chinhat Satrik Road, Lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#"> Flat For Sale</a>
                  </h3>
                  <div className="card-price">
                    <strong>Rs. 30,50,000</strong>
                  </div>

                  <p className="card-text">
                    Semi Furnished, 4th Floor
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Western</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a5} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Gupta property</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p6} alt="Modern Apartments" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Sarojini Nagar Kanpur highway and Bijnor road  ,Lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">House For Rent</a>
                 </h3>
                  <div className="card-price">
                    <strong>Rs. 2,20,000</strong>
                  </div>

                  <p className="card-text">
                    Semi Furnished, 2nd Floor
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>1</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Both</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a6} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Anurag</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p7} alt="Comfortable Apartment" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Panchmukhi Mandir, Alambagh</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                <h3 className="h3 card-title">
                    <a href="#"> House For Rent </a>
                  </h3>

                  <div className="card-price">
                    <strong>Rs. 4,500</strong>/Month
                  </div>

                  

                  <p className="card-text">
                    Semi Furnished, 2nd Floor
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Western</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Residential</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a7} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Sanjeev</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p8} alt="Luxury villa in Rego Park" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Pinkcity Colony, Lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                <h3 className="h3 card-title">
                    <a href="#">Shop For Rent</a>
                  </h3>

                  <div className="card-price">
                    <strong>Rs. 3,500</strong>
                  </div>

                  

                  <p className="card-text">
                    Non Furnished, Ground Floor
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>1</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>BHK</span>
                    </li>

                    <li className="card-item">
                      <strong>Indian</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>Commercial</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Space Type</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a8} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Devendra Kumar</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      Explore
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    



  
    
      {/*<section className="property" id="property">
        <div className="container">

          <p className="section-subtitle">Properties listing 205</p>

          <ul className="property-list has-scrollbar">

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p1} alt="New Apartment Nice View" style={{w:"100"}}/>
                  </a>
                
                  <div className="card-badge green">For sale</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>vivek khand,lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">3 BHK House On Rent</a>
                  </h3>
                  <div className="card-price">
                    <strong>RS. 40,000</strong>
                  </div>

                  <p className="card-text">
                    Beautiful ,Updated ,graund level in desirable <br/>
                    Bay Bla Bla.....
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>4</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>1358</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={author} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Shaikh Ubaid Tibrani</a>
                      </p>

                      <p className="author-title">Full Stack Developer</p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p2} alt="Modern Apartments" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Sales</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Gomb Nagar,lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">2 BHK Flat On Rent</a>
                 </h3>
                  <div className="card-price">
                    <strong>75 lac</strong>
                  </div>

                  <p className="card-text">
                    Beautiful ,Updated ,Ground level in Desirable <br/>
                     Bay Bla Bla Bla....
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>1051</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={author}alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Shaikh Ubaid Tibrani</a>
                      </p>

                      <p className="author-title">Full Stack Developer</p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p3} alt="Comfortable Apartment" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For sale</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>vigran khan ,lucknow</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>26 lac</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">2 BHK House On Rent </a>
                  </h3>

                  <p className="card-text">
                    Beautiful ,Upadated ,Ground lavel in Desirable <br/>
                    Bay Bla Bla Bla.....
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>700</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={author} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Shaikh Ubaid Tibrani</a>
                      </p>

                      <p className="author-title">Full Stack Developer</p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p4} alt="Luxury villa in Rego Park" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>RS.5000</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">khurdu ,rawivar ,lucknow</a>
                  </h3>

                  <p className="card-text">
                    Beautiful ,Updated <br/>
                    Bay Bal Bal Bal....
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={author} alt="William Seklo" style={{width:"200"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Shaikh Ubaid Tibrani</a>
                      </p>

                      <p className="author-title">Full Stack-Developer</p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>*/}
    <Footer/>

    </>

  )
}

export default Listing;