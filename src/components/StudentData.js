import { useState } from "react";
import data_json from "./Student_Data.json";

function StudentData() {
  var i = 0;
  const [currentDetail, setCurrentDetail] = useState({
    University_Name: data_json[i].University_Name,
    Specialization: data_json[i].Specialization,
    Graduation_Year: data_json[i].Graduation_Year,
  });

  const handleNext = () => {
    setCurrentDetail({
      University_Name: data_json[i + 1].University_Name,
      Specialization: data_json[i + 1].Specialization,
      Graduation_Year: data_json[i + 1].Graduation_Year,
    });
  };

  const handlePrevious = () => {
    setCurrentDetail({
      University_Name: data_json[i - 1].University_Name,
      Specialization: data_json[i - 1].Specialization,
      Graduation_Year: data_json[i - 1].Graduation_Year,
    });
  };

  return (
    <>
      <div>{currentDetail.University_Name}</div>
      <div>{currentDetail.Specialization}</div>
      <div>{currentDetail.Graduation_Year}</div>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default StudentData;
