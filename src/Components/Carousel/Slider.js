import React from 'react';
import './Slider.scss';
import {useSelector} from "react-redux";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  const assets = useSelector(state => state.assets)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3.5,
      paritialVisibilityGutter: 30
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return <button className={"arrow-right"} onClick={() => onClick()} />;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return <button className={"arrow-left"} onClick={() => onClick()} />;
  };

  return (
        <Carousel responsive={responsive}
                  itemClass={"Carousel__item"}
                  customLeftArrow={<CustomLeftArrow/>}
                  customRightArrow={<CustomRightArrow/>}>
          {assets.map((img, id) => (
              <div className={"Carousel__item"} key={id}>
                <img src={img.default}/>
              </div>
          ))}
        </Carousel>
  )
}

export default Slider;