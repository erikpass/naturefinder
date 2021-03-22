import { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import './Styles/MapStyle.scss'

import { useContext } from "react"
import { Context } from './State/Store'

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZmxleGVycyIsImEiOiJja21obWdvancwOHJ0MnVxdnU0YWpob2FqIn0.RpicW8GGmxuCYGLRcVe4bQ';


export default function MapComponent() {
  const [state,] = useContext(Context);
  const map = useRef(null);
  const mapContainer = useRef();
  const [lng, setLng] = useState(-100);
  const [lat, setLat] = useState(31);
  const [zoom, setZoom] = useState(0.23);

  useEffect(() => {
    if (map.current === null) return;
    let filterArray = ['in', 'iso_3166_1_alpha_3']
    filterArray = filterArray.concat(state.nations)

    map.current.setFilter('country-boundaries', filterArray)

  },[state.nations])

  useEffect(() => {
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom,
    maxZoom: 2.9
    });

    map.current.on('load', () => {
      map.current.addLayer(
      {
        id: 'country-boundaries',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1',
        },
        'source-layer': 'country_boundaries',
        type: 'fill',
        paint: {
          'fill-color': 'green',
          'fill-opacity': 0.4,
        },
      },
        'country-label',
      );
      map.current.setFilter('country-boundaries', ['in', 'iso_3166_1_alpha_3'])
    })

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    return () => map.current.remove();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div className="map-component">
      <div className="map-container-container">
        <div className="map-container" ref={mapContainer} />
      </div>
    </div>
  )
}
