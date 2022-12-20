import Header from './header';
import Converter from './converter';
import AdditionalContentExample from './additional';
import Footer from './footer';
import {Container,Row,Col} from 'react-bootstrap';
import Info from "./card"

const mystyle = {
   backgroundColor: "#FAE500",
   padding: "20px",
   margin:"20px"
 };

const Ori=()=>{
    return(
   <div style={{background:"#333300",padding:"2px" }}>
  <div className="App" style={mystyle}>
     <Container>
        <Row>
           <Col xs={15}>
              <Col>
                  <br />
                  <Header/>
                  <br />
                  <Converter/>
                  <br />
                  
                  <br />
                  <Footer/>
                  <br />
              </Col>
           </Col>
         </Row>
      </Container>
  </div>
  </div>
    );
}

export default Ori;