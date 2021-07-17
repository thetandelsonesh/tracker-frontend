import { connect } from 'react-redux';
import PlaceInteraction from "./placeInteraction.comp";
import {fetchPlaceInteraction, fetchPlaceList} from './placeInteraction.actions';

const mapStateToProps = (state) => {
  return {...state.place}
}

const mapDispatchToProps = {
  fetchPlaceList,
  fetchPlaceInteraction
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceInteraction);