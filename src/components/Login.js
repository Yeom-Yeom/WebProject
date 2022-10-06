import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Login = ({ setUserName, setPassWord, logIn, goToSignUp, logerr }) => {
  return (
    <div className="login">
      <div className="header">
        <FontAwesomeIcon icon={faRightToBracket} className="icon" />
        <h1>로그인</h1>
      </div>
      <form>
        <div className="user">
          <label forhtml="username">아이디</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="pass">
          <label forhtml="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassWord(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={logIn}>
          로그인
        </button>
      </form>
      {logerr ? <p className="logerr">유효하지 않은 아이디 또는 비밀번호입니다.</p> : ""}
      <div className="sign-up">
        <p className="question">아이디가 없으신가요?</p>
        <p className="click-here" onClick={goToSignUp}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default Login;