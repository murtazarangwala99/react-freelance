import React from "react";

const Profile = () => {
    return(
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                
                <h1 className="masthead-heading mb-0">MUTUZA RANGWALA</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="pre-wrap masthead-subheading font-weight-light mb-0"> Full Stack Web Dev</p>
            </div>
        </header>
    )
}
export default Profile;