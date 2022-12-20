import { BrowserRouter, Routes, Router,Route } from "react-router-dom";
import Menus from './components/menus';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from "./components/Navbar";

import {ToastContainer,toast} from 'react-toastify';

import Ori from "./components/ori"


import Length from "./components/length"
import Volume from "./components/volume"
import Area from "./components/area"
import Time from "./components/time"
import Speed from "./components/speed"
import Density from "./components/density"
import Pressure from "./components/pressure"
import Moment from "./components/moment"
import Dheat from "./components/dheat"
import Sheat from "./components/sheat"
import Surface from "./components/surface"




function App() {
  return ( 
    <div className="App" style={{backgroundColor: "#FFFDD0"}}>
      <div style={{backgroundColor: "#000000",padding:"4px"}}>
      <h2 style={{color:"white"}}>UNIT CONVERTER</h2>
      </div>
    <ToastContainer/>
    <Container>
  <Row>
   
    <hr/>
  <Col md={3}><Menus/></Col>
  <Col md={8}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Ori/>}/>
          <Route path="length" element={<Length/>}/>
          <Route path="volume" element={<Volume/>}/>
          <Route path="area" element={<Area/>}/>
          <Route path="time" element={<Time/>}/>
          <Route path="speed" element={<Speed/>}/>
          <Route path="density" element={<Density/>}/>
          <Route path="pressure" element={<Pressure/>}/>
          <Route path="moment" element={<Moment/>}/>
          <Route path="heatdensity" element={<Dheat/>}/>
          <Route path="sheat" element={<Sheat/>}/>
          <Route path="surfacetension" element={<Surface/>}/>
      </Routes>
  </BrowserRouter>  
      
     
    </Col>
   

  </Row>
 </Container>
  </div>
  
  );
}

export default App;

 {/*    <div className="App">
    <Container>
  <Row>
    <Col xs={15}>
    <Col>
    
      <AdditionalContentExample/>
      <Header/>
      <Converter/>
      <br/>
      
      <br/>
      <Footer/>
    </Col>
    </Col>

  </Row>
 </Container>
  </div>

  */}


  
  {  /*
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      
        <Route path="/common" element={<Common/>} />
        <Route path="/engineer" element={<Engineer/>} />
      </Route>
    </Routes>
   </BrowserRouter>
  */}
  
  { /* <Router>
  <Routes>
   <Menus/>
    <Route path="/common" element={<Common/>} />
    <Route path="/engineer" element={<Engineer/>} />
  </Routes>
</Router> 


 <AdditionalContentExample/>
      <Header/>
      <Converter/>
       <br/>
      <Footer/>

*/ }