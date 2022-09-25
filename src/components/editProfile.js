import React, { useState } from 'react';
import "./profile.css";

 function Profile() {

    const name ="Hetvi Patel";
    const phone = "12345679";
    const email="txt@mail.com";
    const profileImg = "http:gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200";
    const bio = "ljasdjkaskd";

    
  return (
    <><div class="content-profile-page">
          

          <h2>Edit Details</h2>
       <div className="mb-3">
 				<label>First name</label>
 				<input type="text" className="form-control" placeholder="First name" />
 			</div>
 			<div className="mb-3">
 				<label>Last name</label>
 				<input type="text" className="form-control" placeholder="Last name" />
 			</div>
       <div className="mb-3">
         <label>Phone Number</label>
         <input type="text" className="form-control" placeholder="Phone Number"/>
       </div>
 			<div className="mb-3">
 				<label>Email address</label>
 				<input type="email" className="form-control" placeholder="Enter email" />
 			</div>

 			<div className="mb-4">
 				<label>Password</label>
 				<input type="password" className="form-control" placeholder="Enter password" />
 			</div>
       <div className="mb-3">
         <label>Bio</label>
         <input type="text" className="form-control" placeholder="Bio"/>
       </div>
       <div className="mb-3">
         <label>Photo</label>
         <input type="file" name="" value="" className="form-control"/>
         <button className="btn-btn-primary">Upload</button>
       </div>
       <div className="cancel-button">
       <button className="btn-btn-primary" 
             id="cancelBtn">
                <a href='/profile'>

                 Cancel
                </a>
                 </button>
 <button className="save">Save</button>
       </div>

      </div>
      </>
  );
}export default Profile;
