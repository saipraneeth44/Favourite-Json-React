import React, { useState, useEffect } from "react";

import "./App.css";

//import UniversityData from "./components/UniversityData";
import rawData from "./Student_Data.json";
import ImageDisplayMain from "./components/ImageDisplayMain";
import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";
import PrintFilteredData from "./components/PrintfilteredData";
import Card_2 from "./components/Card_2";

///////////////////////////////////////////////////case 1//////////////////////////////////////////////////////////////
/*
function getData() {
  return rawData.map((i) => {
    return { ...i, id: uuidv4() };
  });
}

//console.log(Data);

function App() {
  const [fav, setFav] = useState([]);
  const [Data, setData] = useState(getData());

  console.log(fav, "fav");

  let filtered = Data.filter((i) => {
    if (fav.includes(i.id)) {
      return true;
    } else {
      return false;
    }
  });

  const filteredData = filtered.map((i) => {
    return i.University_Name;
  });
  console.log(filteredData, "filtered Data");

  return (
    <div>
      <PrintFilteredData filterUniversityName={filteredData} />
      {Data.map((item) => {
        return (
          <Card
            universityName={item.University_Name}
            specilization={item.Specialization}
            gradYear={item.Graduation_Year}
            employer={item.Employer}
            jobTitle={item.Job_Title}
            careerUrl={item.Career_Url}
            fav={fav}
            id={item.id}
            setFav={setFav}
          />
        );
      })}

      <ImageDisplayMain />
    </div>
  );
}

export default App;
*/
///////////////////////////////////////////////////////////////case 2/////////////////////////////////////////////////////

function getData() {
  return rawData.map((i) => {
    return { ...i, id: uuidv4(), isFav: false };
  });
}

function App() {
  const [Data, setData] = useState(getData());

  function handleFav(clicked_id) {
    let copy_data = [...Data];
    const index = copy_data.findIndex((i) => i.id === clicked_id);
    let obj = copy_data[index];
    let newObj = { ...obj, isFav: !obj.isFav };
    copy_data[index] = newObj;
    setData(copy_data);
  }
  let filtered = Data.filter((i) => i.isFav).map((i) => i.University_Name);

  return (
    <div>
      <PrintFilteredData filterUniversityName={filtered.join(".")} />
      {Data.map((item) => {
        return (
          <Card_2
            key={item.id}
            universityName={item.University_Name}
            specilization={item.Specialization}
            gradYear={item.Graduation_Year}
            employer={item.Employer}
            jobTitle={item.Job_Title}
            careerUrl={item.Career_Url}
            isFav={item.isFav}
            handleFav={handleFav}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
export default App;
