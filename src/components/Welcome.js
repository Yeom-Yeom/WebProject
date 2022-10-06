import React from "react";

const Welcome = ({ username, logOut }) => {
  return (
    <div className="welcome">
      <div className="header">
        <h1 className="wel">환영합니다, </h1>
        <h1 className="use">{username + " ;)"}</h1>
      </div>
      <button type="submit" onClick={logOut}>
        로그아웃
      </button>
    </div>
  );
};

export default Welcome;