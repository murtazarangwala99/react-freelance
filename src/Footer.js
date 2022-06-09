import React from "react";

const Footer = () =>{
    return(
        <footer className="footer text-center">
        <div className="container">
            <div className="row">
                {/* <!-- Footer Location--> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="mb-4">LOCATION</h4>
                    <p className="pre-wrap lead mb-0">Ranifaliya,Vasda,Navsari</p>
                </div>
                {/* <!-- Footer Social Icons--> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="mb-4">AROUND THE WEB</h4><a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/https://www.facebook.com/murtazarangwala95"><i className="fab fa-fw fa-facebook-f"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/https://twitter.com/mkaizar95"><i className="fab fa-fw fa-twitter"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/https://in.linkedin.com/in/imurtuza99"><i className="fab fa-fw fa-linkedin-in"></i></a>
                </div>
                {/* <!-- Footer About Text--> */}
                <div className="col-lg-4">
                    <h4 className="mb-4">ABOUT FREELANCER</h4>
                    <p className="pre-wrap lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer