
import './App.css';
import Counter from './components/Counter';
import First from './components/First';
import Second from './components/Second';
// .js .jsx 생략가능

// let은 변하는 변수
// const는 변하지 않는 변수
// 변수는 {}안에 적어야함 {}안에 안적으면 문장으로봄
//{}안에 수식도 가능{100+200}
// 출력은 return문에서 한다

function App() {
  return (
  
    <div> 
      {/*여기에는 주석입니다.*/}
      <h1 className='blue'>안녕! 리엑트</h1>
      <h1 className='green'>저는 김다예 입니다.</h1>
      <hr/>
      <First/>
      <First/>
      <hr/>
      <Second/>
      <hr/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App; // export 해줘야 외부에서 사용 가능
