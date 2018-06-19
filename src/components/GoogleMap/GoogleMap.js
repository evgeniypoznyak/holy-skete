import React, {Component} from 'react';
import classes from './GoogleMap.scss';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class GoogleMap extends Component {

  static defaultProps = {
    center: {lat: 40.7446790, lng: -73.9485420},
    zoom: 11,
  };

  render() {
    return (
        <div className='google-map'>

          <GoogleMapReact
              bootstrapURLKeys={{
                key: this.props.apiKey,
                language: 'ru',
                region: 'ru',
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}>
            <AnyReactComponent
                lat={40.7473310}
                lng={-73.8517440}
                text={'Where'}
                bootstrapURLKeys={{
                  key: this.props.apiKey,
                  language: 'ru',
                  region: 'ru',
                }}
            />
          </GoogleMapReact>
        </div>
    );
  }

}

export default GoogleMap;