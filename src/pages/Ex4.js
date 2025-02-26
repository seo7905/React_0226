import React, { useState } from "react";
import "../css/ex4.css";



function Ex4(){
    const [txt, setTxt] = useState('insert test...');

    function setValue(e){
        setTxt(e.target.value); // txt의 값이 변경된다.
    }
    // txt 직접접근 불가, setTxt를 통해 값을 넣을 수 있는 통로가 생김. 
    // 변수는 바꾸지 못하기에 setTxt를 통해 값을 바꿔야 한다. 
    // 상수(변수명이 바뀌지 않음.(못바꿈)) [변수명,함수명] -> 하나의 객체, useState 는 값을 얻는게 중점이 아니라 값을 넣어주는게 중점이다.(초기화가 중점), 즉 setter 가 변수뒤에 와야한다.
    return(
        <div>
            <input type="text" placeholder={txt} 
            onChange={setValue}/>
            <br/>
            <p className="box">{txt}</p>
        </div>
    );
}
export default Ex4;