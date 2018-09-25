import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

const TextFieldGroup = ({
    name, placeholder, value, label, error, info, type, onChange, disabled
                        })=>{
    render(

        <div className='form-group'>
            <iinput type={type}
                    className={''}
                    placeholder={placeholder}
                    name=""
                    value={''}
                    onChange={''}
            >
                Hello
            </iinput>

        </div>
    )
};

export default TextFieldGroup