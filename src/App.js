import logo from './logo.svg';
import './App.css';
import "./css/menu.css";


/* JSX문법의 주석 
    - 외부파일을 사용할 때는 반드시 import해야함!
*/

import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  let subject = "쌍용교육센터";
  let myFont = {fontSize:"30px", color: '#f00'};
  return (
    <div className="App">
        {/* <article id="wrap">
          <header id="header">
            <ul id="nav">
              <li><a href="" id="apple">&nbsp;</a></li>
              <li><a href="">Store</a></li>
              <li><a href="">Mac</a></li>
              <li><a href="">iPad</a></li>
              <li><a href="">iPhone</a></li>
              <li><a href="">Watch</a></li>
              <li><a href="">Vision</a></li>
              <li><a href="">AirPods</a></li>
              <li><a href="">TV & Home</a></li>
              <li><a href="">Entertainment</a></li>
              <li><a href="">Accessories</a></li>
              <li><a href="">Support</a></li>
            </ul>
          </header>
      </article>
      <h2 style={myFont}>{subject}</h2> 
      <Ex1/>
      */}

      <nav>
          <Link to ="/ex1">메뉴1</Link> &nbsp;&nbsp;&nbsp;
          <Link to ="/ex2">메뉴2</Link> &nbsp;&nbsp;&nbsp;
          <Link to ="/ex3">메뉴3</Link> &nbsp;&nbsp;&nbsp;
          <Link to ="/ex4">메뉴4</Link> &nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path='/ex1' element={<Ex1/>} />
        <Route path='/ex2' element={<Ex2/>} />
        <Route path='/ex3' element={<Ex3/>} />
        <Route path='/ex4' element={<Ex4/>} />
      </Routes>
    </div>
  );
}

export default App;
/*
  라우터란?
    리엑트에서 라우터는 웹 브라우저에서 URL이 변경될 때마다
    URL페이지를 해석하고 보여주는 일!
  [종류]
    - BrowserRouter : HTML5를 지원하는 브라우저의 주소를 감지한다.
    - HashRouter : 해시 주소(http://goddaehee.tistory.com/#test)를 감지한다.

  라우터 설치 - NextJS에서는 내장되어 있다.
    npm install react-router-dom@6
*/