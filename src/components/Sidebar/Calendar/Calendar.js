import React, {Component} from 'react';
import classes from './Calendar.scss';
import {connect} from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';

class Calendar extends Component {
    renderImage() {
        let image = null;
        let holiday = null;
        let saint = null;
        if (this.props.calendar.date) {
            if (this.props.calendar.holidays &&
          this.props.calendar.holidays[0] &&
          this.props.calendar.holidays[0].img
            ) {
                holiday = this.props.calendar.holidays[0];
                image = <a href={holiday.url} target='_blank'>
                    <img className={'shadow ' + classes.CalendarImage} title={holiday.name}
                        src={holiday.img} alt={'img'}/>
                </a>;
            } else if (this.props.calendar.saints &&
          this.props.calendar.saints[0] &&
          this.props.calendar.saints[0].img
            ) {
                saint = this.props.calendar.saints[0];
                image = <a href={saint.url} target='_blank'>
                    <img className={'shadow ' + classes.CalendarImage} title={saint.name}
                        src={saint.img} alt={'img'}/>
                </a>;
            }
            return image;
        }
    }

    renderHolidays(holidays) {
        let key = 0;
        const renderedHolidays = holidays.map((holiday) => {
            key++;
            return (
                <div key={key}>
                    <div className='h4 text-center'>{holiday.name}</div>
                </div>
            );
        });

        return renderedHolidays;
    }

    renderSaints(saints) {
        let key = 0;
        const renderedSaints = saints.map((saint) => {
            key++;
            return (
                <div key={key}>
                    <div className={classes.SaintName}>{saint.name}</div>
                </div>
            );
        });

        return renderedSaints;
    }

    render() {
        let calendarHtml = <Spinner/>;

        let image = null;
        let holidays = null;
        let saints = null;

        if (this.props.calendar.date) {
            if (this.props.calendar.holidays) {
                holidays = this.renderHolidays(this.props.calendar.holidays);
            }
            if (this.props.calendar.saints) {
                saints = this.renderSaints(this.props.calendar.saints);
            }

            image = this.renderImage();

            calendarHtml = (
                <div>
                    <div className='h5'>{this.props.calendar.date}</div>
                    <div className='h5'>{this.props.content.voice}: {this.props.calendar.voice}</div>
                    <div className={classes.Centered}>{image}</div>
                </div>
            );

            if (this.props.language === 'russian') {
                calendarHtml = (
                    <div>
                        <div className='h5'>{this.props.calendar.date}</div>
                        <div className='h5'>{this.props.calendar.week}</div>
                        <div className='h5'>{this.props.content.voice}: {this.props.calendar.voice}</div>
                        <div className={classes.Centered}>{image}</div>
                        {holidays}
                        {saints}
                    </div>
                );
            }
        }
        return (
            <div className={classes.Calendar}>
                {calendarHtml}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.languageSelected,
        content: state.appData.data[state.language.languageSelected].languageData.calendar.contentHtml,
        calendar: state.appData.data[state.language.languageSelected].languageData.calendar,
        image: null,
    };
};

export default connect(mapStateToProps)(Calendar);
