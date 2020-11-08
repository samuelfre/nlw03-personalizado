import React from "react"
import ThemeSelector from './ThemeSelector'

export default class DisplayMapClass extends React.Component {
  mapRef = React.createRef();
  state = {
    map: null
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "E-lPAs5se1QbjrWM9UZQo6MY5WSjtw6kkSjLctem8UA"
    });

    const defaultLayers = platform.createDefaultLayers();
    var container = document.getElementById('map');

    const map = new H.Map(
      container,
      defaultLayers.vector.normal.map,
      {
        center: { lat: -16.68239, lng: -49.23199 },
        zoom: 10,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState({ map });
  }

  componentWillUnmount() {
    this.state.map.dispose();
  }


  // changeTheme(theme, style) {
  //   var tiles = this.platform.getMapTileService({ 'type': 'base' });
  //   var layer = tiles.createTileLayer(
  //     'maptile',
  //     theme,
  //     256,
  //     'png',
  //     { 'style': style }
  //   );
  //   this.map.setBaseLayer(layer);
  // }


  // shouldComponentUpdate(props, state) {
  //   this.changeTheme(props.theme, props.style);
  //   return false;
  // }

  render() {
    return <div ref={this.mapRef} style={{ height: "500px", zIndex: 10}}>
      {/* <ThemeSelector changeTheme={this.onChange} /> */}
    </div>;
  }
}