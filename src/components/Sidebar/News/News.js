import React from 'react';
import classes from './News.scss';
import Spinner from '../../UI/Spinner/Spinner';
import {stripHtmlTags} from '../../../shared/utility';

const news = (props) => {

  let news = <Spinner/>;
  if (props.news.newsContent[0]) {

    news = props.news.newsContent.map((newsItem) => {
      newsItem.content = stripHtmlTags(newsItem.content);
      return (
          <div key={newsItem.guid} className={classes.News}>
            <div
                className="card">
              <a href={newsItem.link} target={'_blank'}>
                <img className="card-img-top" src={newsItem.enclosure.link}
                     alt=""/>
              </a>
              <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.content}</p>
                <a href={newsItem.link} target={'_blank'}
                   className="btn btn-outline-primary">{props.news.text.readMore}</a>
              </div>
            </div>
          </div>

      );

    });
  }

  let preloadEnglish = null;
  let preloadRussian = null;

  if (props.english[0]) {
    preloadEnglish = props.english.map((el) => {
      return <img
          key={el.guid}
          alt='' hidden={true}
          src={el.enclosure.link}/>;
    });

  }

  if (props.russian[0]) {
    preloadRussian = props.russian.map((el) => {
      return <img
          key={el.guid}
          alt='' hidden={true}
          src={el.enclosure.link}/>;
    });
  }

  return (
      <div className={classes.News}>
        {news}
        {preloadEnglish}
        {preloadRussian}
      </div>
  );

};

export default news;