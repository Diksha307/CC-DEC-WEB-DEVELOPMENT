import {Form} from 'react-bootstrap';
import {useState} from 'react';

const Dheat=()=>{
    const[fromUnit,setFromUnit]=useState('Joule/Square Meter')
    const[toUnit,setToUnit]=useState('Calorie/Square Centimeter')
    const[value,setvalue]=useState('')
    const[result,setresult]=useState('')
    const[currentConversion,setCurrentConversion]=useState('1')

    const onSelectChange=(event)=>{
        const value=event.target.value;
        console.log('event',event.target.value)
        setCurrentConversion(event.target.value)
        setvalue('')
        setresult('')
        if(event.target.value=='1'){
            setFromUnit('Joule/Square Meter')
            setToUnit('Calorie/Square Centimeter')
        }
        else if(value=='2'){
            setFromUnit('Langley')
            setToUnit('Btu(IT)/Square Foot')
        }
        else if(value=='3'){
            setFromUnit('Joule/Square Meter')
            setToUnit('Btu(IT)/Square Foot')
        }
       
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*0.0000239006)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*3.6842250426)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*0.0000880551)
        }
       
    }
    }

    const onResultChange=(event)=>{
        setresult(event.target.value)
        if(event.target.value==''){
            setvalue('')
        }
        else{
        if(currentConversion=='1'){
            setvalue(parseFloat(event.target.value)/0.0000239006)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/3.6842250426)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/0.0000880551)
        }
      
        }
    }

   return(
    <div style={{backgroundColor: "#004953",padding:"20px" }} >
    <div  style={{backgroundColor: "#20B2AA",padding:"20px" }}>
        <br/>
        <h4>HEAT DENSITY UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Joule/Square Meter-Calorie/Square Centimeter</option>
                <option value="2">Langley-Btu(IT)/Square Foot</option>
                <option value="3">Joule/Square Meter-Calorie-Btu(IT)/Square Foot</option>
               
            </Form.Select>
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{fromUnit}</Form.Label>
      <Form.Control type="text" placeholder="Enter value" value={value} onChange={onValueChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>{toUnit}</Form.Label>
      <Form.Control type="text" placeholder="Result"  value={result} onChange={onResultChange}/>
    </Form.Group>

    
  </Form>
  <br/>
  </div>
  
  <hr />
  <div>
    <ul style={{listStyleType:"none",fontSize: "large",color:"white"}}>
        <li>1 Joule/Square Meter = 0.0000239006 Calorie/Square Centimeter</li>
        <li>1 Langley = 3.6842250426  Btu(IT)/Square Foot</li>
        <li>1   Joule/Square Meter = 0.0000880551 Btu(IT)/Square Foot</li>

    </ul>
    <hr />
 
  </div>
  </div>
   );
}

export default Dheat;

