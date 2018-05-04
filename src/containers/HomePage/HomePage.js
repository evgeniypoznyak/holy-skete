import React, {Component} from 'react';
import classes from './HomePage.scss';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import {Button, UncontrolledAlert} from 'reactstrap';
import Spinner from '../../components/UI/Spinner/Spinner';
import Sidebar from '../../components/Sidebar/Sidebar';
import Calendar from '../../components/Sidebar/Calendar/Calendar';
import News from '../../components/Sidebar/News/News';

class HomePage extends Component {

  render() {
    let test = <Spinner/>;
    if (this.props.news[0]) {
      test =
          <div className="row">
            <div className="col">
              <p>{this.props.news[0].title}</p>
              <p>
                <img alt='' height={100}
                     src={this.props.news[0].enclosure.link}/>
              </p>
              <img alt='' hidden={true}
                   src={this.props.russian.content.news[0].enclosure.link}/>
              <img alt='' hidden={true}
                   src={this.props.english.content.news[0].enclosure.link}/>
            </div>
          </div>;

    }

    return (
        <div className={classes.HomePage}>Home
          <div>
            <button className='btn btn-outline-danger'>TEST</button>
            <Button color={'danger'}>Danger!</Button>
            <UncontrolledAlert color="info">
              I am an alert and I can be dismissed!
            </UncontrolledAlert>

            <Button
                color={'success'}
                onClick={() => this.props.onChangeLanguageStart('english')}
            >English</Button>

            <Button
                color={'primary'}
                onClick={() => this.props.onChangeLanguageStart('russian')}
            >Russian</Button>


          </div>

          <Sidebar>
            <Calendar/>
            <News/>
          </Sidebar>

          <div className='container'>
            {test}
            <div className="row">
              <div className="col">
                {this.props.content.mainParagraph.paragraph1}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.props.content.mainParagraph.paragraph2}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.props.content.mainParagraph.paragraph3}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.props.content.mainParagraph.paragraph4}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.props.content.mainParagraph.paragraph5}
              </div>
            </div>

          </div>
        </div>

    );

  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    content: state.appData.data[state.language.languageSelected].content.pages.homePage,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
    news: state.appData.data[state.language.languageSelected].content.news,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLanguageStart: (language) => dispatch(
        actions.onChangeLanguageStartAction(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);