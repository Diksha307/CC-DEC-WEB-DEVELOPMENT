import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';

const Converter=()=>{
    const[fromUnit,setFromUnit]=useState('KG')
    const[toUnit,setToUnit]=useState('LBS')
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
            setFromUnit('KG')
            setToUnit('LBS')
        }
        else if(value=='2'){
            setFromUnit('KM')
            setToUnit('METER')
        }
        else if(value=='3'){
            setFromUnit('DOLLAR')
            setToUnit('RUPEES')
        }
        else if(value=='4'){
            setFromUnit('CELCIU')
            setToUnit('FAHRENHEIT')
        }
        else if(value=='5'){
            setFromUnit('FEET')
            setToUnit('METERS')
        }
        else if(value=='6'){
            setFromUnit('INCHES')
            setToUnit('CENTIMETER')
        }
        else if(value=='7'){
            setFromUnit('POUNDS')
            setToUnit('KILOGRAM')
        }
    }

    const onValueChange=(event)=>{
        setvalue(event.target.value)
        if(event.target.value==''){
            setresult('')
        }
        else{
        if(currentConversion=='1'){
            setresult(parseFloat(event.target.value)*2.20462)
        }
        else if(currentConversion=='2'){
            setresult(parseFloat(event.target.value)*1000)
        }
        else if(currentConversion=='3'){
            setresult(parseFloat(event.target.value)*76.54)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat(event.target.value)*(9/5))+32)
        }
        else if(currentConversion=='5'){
            setresult(parseFloat(event.target.value)/3.281)
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)*2.54)
        }
        else if(currentConversion=='7'){
            setresult(parseFloat(event.target.value)/2.2046)
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
            setvalue(parseFloat(event.target.value)/2.20462)
        }
        else if(currentConversion=='2'){
            setvalue(parseFloat(event.target.value)/1000)
        }
        else if(currentConversion=='3'){
            setvalue(parseFloat(event.target.value)/76.54)
        }
        else if(currentConversion=='4'){
            setresult((parseFloat((event.target.value)-32)*(5/9)))
        }
        else if(currentConversion=='5'){
            setresult(parseFloat(event.target.value)*3.281)
        }
        else if(currentConversion=='6'){
            setresult(parseFloat(event.target.value)/2.54)
        }
        else if(currentConversion=='7'){
            setresult(parseFloat(event.target.value)*2.2046)
        }
        }
    }




   return(
    <Form>
        <Form.Group className='mb-3' controlId='conversion'>
            <Form.Label>Select Your Conversion</Form.Label>
            
            <Form.Select aria-label="Default select example"  onChange={onSelectChange}>
                <option value="1">KG-LBS</option>
                <option value="2">KM-METER</option>
                <option value="3">DOLLARS-RUPEES</option>
                <option value="4">CELCIUS-FAHRENHEIT</option>
                <option value="5">FEET -METERS</option>
                <option value="6">INCHES-CENTIMETER</option>
                <option value="7">POUNDS-KILOGRAM</option>
                <option value=""></option>
                <option value=""></option>
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
   );
}

export default Converter;