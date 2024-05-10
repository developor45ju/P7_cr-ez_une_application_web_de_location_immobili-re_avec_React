import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ rate }) {
  return (
    <div>
      {[...Array(rate)].map(() => (
        <FontAwesomeIcon icon={faStar} style={{ color: "#FF6060" }} />
      ))}
      {[...Array(5 - rate)].map(() => (
        <FontAwesomeIcon icon={faStar} style={{ color: "#E3E3E3" }} />
      ))}
    </div>
  );
}

export default Rating;
/*
const test = [1, 2, 3].forEach((p) => p*48) 
const opo = [1, 2, 3].map((p) => p * 48);
 */
