import React, { useEffect, useState } from "react";
import { useWindowScroll } from 'react-use'

const GotoTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [scrollButton, setScrollButton] = useState(false);

    useEffect(() => {
        setScrollButtonValue();
    });

    // now hide and show the button according to scroll
    const setScrollButtonValue = () => {
        if (pageYOffset > 100) {
            setScrollButton(true);
        } else {
            setScrollButton(false);
        }
    }

    // this function simply make to got top level when I click
    const scrolltoTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })


    return (
        <>
            {
                scrollButton
                    ? <div className="scroll-to-top">
                        <span className="btn btn-danger btn-gototop" onClick={scrolltoTop}>
                            <i className="fa fa-arrow-up"></i>
                        </span>
                    </div>
                    : ''
            }
        </>
    )
}

export default GotoTop;