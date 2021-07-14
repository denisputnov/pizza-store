import { YMaps, Map as YandexMapComponent, GeoObject } from 'react-yandex-maps';
import classes from './Map.module.css'

const Map = () => (
  <YMaps >
    <YandexMapComponent 
    className={classes.Map}
    defaultState={{
      center: [51.5562445209061,43.14681739928854],
      zoom: 16
    }}>

      <GeoObject 
        geometry={{
          type: 'Point', 
          coordinates: [51.557459130019026,43.1462455063868]
        }} 
        options={{
          preset: 'islands#blueFoodIcon'
        }}/>
    </YandexMapComponent>
  </YMaps>
)

export default Map
