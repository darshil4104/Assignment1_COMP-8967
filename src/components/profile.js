import React, { useState } from 'react';
import "./profile.css";

 function Profile() {

    const name ="Hetvi Patel";
    const phone = "12345679";
    const email="txt@mail.com";
    const profileImg = "http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200";
    const bio = "ljasdjkaskd";

    
  return (
    <><div class="content-profile-page">
          <div>
            
              <div class="img-user-profile">
                  <img class="avatar" src={profileImg} alt="profile" />
              </div>
              <div class="user-profile-data">
                  <h1>{name}</h1>
                  <p>Phone: {phone}</p>
                  <p>Email: {email}</p>
              </div>
              <div class="description-profile">Bio: {bio}</div>
              <br></br>
              <br></br>
            <div class="edit">
            <button class='btn-btn-primary'>
                <a href='/edit-profile' style={{
                    color:'black'
                }}>

            Edit

                </a>

            </button>
            </div>

           
          </div>

      </div>
      </>
  );
}export default Profile;
