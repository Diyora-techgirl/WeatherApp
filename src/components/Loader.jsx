
import './Loader.css'; // Import CSS for styling and animations

const Loader = () => {
  return (
    <>
      <div className="pikachu">
        <div className="ear left"></div>
        <div className="ear right"></div>
        <div className="face">
             <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="nose"></div>
        </div>
        <div className="body"></div>
        <div className="tail"></div>
      </div>
      <div className="battery-container">
                <div className="battery battery-charging"></div>
            </div>
    </>
  );
};

export default Loader;
