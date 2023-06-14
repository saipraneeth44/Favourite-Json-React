import { useState } from "react";
import "./UniversityData.css";

function Card(props) {
  //const [isFav, setIsFav] = useState(false);
  const {
    universityName,
    specilization,
    gradYear,
    employer,
    jobTitle,
    careerUrl,
    fav,
    id,
    setFav,
  } = props;

  function handleFav(id) {
    let copyFav = [...fav];
    const index = copyFav.indexOf(id);
    if (copyFav.indexOf(id) === -1) {
      copyFav.push(id);
    } else {
      copyFav.splice(index, 1);
    }

    setFav(copyFav);
  }

  return (
    <div
      style={{ borderColor: fav.includes(id) ? "green" : "red" }}
      className="main_card"
    >
      <h1>{universityName}</h1>
      <ul>
        <li>
          <h3>{specilization}</h3>
        </li>
        <li>
          <h3>{gradYear}</h3>
        </li>
        <li>
          <h3>{employer}</h3>
        </li>
        <li>
          <h3>{jobTitle}</h3>
        </li>
        <li>
          <h3>{careerUrl}</h3>
        </li>
        <button onClick={() => handleFav(id)}>
          {fav.includes(id) ? `unfavorite` : `favourite`}
        </button>
      </ul>
    </div>
  );
}

export default Card;
