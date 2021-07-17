import { connect } from 'react-redux';
import PlaceInteraction from "./placeInteraction.comp";
import { fetchPlaceInteraction } from './placeInteraction.actions';

const mapStateToProps = (state) => {
  return {...state.place}
}

const mapDispatchToProps = {
  fetchPlaceInteraction
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceInteraction);