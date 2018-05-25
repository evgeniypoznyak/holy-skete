import React, {Component} from 'react';
import classes from './HomePage.scss';
import {connect} from 'react-redux';
import {UncontrolledAlert} from 'reactstrap';
import Sidebar from '../../components/Sidebar/Sidebar';
import Calendar from '../../components/Sidebar/Calendar/Calendar';
import News from '../../components/Sidebar/News/News';
import MainContent from '../../components/MainContent/MainContent';
import TopImage from '../../components/TopImage/TopImage';
import Carousel from '../../components/Carousel/Carousel';
import Slideshow from '../../components/Slideshow/Slideshow';
import image1 from '../../assets/images/home-page-slider/001.jpg';
import image2 from '../../assets/images/home-page-slider/002.jpg';
import image3 from '../../assets/images/home-page-slider/003.jpg';
import image4 from '../../assets/images/home-page-slider/004.jpg';
import image5 from '../../assets/images/home-page-slider/005.jpg';


class HomePage extends Component {

    state = {
        sliderImages: [
            image1, image2, image3, image4, image5,
        ],
    }

    render() {

        return (
            <div className={classes.HomePage}>
                <TopImage topImageData={this.props.topImage}/>
                <Slideshow/>

                <div className='container-fluid'>

                    <div className="row">

                        <div className="col col-md-8">
                            <MainContent
                                paragraphs={this.props.content.mainParagraph}></MainContent>
                            <Carousel
                                width={30}
                                images={this.state.sliderImages}
                                animationDuration={4000}
                            />
                        </div>

                        <div className="col col-md-4">
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


                <UncontrolledAlert color="info">
                    I am an alert and I can be dismissed!
                </UncontrolledAlert>
            </div>

        );

    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        content: state.appData.data[state.language.languageSelected].languageData.pages.homePage,
        russian: state.appData.data.russian,
        english: state.appData.data.english,
        news: state.appData.data[state.language.languageSelected].languageData.news,
        calendarDate: state.appData.data[state.language.languageSelected].languageData.calendar.date,
        calendarHolidays: state.appData.data[state.language.languageSelected].languageData.calendar.holidays,
        topImage: state.appData.data[state.language.languageSelected].languageData.topImage,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);