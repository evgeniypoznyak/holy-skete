import React, {Component} from 'react';
import classes from './Cemetery.scss';
import TopImage from '../../components/TopImage/TopImage';
import {connect} from 'react-redux';
import TopImageUrl from '../../assets/images/cemetery/top-image/cemetery.jpg';
import MainContent from '../../components/MainContent/MainContent';
import Carousel from '../../components/Carousel/Carousel';
import image1 from '../../assets/images/cemetery/carousel/001.jpg';

class Cemetery extends Component {

  render() {

    const sliderImages = [
      image1,
    ];
    console.log(this.props);

    return (
        <div className={classes.Cemetery}>
          <TopImage
              topImageUrl={TopImageUrl}
              topImageData={this.props.content.topImage}/>

          <div className="container-fluid">
            <div className="row">
              <div className="sm-1 col-md-8">
                <MainContent
                    paragraphs={this.props.content.mainParagraph}></MainContent>
              </div>
              <div className='sm-1 col-md-4'>
                <div className={classes.CarouselWrapper}>
                  <Carousel
                      width={100}
                      images={sliderImages}
                      animationDuration={4000}
                  />
                </div>


              </div>
            </div>
          </div>



        </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    content: state.appData.data[state.language.languageSelected].languageData.pages.cemetery,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cemetery);