import React from "react";

const Contact = (props) => {

    return (
        <section className="contact">
            <div className="container">
                <div className="section__heading">
                    <h4>Do you have any query?</h4>
                    <h2>Contact Me</h2>
                </div>
                <div className="section__body">
                    <div className="contact__form">
                        <form action="/" method="post">
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control contact-form-control" placeholder="Full Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="Emal" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="Phone" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="Address" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="Subject" />
                                </div>
                                <div className="col-sm-12">
                                    <textarea type="text" className="form-control contact-form-control" placeholder="Subject"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button disabled className="btn bnt-lg btn-contact-form">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact