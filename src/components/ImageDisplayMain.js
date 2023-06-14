import { useEffect, useState } from "react";
import ImageDisplay from "./ImageDisplay";

function ImageDisplayMain() {
  const [currentUrl, setCurrentUrl] = useState(0);

  const url = [
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6118/9781611800586.jpg",
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509852505.jpg",
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4019/9781401948368.jpg",
  ];

  const handlePrevious = () => {
    setCurrentUrl(currentUrl - 1);
  };

  const handleNext = () => {
    setCurrentUrl(currentUrl + 1);
  };

  return (
    <div>
      <ImageDisplay currentUrl={url[currentUrl]} index={currentUrl} />
      <button onClick={handlePrevious} disabled={currentUrl <= 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentUrl === url.length - 1}>
        Next
      </button>
      <br></br>
    </div>
  );
}
export default ImageDisplayMain;
