import React from "react";
import { Link } from "react-router-dom";

const Services = () => {

    const servicesList = [
        {
            title: 'Web Development',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit.',
            image: process.env.PUBLIC_URL + '/assets/images/service-icon1-one.png'
        },
        {
            title: 'Mobile App Development',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit.',
            image: process.env.PUBLIC_URL + '/assets/images/service-icon2-one.png'
        },
        {
            title: 'UX/UI Design',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit.',
            image: process.env.PUBLIC_URL + '/assets/images/service-icon3-one.png'
        }
    ];


    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="section__heading">
                            <h4>My Services</h4>
                            <h2>
                                <span>Why I Provided To</span>
                                <span>My Client</span>
                            </h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit.</p>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            <Link to='/services'>View All My Services</Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="services__list">
                            {
                                servicesList.map((item, index) => {
                                    return (
                                        <div key={index} className="services__item">
                                            <div className="services__item-icon">
                                                <img src={item.image} alt={item.title} loading="lazy" />
                                            </div>
                                            <div className="services__item-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.content}</p>
                                            </div>
                                            <span>0{index + 1}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;