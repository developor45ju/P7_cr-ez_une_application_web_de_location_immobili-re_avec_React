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
      <div className="rating">
        {[...Array(rateToUse)].map((_ ,i) => (
          <img src={process.env.PUBLIC_URL + "/images/starFill.png"} key={i} alt="étoile rempli" />
        ))}
        {[...Array(5  - rateToUse)].map((_ ,i) => (
          <img src={process.env.PUBLIC_URL + "/images/star.png"} key={i} alt="étoile vide" />
        ))}
      </div>
    );
  }

  return "Ce logement n'a pas encore été noté";
}

export default Rating;
