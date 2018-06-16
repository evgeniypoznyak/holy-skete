import React, {Component} from 'react';
import classes from './Cemetery.scss';
import TopImage from '../../components/TopImage/TopImage';
import {connect} from 'react-redux';
import TopImageUrl from '../../assets/images/cemetery/top-image/cemetery.jpg';
import MainContent from '../../components/MainContent/MainContent';
import Carousel from '../../components/Carousel/Carousel';
import Banner from '../../components/Banner/Banner';
import bannerImage1 from '../../assets/images/cemetery/cemetery.jpg';
import bannerImage2 from '../../assets/images/cemetery/directionsBanner.jpg';
import quoteImageRussian
  from '../../assets/images/cemetery/qoute-saints/simeon-novui-bogoslov.jpg';
import quoteImageEnglish
  from '../../assets/images/cemetery/qoute-saints/antoniy-velikiy.jpeg';

import image1 from '../../assets/images/cemetery/carousel/010.jpg';


class Cemetery extends Component {

  render() {
   const httpImages = this.props.content.cemeterySlider1;
    const sliderImages = [];
    sliderImages[0] = image1;
    sliderImages.push(...httpImages);

    let quoteSaintSmallImageURL = quoteImageEnglish;
    if (this.props.language === 'russian') {
      quoteSaintSmallImageURL = quoteImageRussian;
    }

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

          <Banner imageUrl={bannerImage1}>
            <div className="text-center">
              <img
                  src={quoteSaintSmallImageURL}
                  className={'rounded ' + classes.QuoteSaintSmallImage}
                  alt={'img'}/>
            </div>
            <div>
              <div className={classes.CemeteryBannerQuote}>
                {this.props.content.firstBannerCemetery.firstBannerCemeteryText}
              </div>
              <div
                  className={'text-right ' + classes.CemeteryBannerQuoteAuthor}>
                {this.props.content.firstBannerCemetery.firstBannerCemeteryTextAuthor}
              </div>
            </div>
          </Banner>

          <div className={classes.HorizontalLine}></div>

          <Banner imageUrl={bannerImage2}>
            <div className="text-center">
              <button
                  className='btn btn-success btn-lg'
                  onClick={() => {
                    this.props.history.push('/directions');
                  }}>
                {this.props.content.secondBannerCemetery.secondBannerCemeteryButtonText}
              </button>
            </div>
          </Banner>

        </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    language: state.language.languageSelected,
    content: state.appData.data[state.language.languageSelected].languageData.pages.cemetery,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cemetery);