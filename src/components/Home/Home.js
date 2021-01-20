import React from "react";

const Home = (props) => {
  return (
    <React.Fragment>
      <p id="hoverStatus">{props.myState}</p>

      <p></p>
    </React.Fragment>
  );
};

export default Home;
