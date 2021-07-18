import React from 'react'
import GoogleMapReact from 'google-map-react';
import './style.css'

const AnyReactComponent = ({ text }) => (
    <>
        <div className="mapIcon">
            <i class="fas fa-map-marker-alt"></i>
        </div>
        <div className="locationName">
            {text}
        </div>
    </>
);

export class SimpleMap extends React.Component {
    static defaultProps = {
        center: { lat: 26.001659, lng: 92.847740 },
        zoom: 11
    };

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={26.001659}
                    lng={92.847740}
                    text={'PlantHub'}
                />
            </GoogleMapReact>
        );
    }
}
