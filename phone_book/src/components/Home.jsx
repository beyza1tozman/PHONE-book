import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/LogIn");
  };

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div className="bigTitle">
          Welcome <span className={"littleTitle"}>to Phone Book App!</span>
        </div>
        <img src="https://e7.pngegg.com/pngimages/276/831/png-clipart-telephone-directory-book-phone-book-text-logo-thumbnail.png"></img>
      </div>

      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value="Log In"
        />
      </div>
    </div>
  );
}

export default Home;
