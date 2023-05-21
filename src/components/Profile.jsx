import React from "react";
const Profile = ({isOn}) => {
    return(
        <div className="profile-outer" hidden={!isOn}>
            <img src="https://avatars.githubusercontent.com/u/79575411?v=4" alt="Avatar" className="avatar" />
            <p></p>
            <p></p>
            <ul className="social-list">
                <li><img onClick={() => {window.open('https://www.linkedin.com/in/sidharth-pansari-7aab5a207/', '_blank')}} src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt="button" /></li>
                <li><img onClick={() => {window.open('https://github.com/sidharth9661', '_blank')}} src="https://www.kindpng.com/picc/m/694-6943896_github-logo-png-github-icon-png-transparent-png.png" alt="button" /></li>
            </ul>
            
        </div>

    )
};

export default Profile;