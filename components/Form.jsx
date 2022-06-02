import React, { Component } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {  Grid, TextField , Button, InputAdornment, Typography} from '@mui/material';
import { useState } from 'react'
import SectionHeader from './SectionHeader'




const Form = () => {
  const [show, setShow] = useState(false)
  const [overlay, setOverlay] = useState(false)


  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset
  } = useForm()

 async function onSubmit(values) {
    setShow(true)
    setOverlay(true)
    
    let config = {
      method: 'post',
      url:`/api/contact/`,
      headers: {
        'Content-type':'application/json'
      },
      data:values,

    }
    try {
       const response = await axios(config)
       if(response.status == 200) {
          reset()
       }
      
  
    }catch(err) {
       console.error(err)
    }
  }
  
  const closingOnClick = () => {
    setShow(false)
    setOverlay(false)

}
  

  return (
  <section id="contact" className='pt-[10%] pb-[10%] min-h-[50vh]'>
  <SectionHeader text='Ask A question' />
  <div id='form' className='grid content-center form-item'>
  

    <form  className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction='column' alignItems='center' spacing={3}>
        <Grid item  >
          <TextField
          name="Name"
          {...register('Name')}
          variant="standard"
          sx={{width:"18rem"}}
          label="Name"
          color='secondary'
         
          helperText={errors?.Name && <p>No less than 5 symbols!</p>}
          required
          >

          </TextField>
        </Grid>
        <Grid item>
          <TextField
          name="Email"
          {...register("Email", {
            required: "Req",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
          variant="standard"
          
          sx={{width:"18rem"}}
          helperText={errors?.Email && <p>Invalid E-mail!</p>}
          label="Email"
          color='secondary'
          required
          >

          </TextField>
        </Grid>
        <Grid item>
          <TextField
          name='Telegram Id'
          {...register("Telegram")}
          variant="standard"
          
          sx={{width:"18rem"}}
          label="Telegram"
          color='secondary'
        
          >

          </TextField>
        </Grid>
        <Grid item >
          <TextField
          variant="outlined"
          name="Message"
          {...register("Message")}
          sx={{width:"18rem"}}
          label="Message"
          multiline
          rows={5}
          required
          color='secondary'
          >

          </TextField>
        </Grid>
        {/* <Grid item>
        <FormControlLabel
        label={
            <div className='labelConf'>
                <span>Согласен с </span><Link href="confidential"><a className='linktoCong' target="">условиями</a></Link>  <span>обработки персональных данных</span>
            </div>
        }
        control={<Checkbox  
            color="secondary"
            name="Agreement"
           
            {...register("Agreement", {
              required: "Обязательно для заполнения*"

            }) }
            
            />}
         
 >

        </FormControlLabel>
        <div>{errors.Agreement && <span className='req-form'>{errors.Agreement.message}</span>} </div>
        </Grid> */}
       
      </Grid>
      <div className='btn-cont'>
        <button className=' send__button'> Send a message </button>
        </div>
    
     
     

    </form>
    </div>

   {show &&  <div className='success-mes'>Спасибо за обращение! <br /> Мы скоро с вами свяжемся!</div>}
  {overlay && <div onClick={() => closingOnClick()} className='form-overlay'></div>} 
    </section>
 
  )
}

export default Form