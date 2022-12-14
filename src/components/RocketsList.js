import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './RocketList.Mudules.css';
import { handleRocketReservation } from '../redux/rockets/rockets';

const RocketsList = ({
  id, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleReservation = ({ target }) => {
    const { type } = target.dataset;

    dispatch(handleRocketReservation({ id, type }));
  };

  return (

    <div className="rocketContents">
      <ul>
        <li key={id} className="rocketList">
          <img
            className="RocketImg"
            src={image}
            alt="rocket"
          />

          <div>
            <h2 className="RocketName">{name}</h2>
            <p className="RocketP">
              {reserved && (<span className="RocketReserved">Reserved</span>)}
              {description}
            </p>
            {reserved && (<button className="RocketCancelBtn" type="button" data-type="cancel" onClick={handleReservation}>Cancel Resrvation</button>)}
            {!reserved && (<button className="RocketReserveBtn" type="button" data-type="reserve" onClick={handleReservation}>Reserve Rocket</button>)}
          </div>
        </li>
      </ul>
    </div>

  );
};

RocketsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  image: PropTypes.node.isRequired,
};

export default RocketsList;
