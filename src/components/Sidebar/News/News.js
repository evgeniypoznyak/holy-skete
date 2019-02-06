import React from 'react';
import classes from './News.scss';
import Spinner from '../../UI/Spinner/Spinner';
import {stripHtmlTags} from '../../../shared/utility';

const news = (props) => {

    let news = <Spinner/>;
    let preloadEnglish = null;
    let preloadRussian = null;

    if (props.news.newsContent.length > 0) {

        news = props.news.newsContent.map((newsItem) => {

            let imgURL = 'NEWS PICTURE';
            if (
                newsItem &&
                newsItem.enclosure &&
                newsItem.enclosure['@attributes'] &&
                newsItem.enclosure['@attributes'].url
            ) {
                imgURL = newsItem.enclosure['@attributes'].url;
            }

            let title = '';
            if (newsItem.title && typeof newsItem.title === 'string') {
                title = stripHtmlTags(newsItem.title);
            }
            let content = '';
            if (newsItem.content && typeof newsItem.content === 'string') {
                content = stripHtmlTags(newsItem.content);
            }
            let link = '/';
            if (newsItem.link && typeof newsItem.link === 'string') {
                link = newsItem.link;
            }

            return (
                <div key={newsItem.guid} className={classes.News}>

                    <div
                        className="card">
                        <a href={link} target={'_blank'}>
                            <img className="card-img-top" src={imgURL}
                                 alt=""/>
                        </a>
                        <div className="card-body shadow">

                            <h5 className="card-title clearText">{title}</h5>
                            <p className="card-text">{content}</p>
                            <a href={link} target={'_blank'}
                               className="btn btn-outline-light">{props.news.text.readMore}</a>

                        </div>

                    </div>

                </div>

            );

        });

        if (props.english[0]) {
            preloadEnglish = props.english.map((el) => {
                let imgURL = 'NEWS PICTURE';
                if (el && el.enclosure && el.enclosure['@attributes'] && el.enclosure['@attributes'].url) {
                    imgURL = el.enclosure['@attributes'].url;
                }
                return <img
                    key={el.guid}
                    alt='' hidden={true}
                    src={imgURL}/>;
            });

        }

        if (props.russian[0]) {
            preloadRussian = props.russian.map((el) => {
                let imgURL = 'NEWS PICTURE';
                if (el && el.enclosure && el.enclosure['@attributes'] && el.enclosure['@attributes'].url) {
                    imgURL = el.enclosure['@attributes'].url;
                }
                return <img
                    key={el.guid}
                    alt='' hidden={true}
                    src={imgURL}/>;
            });
        }
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
