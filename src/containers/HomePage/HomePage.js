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

class HomePage extends Component {

  render() {
    return (
        <div className={classes.HomePage}>
          <TopImage topImageData={this.props.topImage}/>

          <div className='container-fluid'>

            <div className="row">

              <div className="col col-md-8">
                <MainContent
                    paragraphs={this.props.content.mainParagraph}></MainContent>
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

          <Slideshow/>
          <Carousel />

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