
import './App.css';
import Navigation from '../src/Navbar';
import Pic from './Grid';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.webp'
import img6 from './img6.jpg'
import Counter from './Counter';
import Counter1 from './counter1';
import Form from './Form';
import Reg from './Regform';


function App() {


  let person=[
    {
      image:img1,
      named:'Adam Jonson',
      field:'Developer',
      class:'bg-black text-white'
    },
    {
      image:img2,
      named:'Nicole Scavo',
      field:'Manager' ,
    },
    {
      image:img3,
      named:'Marco Larson',
      field:'Manager' ,
    },
    {
      image:img4,
      named:'Linda Larson',
      field:'Designer' ,
    },
    {
      image:img5,
      named:'Mary Hudson',
      field:'Developer' ,
    },
    {
      image:img6,
      named:'Adam Jonson',
      field:'Developer' ,
      class:'bg-black text-white'
    }
  ]
  return (
  <>
  
  {/* <Counter/>
  <Counter1/> */}
  {/* <Form/> */}
  <Reg/>
  </>
  );
}

export default App;
