import React, { useState } from "react";

const Header = () => {
    const [user, setUser ] = useState("");
    return (<React.Fragment>
        <div className="header-container">
            <div className="avatar">
                <img src="" alt="profile image for the user"></img>
            </div>
            <div className="user-information-container">
                <section className="upper-section">
                    <h2>{user}</h2>
                    <button className=" button-primary">Follow</button>
                    <button className="button-primary">˯</button>
                    <button className="button-settings">...</button>
                </section>
                <section className="middle-section">
                    <span className="">178 post</span>
                    <span className="">7.6m followers</span>
                    <span className=""> 385 following</span>
                    <h2>Mark Zuckerberg</h2>
                </section>
                <section className="lower-section">
                    <p> followed by <span className="followers">bill_gates</span> and <span className="followers">angelina.jolie</span></p>
                </section>
            </div>
        </div>
    </React.Fragment>)
}

export default Header;