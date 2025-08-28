import Myform from "./components/Myform";
import './App.css'
import HelloComponents from "./components/HelloComponents";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  let hello: string;
  hello = '뷁';
  console.log(typeof hello);

  const number: number[]= [1,2,3,4,5];
  console.log(number);

  return (
    <>
      <WeatherInfo
      />
    </>
  )
}

export default App
