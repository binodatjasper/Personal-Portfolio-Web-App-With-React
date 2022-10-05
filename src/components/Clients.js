import React from "react";

const Clients = () => {

    const clientList = [
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand1.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand2.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand3.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand4.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand5.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand6.png'
        }
    ]

    return (
        <section className="clients">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <ul className="row clients_list">
                            {
                                clientList.map((item, index) => {
                                    return (
                                        <li key={index} className="col-md-4 col-sm-6">
                                            <div className="clients_item">
                                                <img src={item.image} alt="Code with Binod" loading="lazy" />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="clients__contnet">
                            <div className="section__heading">
                                <h4>My Clients</h4>
                                <h2>I Work With Over <span>150+ Happy Clients</span></h2>
                                <p>There are many variations of passages of Lorem Ipsum.</p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;