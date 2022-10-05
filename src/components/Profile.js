import React from "react";

import ProfileTabPanel from "./ProfileTabPanel";

const Profile = () => {

    const profileImageUrl = process.env.PUBLIC_URL + '/assets/images/about-us-img-one.jpg';

    return (
        <section className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="profile__thumbnail">
                            <img src={profileImageUrl} alt="Code with Binod" loading="lazy" />
                            <div className="profile__experience">
                                <h4>
                                    <span>6 Years</span>
                                    <span>Of Experience</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="profile__content">
                            <div className="section__heading">
                                <h4>I'm a Developer</h4>
                                <h2>I Develop Ideas <span>That Help People</span></h2>
                                <p>Sed aliqut quis diam sit amet blandit. Suspendsiss agitts magna et efficitur agets. Inter laoreet ligual eu ultrices gravida.</p>
                            </div>
                            <div className="section__body">
                                <ProfileTabPanel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;