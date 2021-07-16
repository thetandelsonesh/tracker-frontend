import {Link} from "react-router-dom";
import {Card} from "antd";
import routes from "../../constants/routes";

import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="menu-selection">

        <h1>Vehicle Tracker Menu</h1>

        <ul>
          <li>
            <Link to={routes.placeInteraction}>
              <Card>Place Interactions</Card>
            </Link>
          </li>
          <li>
            <Link to={routes.vehicleActivity}>
              <Card>Vehicle Activities</Card>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home;