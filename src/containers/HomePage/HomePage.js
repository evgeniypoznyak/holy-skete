import React, {Component} from 'react';
import classes from './HomePage.scss';
import {connect} from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import Calendar from '../../components/Sidebar/Calendar/Calendar';
import News from '../../components/Sidebar/News/News';
import MainContent from '../../components/MainContent/MainContent';
import TopImage from '../../components/TopImage/TopImage';
import Carousel from '../../components/Carousel/Carousel';
import image1 from '../../assets/images/home-page-slider/001.jpg';
import image2 from '../../assets/images/home-page-slider/002.jpg';
import image3 from '../../assets/images/home-page-slider/003.jpg';
import image4 from '../../assets/images/home-page-slider/004.jpg';
import image5 from '../../assets/images/home-page-slider/005.jpg';
import TopImageUrl from '../../assets/images/top-header.jpg';

class HomePage extends Component {
    state = {
        sliderImages: [
            image1, image2, image3, image4, image5,
        ],
    };

    render() {
        return (
            <div className={classes.HomePage}>
                <TopImage
                    topImageUrl={TopImageUrl}
                    topImageData={this.props.content.topImage}/>
                <div className='container-fluid'>

                    <div className="row">

                        <div className="col col-md-8">
                            <MainContent
                                paragraphs={this.props.content.mainParagraph}></MainContent>
                            <div className={classes.SlideShowWrapper}>
                                <button
                                    className='btn btn-outline-primary btn-lg'
                                    onClick={() => {
                                        this.props.history.push('/slideshow');
                                    }}>
                                    {this.props.content.mainPageSlideshowButtonText}
                                </button>
                            </div>
                            <Carousel
                                width={100}
                                images={this.state.sliderImages}
                                animationDuration={4000}
                            />
                        </div>

                        <div className="col col-md-4">
                            <div className={classes.RightColumnWrapper}>
                                <Sidebar>
                                    <Calendar/>
                                    <News
                                        news={this.props.news}
                                        russian={this.props.russian.languageData.news.newsContent}
                                        english={this.props.english.languageData.news.newsContent}
                                    />
                                </Sidebar>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        content: state.appData.data[state.language.languageSelected].languageData.pages.homePage,
        russian: state.appData.data.russian,
        english: state.appData.data.english,
        news: state.appData.data[state.language.languageSelected].languageData.news,
        calendarDate: state.appData.data[state.language.languageSelected].languageData.calendar.date,
        calendarHolidays: state.appData.data[state.language.languageSelected].languageData.calendar.holidays,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
