import React, {Component} from 'react';
import classes from './Carousel.scss';


class Carousel extends Component {

    state = {
        activeImageIndex: 0,
    }
    intervalId = null;

    componentDidMount = () => {
        this.intervalId = setInterval(this.changeState, (this.props.animationDuration));
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    changeState = () => {
        let index = this.state.activeImageIndex;
        const imagesLength = this.props.images.length;
        if (index + 1 < imagesLength) {
            index++;
        }
        else {
            index = 0;
        }
        this.setState({activeImageIndex: index});
    }


    render() {
        let index = 0;
        let images = this.props.images.map((img) => {
            let imageClasses = classes.Images;
            if (this.state.activeImageIndex === index) {
                imageClasses = imageClasses + ' ' + classes.ActiveImage;
            }
            index++;

            return <img
                style={{animationDuration: (this.props.animationDuration + 'ms')}}
                className={imageClasses} key={index} src={img} alt='img'
            />
        })

        return (
            <div className={classes.Carousel}>

                <div className={classes.ImageWrapper} style={{width: (this.props.width + '%')}}>
                    <img className={classes.StartImage} src={this.props.images[0]} alt='img'/>
                    {images}
                </div>
                <button onClick={this.changeState}>Change</button>

            </div>
        )

    }

}

export default Carousel