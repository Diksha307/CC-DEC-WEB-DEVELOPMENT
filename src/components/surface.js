import {Form} from 'react-bootstrap';
import {useState} from 'react';

const Surface=()=>{
    const[fromUnit,setFromUnit]=useState('Newton/Meter')
    const[toUnit,setToUnit]=useState('Gram-Force/Centimeter')
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
            setFromUnit('Newton/Meter')
            setToUnit('Gram-Force/Centimeter')
        }
        else if(value=='2'){
            setFromUnit('Gram-Force/Centimeter/C')
            setToUnit('Dyne/Centimeter')
        }
        else if(value=='3'){
            setFromUnit('Erg/Square Centimeter')
            setToUnit('Poundal/Inch')
        }
       
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*1.019716213)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*980.66499998)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*0.0001837186)
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
            setvalue(parseFloat(event.target.value)/1.019716213)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/980.66499998)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/0.0001837186)
        }
      
        }
    }

   return(
    <div style={{backgroundColor: "#13274F",padding:"20px" }}>
    <div style={{backgroundColor: "#00BFFF",padding:"20px" }}>
        <br/>
        <h4>Surface Tension UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Newton/Meter -  Gram-Force/Centimeter/C</option>
                <option value="2">Gram-Force/Centimeter/C  -  Dyne/Centimeter</option>
                <option value="3">Erg/Square Centimeter  -  Poundal/Inch</option>
               
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
    <ul style={{listStyleType:"none",color:"white",fontSize: "large"}}>
        <li>1 Newton/Meter = 1.019716213 Gram-Force/Centimeter</li>
        <li>1 Gram-Force/Centimeter/C = 980.66499998 Dyne/Centimeter</li>
        <li>1  Erg/Square Centimeter = 0.0001837186 Poundal/Inch</li>

    </ul>
    <hr />
 
  </div>
  </div>
   );
}

export default Surface;

