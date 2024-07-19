import React from 'react';
import './PropertyForm.css';

const PropertyForm = () => {
    return (
        <div className="property-form">
            <div className="circle"></div>
            <div className="circle2"></div>
            <h1>Landlord</h1>
            <h2>Property Details</h2>
            <form>
                <div className="form-group">
                    <p>Select your Space Type:</p>
                    <div className='radio-button'>
                        <div>
                            <input type="radio" id="commercial" name="spaceType" value="commercial"/>
                            <label htmlFor="commercial">Commercial</label>
                        </div>
                       <div>
                            <input type="radio" id="residential" name="spaceType" value="residential"/>
                            <label htmlFor="residential">Residential</label>
                       </div>
                        
                    </div>
                </div>

                <div className="drop-down">
                    <select name="propertyType">
                        <option value="" className="opt">Select Your Property Type</option>
                        <option value="Flat" className="opt">Flat</option>
                        <option value="House" className="opt">House</option>
                        <option value="PG" className="opt">PG</option>
                        <option value="Shop" className="opt">Shop</option>
                        <option value="Office" className="opt">Office</option>
                        <option value="Warehouse" className="opt">WareHouse</option>
                    </select>
                    <input type="text" name="registrationNo" placeholder='Registration No:'/>
                </div>



                <div className="form-group">
                    <p>Type</p>
                    <div className='radio-button'>
                        <div>
                            <input type="radio" id="fully-furnished" name="furnishType" value="fully-furnished"/>
                            <label htmlFor="fully-furnished">Fully Furnished</label>
                        </div>
                        <div>
                            <input type="radio" id="semi-furnished" name="furnishType" value="semi-furnished"/>
                        <   label htmlFor="semi-furnished">Semi Furnished</label>
                        </div>
                        <div>
                            <input type="radio" id="non-furnished" name="furnishType" value="non-furnished"/>
                            <label htmlFor="non-furnished">Non Furnished</label>
                        </div>
                    </div>
                </div>

                <div className="drop-down">
                    <select name="bhk">
                        <option value="" className="opt">BHK</option>
                        <option value="1" className="opt">1 BHK</option>
                        <option value="2" className="opt">2 BHK</option>
                        <option value="3" className="opt">3 BHK</option>
                    </select>
            
                    <select name="floor">
                        <option value="" className="opt">Floor</option>
                        <option value="1" className="opt">1st Floor</option>
                        <option value="2" className="opt">2nd Floor</option>
                    </select>
                </div>

                <div className="lm">
                    <input type="text" name="landmark" placeholder='Landmark'/>
                </div>

                <div className="form-navigation">
                    <button type="button" className="btn">Previous</button>
                    <button type="submit" className="btn">Next</button>
                </div>
            </form>
        </div>
    );
};

export default PropertyForm;
