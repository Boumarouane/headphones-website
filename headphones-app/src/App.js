import "./App.css";

function App() {
  return (
    <section className="main-container">
      <section className="blur-container">
        <div className="grid-navbar">navbar</div>
        <div className="grid-text-left">text-left</div>
        <div className="grid-pagination">pagination</div>
        <div className="grid-title">title</div>
        <div className="grid-description">
          <div>description-left</div>
          <div>description-right</div>
        </div>
        <div className="grid-slider-stars">
          <div>Slider button</div>
          <div>Price and stars</div>
        </div>
        <div className="grid-canvas">canvas</div>
        <div className="grid-social-icons">social-icons</div>
        <div className="grid-text-right">text-right </div>
      </section>
    </section>
  );
}

export default App;
