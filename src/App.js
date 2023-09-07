
import './App.css';
import MainHeading from '../src/component/Heading';
import List from '../src/component/List';
import {Logo,Logo2,Logo3} from '../src/component/Logo';
// import  from '../src/component/Button'
import  { MyPara,MyPara2} from '../src/component/Para';
import { Btn2, MyButton,Btn3 } from '../src/component/Button';
import MainImg from './component/MainImg';

function App() {
  return (
  
      <>
      <div className='navbar'>
      <Logo/>
      <List/>
      <MyButton/>
      </div>
    <div className='main'>
      <MainImg/>
     <MainHeading/>
     <MyPara/>
    <Btn2 />
    <Btn3 />
    <MyPara2/>
    <div><Logo2/> <Logo3/></div>
     </div>
     
     
      </>
      
   
  );
}

export default App;
