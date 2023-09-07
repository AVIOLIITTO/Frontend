import React from "react";
import "./About.css";
import Dheeraj from "../../assets/Dheeraj.png";
import Awanish from "../../assets/Awanish.jpeg";
import Vaibhav from "../../assets/vaibhav.png";

const About = () => {
    return (
        <div className="about">
            <center><h1 style={{ paddingTop: "20px" }}>Meet The Team</h1>
            </center>
            <br />

            <div class="row">
                <div class="columns">
                    <div class="cards">
                        <img class="images" src={Vaibhav} alt="Jane" />
                        <div class="container">
                            <h2>Vaibhav Gehlot</h2>
                            <p class="titles">CEO & Founder</p>
                            <p>Msc Jaipur University</p>
                            <p>vaibhavgehlot@gmail.com</p>
                            <p><button class="buttons"> <a rel="stylesheet" href="https://www.linkedin.com/in/vaibhav-gehlot-579b32198/" style={{textDecoration:"none" , color:"white"}}> Contact</a></button></p>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="cards">
                        <img class="images" src={Awanish} alt="Mike" />
                        <div class="container">
                            <h2>Awanish Kumar</h2>
                            <p class="titles">Co-Founder</p>
                            <p>Btech IIT Kharagpur</p>
                            <p>awanish.iitkgp@gmail.com</p>
                            <p><button class="buttons"> <a rel="stylesheet" href="https://www.linkedin.com/in/awanish-kumar-413781205/" style={{textDecoration:"none" , color:"white"}}> Contact</a></button></p>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="cards">
                        <img class="images" src={Dheeraj} alt="John" />
                        <div class="container">
                            <h2>Dheeraj Gahlot</h2>
                            <p class="titles">Co-Founder & Technical Head</p>
                            <p> Btech IIT Kharagpur</p>
                            <p>dhruvkgp2003@gmail.com</p>
                            <p><button class="buttons"> <a rel="stylesheet" href="https://www.linkedin.com/in/dheeraj-gahlot-395261222/" style={{textDecoration:"none" , color:"white"}}> Contact</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
