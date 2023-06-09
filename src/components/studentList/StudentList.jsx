// import "./background.style.css";
import "./studentList.style.css";
import { students } from "./studentData";
import CustomButton from "../customButton/CustomButton";
import React, { useState } from "react";

const StudentList = () => {
  const [isPopupShow, setisPopupShow] = useState(false);
  const onClickButton = () => {
    setisPopupShow(true);
  };

  const showStudents = students.map((el, index) => {
    return (
      <div className="card" key={index}>
        <img src={el.picture} />
        <p>{el.name}</p>
        <p> Likes </p>
        <p>{el.hobby} </p>
        <CustomButton onClickButton={onClickButton} text="More Info" />
      </div>
    );
  });

  return (
    <div className="container">
      {showStudents}
      <div class="space stars1"></div>
      <div class="space stars2"></div>
      <div class="space stars3"></div>
      {isPopupShow && <p className="p-text"> modal is showing</p>}
    </div>
  );
};

export default StudentList;

//Write a function, Given an integer n, return n:
// answer[n] == "FizzBuzz" if n is divisible by 3 and 5.
// answer[n] == "Fizz" if n is divisible by 3.
// answer[n] == "Buzz" if n is divisible by 5.
// answer[n] ==  if none of the above conditions are true, return n.
