import React from 'react';
import {FormWrapper,FormRow, FormTextArea} from '../../assets/js/styled-components/mainContainerStyle'

const ContactForm = ()=>{
    return(
        <FormWrapper>
            <div className='row form-row'>
                <div className='form-input-box col-sm-12 col-md-6 col-lg-6 mt-2'>
                    <input className='form-input' placeholder='First Name:'/>
                </div>
                <div className='form-input-box col-sm-12 col-md-6 col-lg-6   mt-2'>
                    <input className='form-input' placeholder='Last Name:'/>
                </div>
                <div className='form-input-box col-sm-12 col-md-6 col-lg-6'>
                    <input className='form-input' placeholder='Phone:'/>
                </div>
                <div className='form-input-box col-sm-12 col-md-6 col-lg-6 '>
                    <input className='form-input' placeholder='Email:'/>
                </div>
            </div>

            <div className='row form-row'>
                <FormTextArea/>
            </div>

            <div className='row form-button-box'>
                <button className='form-button'>SUBMIT</button>
            </div>
        </FormWrapper>


    )
}

export default ContactForm