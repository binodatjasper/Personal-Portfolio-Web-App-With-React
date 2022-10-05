import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Portfolios = () => {

    const portfolioSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const projectiList = [
        {
            title: 'Project Management Dashboard',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Software Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio1.jpg'
        },
        {
            title: 'Achitectural Studio Website',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Web Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio2.jpg'
        },
        {
            title: 'File Manager App',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'App Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio3.jpg'
        },
        {
            title: 'Fashion Model Landing Page',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Custom CMS Blog',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio4.jpg'
        },
        {
            title: 'NFT Header Vision',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: 'Web Development',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio5.jpg'
        },
        {
            title: 'P',
            content: 'Donec cursus odio ac sodalses hendrerit. Lorem isum dolor sit amet, consecetur adipiscing ellit',
            projectType: '',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio6.jpg'
        }
    ]

    return (
        <section className="portfolios">
            <div className="section__heading">
                <h4>My Work</h4>
                <h2>See My Portfolio</h2>
            </div>
            <div className="section__body">
                <div className="portfolios_list">
                    <Slider {...portfolioSettings}>
                        {
                            projectiList.map((item, index) => {
                                return (
                                    <div key={index} className="portfolios_item">
                                        <div className="portfolios_thumbnail">
                                            <img src={item.image} alt={item.title} loading="lazy" />
                                        </div>
                                        <div className="portfolios_description">
                                            <span>{item.projectType}</span>
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                            <Link to="/portfolios">View Case Study</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Portfolios;