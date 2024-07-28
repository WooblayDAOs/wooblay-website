import React from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

const Carousel = () => {
    const images = ["/blocks.png", "/vercel.svg", "/outline.png", "/arm.png", "/splotch.png", "/next.svg"];

    return (
        <div className="carousel">
            <FancyCarousel
                images={images}
                carouselRadius={200}
                centralImageRadius={0}
                autoRotateTime={3}
                peripheralImageRadius={80}
                centralImageBoxShadow="0px 4px 8px rgba(0, 0, 0, 0.5)"
            />
        </div>
    );
}

export default Carousel;