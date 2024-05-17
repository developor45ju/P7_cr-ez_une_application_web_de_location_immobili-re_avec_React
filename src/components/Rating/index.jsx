import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ rate }) {
  /**
   * Si le rate est noté entre 0 et 5 étoiles, alors on affiche le nombre correspondant
   * sinon on affiche une string disant que le logement n'a pas encore été noté.
   * @type boolean
   */
  const isRateValid = rate >= 0 && rate <= 5;
  const isRateANumber = !isNaN(rate)

  if (isRateValid && isRateANumber) {
    const rateToUse = Number(rate);
    return (
      <div>
        {[...Array(rateToUse)].map(() => (
          <FontAwesomeIcon icon={faStar} style={{ color: "#FF6060" }} />
        ))}
        {[...Array(5  - rateToUse)].map(() => (
          <FontAwesomeIcon icon={faStar} style={{ color: "#E3E3E3" }} />
        ))}
      </div>
    );
  }

  return "Ce logement n'a pas encore été noté";
}

export default Rating;
