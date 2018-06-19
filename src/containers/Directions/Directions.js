import React, {Component} from 'react';
import classes from './Directions.scss';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

class Directions extends Component {


  // API_KEY = 'AIzaSyAQI80dFgmgFgt48RElGldGcXcFRSEVptA';
  API_KEY = 'AIzaSyCymnPyibrU1ythjzA2JZq2uzp77Dbnvww';

  render() {


    return (
        <div className={classes.Directions}>
          <GoogleMap
          apiKey={this.API_KEY}
          />
        </div>
    );

  }




}

export default Directions;