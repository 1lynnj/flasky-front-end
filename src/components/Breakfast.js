// import React not required in new versions of react
import "./Breakfast.css"; //can use ./ if in same folder as css file (components)

const Breakfast = () => {
  const name = "Cereal";
  const description = "It's tasty";
  const prepTime = 2;
  const rating = 5;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="emphasizedText">Prep time: {prepTime} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
    </div>
  );
};

export default Breakfast; //allows importing into other files
