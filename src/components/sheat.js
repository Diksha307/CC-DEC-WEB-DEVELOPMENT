import {Form} from 'react-bootstrap';
import {useState} from 'react';

const Sheat=()=>{
    const[fromUnit,setFromUnit]=useState('Joule/Kilogram/K')
    const[toUnit,setToUnit]=useState('Kilojoule/Kilogram/C')
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
            setFromUnit('Joule/Kilogram/K')
            setToUnit('Kilojoule/Kilogram/C')
        }
        else if(value=='2'){
            setFromUnit('Calorie/Gram/C')
            setToUnit('Kilojoule/Kilogram/K')
        }
        else if(value=='3'){
            setFromUnit('Pound-Force Foot/Pound/R')
            setToUnit('Btu(IT)/Pound/F')
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
            setresult(parseFloat(event.target.value)*4.1868)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*0.0012850675)
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
            setvalue(parseFloat(event.target.value)/4.1868)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/0.0012850675)
        }
      
        }
    }

   return(
    <div style={{backgroundColor: "#18453B",padding:"20px" }}>
    <div style={{backgroundColor: "#90EE90",padding:"20px" }}>
        <br/>
        <h4>Specific Heat Capacity UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Joule/Kilogram/K -Kilojoule/Kilogram/C</option>
                <option value="2">Calorie/Gram/C - Kilojoule/Kilogram/K</option>
                <option value="3">Pound-Force Foot/Pound/R - Btu(IT)/Pound/F</option>
               
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
        <li>1 JJoule/Kilogram/K = 0.001 Kilojoule/Kilogram/C</li>
        <li>1 Calorie/Gram/C = 4.1868  Kilojoule/Kilogram/K</li>
        <li>1  Pound-Force Foot/Pound/R = 0.0012850675 Btu(IT)/Pound/F</li>

    </ul>
    <hr />
 
  </div>

  </div>
   );
}

export default Sheat;

