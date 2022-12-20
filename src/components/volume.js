import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';


const Volume=()=>{
    const[fromUnit,setFromUnit]=useState('Cubic Meter')
    const[toUnit,setToUnit]=useState('Cubic Kilometer')
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
            setFromUnit('Cubic Meter')
            setToUnit('Cubic Kilometer')
        }
        else if(value=='2'){
            setFromUnit('Liter')
            setToUnit('Milliliter')
        }
        else if(value=='3'){
            setFromUnit('Gallon')
            setToUnit('Quart')
        }
        else if(value=='4'){
            setFromUnit('Gigaliter')
            setToUnit('Megaliter')
        }
        else if(value=='5'){
            setFromUnit('Tablespoon')
            setToUnit('Teaspoon')
        }
        else if(value=='6'){
            setFromUnit('Cubic Mile')
            setToUnit('Cubic Yard')
        }
        else if(value=='7'){
            setFromUnit('Cubic Inch')
            setToUnit('Cubic Foot')
        }
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*0.000001)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*1000)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*4)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*1000))
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*3))
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*5452000000)
        }
        else if(currentConversion=='7'){
            setresult(parseFloat(event.target.value)*0.000578704)
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
            setvalue(parseFloat(event.target.value)/0.000001)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/1000)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/4)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/1000)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/3)
        }
        else if(currentConversion=='6'){
            setvalue(parseFloat(event.target.value)/5452000000)
        }
        else if(currentConversion=='7'){
            setvalue(parseFloat(event.target.value)/0.000578704)
        }
        }
    }

   return(
    <div style={{backgroundColor: "#C4B454",padding:"20px" }}>
    <div style={{backgroundColor: "#EADDCA",padding:"20px" }}>
        <br/>
        <h4>VOLUME UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Cubic Meter-Cubic Kilometer</option>
                <option value="2">Liter-Milliliter</option>
                <option value="3">Gallon-Quart</option>
                <option value="4">Gigaliter-Megaliter</option>
                <option value="5">Tablespoon -Teaspoon</option>
                <option value="6">Cubic Mile-Cubic Yard</option>
                <option value="7">Cubic Inch-Cubic Foot</option>
               
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
        <li>1 Cubic Meter = 0.000001  CubicKilometer</li>
        <li>1 Liter = 1000 Milliliter</li>
        <li>1 Gallon = 4 Quart</li>
        <li>1 Gigaliter = 1000 Megaliter</li>
        <li>1 Tablespoon = 3 Teaspoon</li>
        <li>1 Cubic Mile = 5452000000 Cubic Yard</li>
        <li>1 Cubic Inch = 0.000578704 Cubic Foot</li>
    </ul>
    <hr />
  </div>
  </div>
   );
}

export default Volume;

