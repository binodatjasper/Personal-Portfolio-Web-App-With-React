import React from "react";
import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
    return (
        <section className="content section_content">
            <div className="container">
                <h1>404 | Page Not Found</h1>
                <Link to='/' className="btn btnlg btn-success">Back to Home</Link>
            </div>
        </section>
    )
}

export default PageNotFoundPage;