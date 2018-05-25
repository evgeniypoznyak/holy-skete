import React, {Component} from 'react';
import classes from './SlideShow.scss';
import Carousel from "../../components/Carousel/Carousel";

import image1 from '../../assets/images/slideshow-page/001.jpg';
import image2 from '../../assets/images/slideshow-page/002.jpg';
import image3 from '../../assets/images/slideshow-page/003.jpg';
import image4 from '../../assets/images/slideshow-page/004.jpg';
import image5 from '../../assets/images/slideshow-page/005.jpg';
import image6 from '../../assets/images/slideshow-page/006.jpg';
import image7 from '../../assets/images/slideshow-page/007.jpg';
import image8 from '../../assets/images/slideshow-page/008.jpg';
import image9 from '../../assets/images/slideshow-page/009.jpg';
import image10 from '../../assets/images/slideshow-page/010.jpg';


class SlideShow extends Component {


    render() {

        const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
        return (
            <div className={classes.SlideShow}>
                <div className='container-fluid'>

                    <div className="row">
                        <Carousel
                            width={100}
                            images={images}
                            animationDuration={4000}
                        />
                    </div>
                </div>

            </div>
        )

    }

}

export default SlideShow