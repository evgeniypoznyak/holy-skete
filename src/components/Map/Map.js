import React from 'react';
import classes from './Map.scss';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

const MapWithAMarker = withScriptjs(withGoogleMap((props) => {
    return (
        <div className={classes.Map}>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{
                    lat: props.mapOptions.map.lat,
                    lng: props.mapOptions.map.long,
                }}
            >
                <Marker
                    position={{
                        lat: props.mapOptions.marker.lat,
                        lng: props.mapOptions.marker.long,
                    }}
                />
            </GoogleMap>
        </div>

    );
},
));

export default MapWithAMarker;
