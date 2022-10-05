import React from "react";

// import components
import GotoTop from "./GotoTop";

const Footer = () => {

    const getDate = new Date();
    const getYear = getDate.getFullYear();

    return (
        <>
            <GotoTop />
            <footer className="footer">
                <div className="container">
                    <p>Copyright {getYear} - Personal Portfolio Web App with React JS. All Rights Reserved. Developend by: Code with Binod</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;