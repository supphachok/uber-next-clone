import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwcGhhY2hvayIsImEiOiJja3hyaWl2aGc1ZWlyMm9vYzZ4M2F0d2lhIn0.sAUWuH2TQO5Sx5eEpOOmfw'

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: ['100.5208057', '13.6605108'],
      zoom: 8,
    })

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 60,
      })
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`
