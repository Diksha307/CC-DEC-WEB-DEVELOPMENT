import {Form} from 'react-bootstrap';
import {useState} from 'react';

const Moment=()=>{
    const[fromUnit,setFromUnit]=useState('Newton Meter')
    const[toUnit,setToUnit]=useState('Kilonewton Meter')
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
            setFromUnit('Newton Meter')
            setToUnit('Kilonewton Meter')
        }
        else if(value=='2'){
            setFromUnit('Newton Meter')
            setToUnit('Millionewton Meter')
        }
        else if(value=='3'){
            setFromUnit('Kilonewton Meter')
            setToUnit('Ton-Force')
        }
        else if(value=='4'){
            setFromUnit('Pound-Force Foot')
            setToUnit('Poundal Foot')
        }
        else if(value=='5'){
            setFromUnit('Gram-Force Centimeter')
            setToUnit('Poundal Inch')
        }
        else if(value=='6'){
            setFromUnit('Kilogram-Force Meter')
            setToUnit('Poundal Foot')
        }
       
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*0.001)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*1000)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*0.1124045124)
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*0.0279258474))
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*32.17410495))
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*232.7153946)
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
            setvalue(parseFloat(event.target.value)/0.001)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/1000)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/0.1124045124)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/0.0279258474)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/32.17410495)
        }
        else if(currentConversion=='6'){
            setvalue(parseFloat(event.target.value)/232.7153946)
        }
      
        }
    }

   return(
    <div style={{backgroundColor: "#00693E",padding:"20px" }} >
    <div style={{backgroundColor: "#8FBC8B",padding:"20px" }}>
        <br/>
        <h4>MOMENT OF FORCE UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Newton Meter-Kilonewton Meter</option>
                <option value="2">Newton Meter-Millionewton Meter</option>
                <option value="3">Kilonewton Meter-Ton-Force</option>
                <option value="4">Pound-Force Foot-Poundal Foot</option>
                <option value="5">Gram-Force Centimeter -Poundal Inch</option>
                <option value="6">Kilogram-Force Meter -Poundal Foot</option>
               
               
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
        <li>1 Newton Meter = 0.001 Kilonewton Meter</li>
        <li>1 Newton Meter = 1000 Millionewton Meter</li>
        <li>1  Kilonewton Meter = 0.1124045124 Ton-Force</li>
        <li>1 Pound-Force Foot = 32.17410495 Poundal Foot </li>
        <li>1 Gram-Force Centimeter = 0.0279258474 Poundal Inch</li>
        <li>1 Kilogram-Force Meter = 232.7153946  Poundal Foot</li>   
    </ul>
    <hr />
 
  </div>

  </div>
   );
}

export default Moment;

