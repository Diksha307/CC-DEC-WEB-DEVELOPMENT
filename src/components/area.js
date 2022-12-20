import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';

const Area=()=>{
    const[fromUnit,setFromUnit]=useState('Square Meter')
    const[toUnit,setToUnit]=useState(' Square Kilometer')
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
            setFromUnit('Square Meter')
            setToUnit('Square Kilometer')
        }
        else if(value=='2'){
            setFromUnit('Square Meter')
            setToUnit('Square Centimeter')
        }
        else if(value=='3'){
            setFromUnit('Hectare')
            setToUnit('Acre')
        }
        else if(value=='4'){
            setFromUnit('Square Mile')
            setToUnit('Square Yard')
        }
        else if(value=='5'){
            setFromUnit('Square Foot')
            setToUnit('Square Inch')
        }
        else if(value=='6'){
            setFromUnit('Square Hectometer')
            setToUnit('Square Dekameter')
        }
        else if(value=='7'){
            setFromUnit('Square Decimeter')
            setToUnit('Square Kilometer')
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
            setresult(parseFloat(event.target.value)*10000)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*2.47105)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*3098000))
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*144))
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*100)
        }
        else if(currentConversion=='7'){
            setresult(parseFloat(event.target.value)*0.00000001)
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
            setvalue(parseFloat(event.target.value)/10000)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/2.47105)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/3098000)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/144)
        }
        else if(currentConversion=='6'){
            setvalue(parseFloat(event.target.value)/100)
        }
        else if(currentConversion=='7'){
            setvalue(parseFloat(event.target.value)/0.00000001)
        }
        }
    }

   return(
    <div style={{backgroundColor: "#93C572",padding:"20px" }} >
    <div style={{backgroundColor: "#ECFFDC",padding:"20px" }}>
        <br/>
        <h4>AREA UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Square Meter-Square Kilometer</option>
                <option value="2">Square Meter-Square Centimeter</option>
                <option value="3">Hectare-Acre</option>
                <option value="4">Square Mile-Square Yard</option>
                <option value="5">Square Foot-Square Inch</option>
                <option value="6">Square Hectometer-Square Dekameter</option>
                <option value="7">Square Decimeter-Square Kilometer</option>
               
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
        <li>1 Square Meter = 0.000001  Square Kilometer</li>
        <li>1 Square Meter = 10000 Square Centimeter</li>
        <li>1 Hectare = 2.47105 Acre</li>
        <li>1 Square Mile = 3098000 Square Yard</li>
        <li>1 Square Foot = 144 Square Inch</li>
        <li>1 Square Hectometer = 100 Square Dekameter</li>
        <li>1 Square Decimeter = 1e-8 Square Kilometer</li>
    </ul>
    <hr />
  </div>
  </div>
   );
}

export default Area;

