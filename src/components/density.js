import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';


const Density=()=>{
    const[fromUnit,setFromUnit]=useState('Meter/Second')
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
            setFromUnit('Kilogram/CubicMeter ')
            setToUnit('Gram/Cubic Centimeter')
        }
        else if(value=='2'){
            setFromUnit('Gram/Cubic Meter ')
            setToUnit('Milligram/Cubic Centimeter')
        }
        else if(value=='3'){
            setFromUnit('Kilogram/Liter')
            setToUnit('Hectogram/Liter')
        }
        else if(value=='4'){
            setFromUnit('Pound/Cubic Inch')
            setToUnit('Pound/Gallon')
        }
        else if(value=='5'){
            setFromUnit('Ounce/Gallon')
            setToUnit('Grain/Gallon')
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
            setresult(parseFloat(event.target.value)*0.001)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*10)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*231))
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*525.41559241))
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
            setvalue(parseFloat(event.target.value)/0.001)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/10)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/231)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/525.41559241)
        }
    
        }
    }

   return(
    <div style={{backgroundColor: "#1B4D3E",padding:"20px" }}>
    <div style={{backgroundColor: "#4FFFB0",padding:"20px" }}>
        <br/>
        <h4>DENSITY UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Kilogram/CubicMeter - Gram/Cubic Centimeter</option>
                <option value="2">Gram/Cubic Meter - Milligram/Cubic Centimeter</option>
                <option value="3">Kilogram/Liter - Hectogram/Liter</option>
                <option value="4">Pound/Cubic Inch - Pound/Gallon</option>
                <option value="5">Ounce/Gallon - Grain/Gallon</option>
               
               
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
        <li>1 Kilogram/CubicMeter = 0.001 Gram/Cubic Centimeter</li>
        <li>1 Gram/Cubic Meter = 0.001 Milligram/Cubic Centimeter</li>
        <li>1 Kilogram/Liter = 10 Hectogram/Liter</li>
        <li>1 Pound/Cubic Inch = 231 Pound/Gallon</li>
        <li>1 Ounce/Gallon = 525.41559241 Grain/Gallon</li>
       
    </ul>
    <hr />
 
  </div>
  </div>
   );
}

export default Density;

