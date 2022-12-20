import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';


const Speed=()=>{
    const[fromUnit,setFromUnit]=useState('Meter/Second ')
    const[toUnit,setToUnit]=useState('Kilometer/Hour')
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
            setFromUnit('Meter/Second ')
            setToUnit('Kilometer/Hour')
        }
        else if(value=='2'){
            setFromUnit('Mile/Hour ')
            setToUnit('Meter/Hour')
        }
        else if(value=='3'){
            setFromUnit('Kilometer/Minute')
            setToUnit('Centimeter/Hour')
        }
        else if(value=='4'){
            setFromUnit('Foot/Hour')
            setToUnit('Yard/Minute')
        }
        else if(value=='5'){
            setFromUnit('Meter/Minute')
            setToUnit('Centimeter/Second')
        }
      
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*3.6)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*1609.344)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*6000000)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*0.0055555556))
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*1.6666666667))
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
            setvalue(parseFloat(event.target.value)/3.6)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/1609.344)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/6000000)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/0.0055555556)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/1.6666666667)
        }
    
        }
    }

   return(
    <div style={{backgroundColor: "#fada5e",padding:"20px" }} >
    <div style={{backgroundColor: "#fdfd96",padding:"20px" }} >
        <br/>
        <h4>SPEED UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Meter/Second - Kilometer/Hour</option>
                <option value="2">Mile/Hour - Meter/Hour</option>
                <option value="3">Kilometer/Minute - Centimeter/Hour</option>
                <option value="4">Foot/Hour - Yard/Minute</option>
                <option value="5">Meter/Minute - Centimeter/Second</option>
               
               
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
    <ul style={{listStyleType:"none",fontSize: "large"}}>
        <li>1 Meter/Second = 3.6 Kilometer/Hour</li>
        <li>1 Mile/Hour = 1609.344 Meter/Hour</li>
        <li>1 Kilometer/Minute = 6000000 Centimeter/Hour</li>
        <li>1 Foot/Hour = 0.0055555556 Yard/Minute</li>
        <li>1 Meter/Minute = 1.6666666667 Centimeter/Second</li>
       
    </ul>
    <hr />
 
  </div>
  
  </div>
   );
}

export default Speed;

