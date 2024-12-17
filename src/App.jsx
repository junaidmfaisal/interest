
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [principle, SetPrinciple] = useState(0);
  const [rate, SetRate] = useState(0);
  const [year, SetYear] = useState(0);
  const [interest, SetInterest] = useState(0);

  const [invalidPrinciple, SetInvalidPrinciple] = useState(false);
  const [invalidRate, SetInvalidRate] = useState(false);
  const [invalidYear, SetInvalidYear] = useState(false);

  const validateInputs = (inputTag) => {
    const { name, value } = inputTag;
    console.log(name, typeof value);

    console.log(!!value.match(/^\[0-9]+(\.\[0-9]+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));

    if (name == 'principle') {
      SetPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        SetInvalidPrinciple(false);
      }
      else {
        SetInvalidPrinciple(true);
      }
    } else if (name == 'rate') {
      SetRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        SetInvalidRate(false);
      }
      else {
        SetInvalidRate(true);
      }
    } else if(name == 'year') {
      SetYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        SetInvalidYear(false);
      } else {
        SetInvalidYear(true);
      }
    }

  }

  const handleCalculate =(e) =>{
    e.preventDefault()
    if(principle && rate && year){
      SetInterest(principle*rate*year/100)
    }
    else{
      alert("Not Complete!!")
    }
  }

  const handleReset = () => {
    SetPrinciple(0);
    SetRate(0);
    SetYear(0);
    SetInterest(0);
    SetInvalidPrinciple(false);
    SetInvalidRate(false);
    SetInvalidYear(false);

  }

  return (
    <>

      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light rounded p-5'>
          <h1 className='text-center'>Simple Interest Calculator</h1>
          <p className='text-center'>Calculate your simple interest easily</p>
          <div className='bg-warning p-3 text-light text-center rounded'>
            <h1>₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>

          <form className='mt-5'>

            {/* Principle */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e) => validateInputs(e.target)} id="outlined-basic" label="Principle Amount" variant="outlined" style={{ width: '100%' }} />
            </div>

            {/* InvalidPrinciple */}
            {invalidPrinciple && <div className='mb-3 text-danger fw-border'>
              Invalid Principle Amount!!
            </div>
            }

            {/* Rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e) => validateInputs(e.target)} id="outlined-basic" label="Rate of Interest (%)" variant="outlined" style={{ width: '100%' }} />
            </div>

            {/* InvalidRate */}
            {invalidRate && <div className='mb-3 text-danger fw-border'>
              Invalid Rate !!
            </div>
            }

            {/* Year */}
            <div className='mb-3'>
              <TextField value={year || ""} name='year' onChange={(e) => validateInputs(e.target)} id="outlined-basic" label="Time Period (Yr)" variant="outlined" style={{ width: '100%' }} />
            </div>

            {/* InvalidYear */}
            {invalidYear && <div className='mb-3 text-danger fw-border'>
              Invalid Time Period!!
            </div>
            }

            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{ width: '50%', height: '70px' }}>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '50%', height: '70px' }}>RESET</Button>
            </Stack>

          </form>
        </div>
      </div>

    </>
  )
}

export default App
