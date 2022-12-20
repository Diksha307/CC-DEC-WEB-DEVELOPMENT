import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';

const Length=()=>{
    const[fromUnit,setFromUnit]=useState('Meter')
    const[toUnit,setToUnit]=useState('Kilometer')
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
            setFromUnit('Meter')
            setToUnit('Kilometer')
        }
        else if(value=='2'){
            setFromUnit('Decimeter')
            setToUnit('Centimeter')
        }
        else if(value=='3'){
            setFromUnit('Micrometer')
            setToUnit('Millimeter')
        }
        else if(value=='4'){
            setFromUnit('Yard')
            setToUnit('Foot')
        }
        else if(value=='5'){
            setFromUnit('Foot')
            setToUnit('Inch')
        }
        else if(value=='6'){
            setFromUnit('Yard')
            setToUnit('Inch')
        }
        else if(value=='7'){
            setFromUnit('Meter')
            setToUnit('Centimeter')
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
            setresult(parseFloat(event.target.value)*10)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*0.001)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*3))
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*12))
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*36)
        }
        else if(currentConversion=='7'){
            setresult(parseFloat(event.target.value)*100)
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
            setvalue(parseFloat(event.target.value)/10)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/0.001)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/3)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/12)
        }
        else if(currentConversion=='6'){
            setvalue(parseFloat(event.target.value)/36)
        }
        else if(currentConversion=='7'){
            setvalue(parseFloat(event.target.value)/100)
        }
        }
    }

   return(
    <div style={{backgroundColor: "#FFC000",padding:"20px" }} >
    <div style={{backgroundColor: "#FFFF66",padding:"20px" }}>
        <br/>
        <h4>LENGTH UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Meter-Kilometer</option>
                <option value="2">Decimeter-Centimeter</option>
                <option value="3">Micrometer-Millimeter</option>
                <option value="4">Yard-Foot</option>
                <option value="5">Foot -Inch</option>
                <option value="6">Yard-Inch</option>
                <option value="7">Meter-Centimeter</option>
               
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
  <br/>
  <hr />
  <div>
    <ul style={{listStyleType:"none",fontSize: "large"}}>
        <li>1 Meter = 0.001 Kilometer</li>
        <li>1 Decimeter = 10 Centimeter</li>
        <li>1 Micrometer = 0.001 Millimeter</li>
        <li>1 Yard = 3 Foot</li>
        <li>1 Foot = 12 Inch</li>
        <li>1 Yard = 36 Inch</li>
        <li>1 Meter = 100 Kilometer</li>
    </ul>
    <hr />
  </div>
  </div>
   );
}

export default Length;

