import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';


const Time=()=>{
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
            setFromUnit('Seconds')
            setToUnit('Millisecond')
        }
        else if(value=='2'){
            setFromUnit('Seconds')
            setToUnit('Minutes')
        }
        else if(value=='3'){
            setFromUnit('Minutes')
            setToUnit('Hour')
        }
        else if(value=='4'){
            setFromUnit('Hour')
            setToUnit('Day')
        }
        else if(value=='5'){
            setFromUnit('Day')
            setToUnit('Week')
        }
        else if(value=='6'){
            setFromUnit('Week')
            setToUnit('Month')
        }
        else if(value=='7'){
            setFromUnit('Month')
            setToUnit('Year')
        }
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*1000)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*0.0166667)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*0.0166667)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*0.0416667))
        }
        else if(currentConversion=='5'){
            setresult((parseFloat(event.target.value)*0.142857))
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*0.230137)
        }
        else if(currentConversion=='7'){
            setresult(parseFloat(event.target.value)*0.0833334)
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
            setvalue(parseFloat(event.target.value)/1000)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/0.0166667)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/0.0166667)
        }
        else if(currentConversion=='4'){
            setvalue(parseFloat(event.target.value)/0.0416667)
        }
        else if(currentConversion=='5'){
            setvalue(parseFloat(event.target.value)/0.142857)
        }
        else if(currentConversion=='6'){
            setvalue(parseFloat(event.target.value)/0.230137)
        }
        else if(currentConversion=='7'){
            setvalue(parseFloat(event.target.value)/0.0833334)
        }
        }
    }

   return(
    <div style={{backgroundColor: "#8B8000",padding:"20px" }} >
    <div style={{backgroundColor: "#C2B280",padding:"20px" }}>
        <br/>
        <h4>TIME UNIT CONVERTER</h4>
        <br/>
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">Seconds-Millisecond</option>
                <option value="2">Seconds-Minute</option>
                <option value="3">Minute-Hour</option>
                <option value="4">Hour-Day</option>
                <option value="5">Day-Week</option>
                <option value="6">Week-Month</option>
                <option value="7">Month-Year</option>
               
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
        <li>1 Seconds = 1000 Millisecond</li>
        <li>1 Seconds = 0.0166667 Minute</li>
        <li>1 Minute = 0.0166667 Hour</li>
        <li>1 Hour = 0.0416667 Day</li>
        <li>1 Day = 0.142857 Week</li>
        <li>1 Week = 0.230137 Month</li>
        <li>1 Month = 0.0833334 Year</li>
    </ul>
    <hr />
 
  </div>
  </div>
   );
}

export default Time;

