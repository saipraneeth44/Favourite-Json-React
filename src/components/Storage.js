/*
function App() {
    const [currentUrl, SetCurrentUrl] = useState(0);
  
    const handleNext = () => {
      if (currentUrl === url.length - 1) {
        SetCurrentUrl(0);
      } else {
        SetCurrentUrl(currentUrl + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentUrl === 0) {
        SetCurrentUrl(url.length - 1);
      } else {
        SetCurrentUrl(currentUrl - 1);
      }
    };
  
    const url = [
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6118/9781611800586.jpg",
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509852505.jpg",
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4019/9781401948368.jpg",
    ];
  
    return (
      <div className="App">
        {currentUrl === url.length - 1 ? <h2>you are on last image</h2> : null}
        {currentUrl === url.length - url.length ? (
          <h2>you are on first image</h2>
        ) : null}
  
        <ImageDisplay
          index={currentUrl}
          currentUrl={url[currentUrl]}
          isEven={(currentUrl + 1) % 2 === 0}
        />
  
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }
  
  export default App;

  */
