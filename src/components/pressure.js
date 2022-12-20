import {Form} from 'react-bootstrap';
import {useState} from 'react';

const Pressure=()=>{
    const[fromUnit,setFromUnit]=useState('Pascal')
    const[toUnit,setToUnit]=useState('Kilopascal')
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
            setFromUnit('Pascal')
            setToUnit('Kilopascal')
        }
        else if(value=='2'){
            setFromUnit('Pascal')
            setToUnit('Bar')
        }
        else if(value=='3'){
            setFromUnit('Standard Atmosphere')
            setToUnit('Bar')
        }
        else if(value=='4'){
            setFromUnit('Terapascal')
            setToUnit('Standard Atmosphere')
        }
        else if(value=='5'){
            setFromUnit('Exapascal')
            setToUnit('Psi')
        }
        else if(value=='6'){
            setFromUnit('Gigapascal')
            setToUnit('Ksi')
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
            setresult(parseFloat(event.target.value)*0.00001)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*1.01325)
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*145037737730000))
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*9869232.6672))
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*145.03773773)
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
            setvalue(parseFloat(event.target.value)/0.00001)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/1.01325)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/145037737730000)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/9869232.6672)
        }
        else if(currentConversion=='6'){
            setvalue(parseFloat(event.target.value)/145.03773773)
        }
      
        }
    }

   return(
    <div  style={{backgroundColor: "#1CAC78",padding:"20px" }} >
    <div  style={{backgroundColor: "#7FFF00",padding:"20px" }}>
        <br/>
        <h4>PRESSURE UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Pascal-Kilopascal</option>
                <option value="2">Pascal-Bar</option>
                <option value="3">Standard atmosphere-Bar</option>
                <option value="4">Terapascal-Standard atmosphere</option>
                <option value="5">Exapascal -Psi</option>
                <option value="6">Gigapascal -Ksi</option>
               
               
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
        <li>1 Pascal = 0.001 Kilopascal</li>
        <li>1 Pascal = 0.00001 Bar</li>
        <li>1 Standard atmosphere = 1.01325 Bar</li>
        <li>1 Terapascal = 9869232.6672 Standard atmosphere</li>
        <li>1 Exapascal = 145037737730000 Psi</li>
        <li>1 Gigapascal =145.03773773  Ksi</li>
       
    </ul>
    <hr />
 
  </div>

  </div>
   );
}

export default Pressure;

