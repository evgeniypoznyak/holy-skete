import React, {Component} from 'react';
import classes from './Directions.scss';
import {connect} from 'react-redux';
import Map from '../../components/Map/Map';
class Directions extends Component {

  // API_KEY = 'AIzaSyAQI80dFgmgFgt48RElGldGcXcFRSEVptA';
  // API_KEY = 'AIzaSyCymnPyibrU1ythjzA2JZq2uzp77Dbnvww';
  API_KEY = 'AIzaSyCymnPyibrU1ythjzA2JZq2uzp77Dbnvww';
  googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

  mapOptions = {
    marker: {
      lat: 39.539709,
      long: -74.898226,
    },
    map: {
      lat: 39.539709,
      long: -74.898226,
    },
  };

  render() {

    return (
        <div className={classes.Directions}>

          <Map
              mapOptions={this.mapOptions}
              googleMapURL={this.googleMapsUrl}
              loadingElement={<div style={{height: `100%`}}/>}
              containerElement={<div style={{height: `400px`}}/>}
              mapElement={<div style={{height: `100%`}}/>}
          />
          <div className={"text-center " + classes.DirectionButtonWrapper}>
            <a href={this.props.content.url} className={classes.Link} target="_blank">
             <button className={'btn btn-lg btn-block btn-success ' +
              classes.DirectionButton}>
                 {this.props.content.directionsButtonText}
              </button>
            </a>
          </div>

        </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    language: state.language.languageSelected,
    content: state.appData.data[state.language.languageSelected].languageData.pages.directions,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Directions);