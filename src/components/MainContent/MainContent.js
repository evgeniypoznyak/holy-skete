import React from 'react';
import classes from './MainContent.scss';

const mainContent = (props) => {

  let paragraphs = null;
  if (props.paragraphs[0]) {
    let key = 0;
    paragraphs = props.paragraphs.map((paragraph) => {
      key++;

      if (key === 1) {
        let firstLetter = paragraph.charAt(0)
        paragraph = paragraph.substring(1);
        return (
            <div
                key={key}>
              <p className={classes.Paragraph}>
               <span className={classes.FirstLetter}>{firstLetter}</span> {paragraph}
              </p>
            </div>
        );
      }

      return (
          <div
              key={key}>
            <p className={classes.Paragraph}>
              {paragraph}
            </p>
          </div>

      );

    });

  }

  return (
      <div className={classes.MainContent}>
        <div className='container'>
          <div className="row">
          </div>
          <div className="row">
            {paragraphs}
          </div>
        </div>
      </div>
  );
};

export default mainContent;