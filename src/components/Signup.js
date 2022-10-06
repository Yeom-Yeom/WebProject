import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Signup = ({
  setUserName,
  setPassWord,
  createAccount,
  userexists,
  inputlength,
  backToLogIn,
}) => {
  return (
    <div className="signup">
      <div className="header">
        <FontAwesomeIcon icon={faUserPlus} className="icon" />
        <h1>회원가입</h1>
      </div>
      <form>
        <div className="user">
          <label forhtml="username">아이디를 입력하세요.</label>
          <input
            name="username"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="pass">
          <label forhtml="password">비밀번호를 입력하세요.</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassWord(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={createAccount}>
          회원가입
        </button>
      </form>
      {userexists ? (
        <p className="create-error">이미 존재하는 아이디입니다.</p>
      ) : (
        ""
      )}
      {inputlength ? (
        <p className="create-error">
          아이디는 최소 3글자 이상, 비밀번호는 최소 5글자 이상 입력하세요.
        </p>
      ) : (
        ""
      )}
      <div className="go-back">
        <p className="question">이미 아이디가 있으신가요?</p>
        <p className="click-here" onClick={backToLogIn}>
          로그인하러가기
        </p>
      </div>
    </div>
  );
};

export default Signup;