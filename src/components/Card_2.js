import { useState } from "react";
function Card_2(props) {
  //const [isFavourite, setIsFavourite] = useState(props.isFav);
  const {
    universityName,
    specilization,
    gradYear,
    employer,
    jobTitle,
    careerUrl,

    isFav,
    id,
    handleFav,
  } = props;

  // let changeData = copy_data.map((i) => {
  //   if (i.id === clicked_id) {
  //     return { ...i, isFav: !i.isFav };
  //   }
  //   return i;
  // });
  // setData(changeData);

  return (
    <div style={{ borderColor: isFav ? "green" : "red" }} className="main_card">
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
          {isFav ? `Unfavourite` : `favourite`}
        </button>
      </ul>
    </div>
  );
}

export default Card_2;
