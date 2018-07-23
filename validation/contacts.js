const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactsInput(data) {

    let errors={};

    //----- -----   FORMATS empty obj values from form submit into empty strings   -----   -----

    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';

        //THEN empty string passes through 'if(Validator.isEmpty(data.firstName))'


    //----- -----   First Name Validation   -----   -----

        //Too Short or long
    if(!Validator.isLength(data.firstName, {min: 2, max: 30})){
        errors.firstName = 'First name must be bewteen 2 and 30 characters.'
    }

        //submitted form field for first name is empty
    if(Validator.isEmpty(data.firstName)){
        errors.firstName = 'First name field is required.';
    }


    //----- -----   Last Name Validation   -----   -----

        //Too Short or long
    if(!Validator.isLength(data.lastName, {min: 2, max: 30})){
        errors.lastName = 'Last name must be bewteen 2 and 30 characters.'
    }

        //submitted form field for last name is empty
    if(Validator.isEmpty(data.lastName)){
        errors.lastName = 'Last name field is required.';
    }

    //----- -----   Email Validation   -----   -----

        //not in email format
    if(!Validator.isEmail(data.email)){
        errors.email = 'E-mail address is invalid. '
    }

        //submitted form field for email is empty
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required.';
    }

    //----- -----   Phone Number Validation   -----   -----

    //TODO : see docs for phone number format similar to isEmail from the lines above

        //submitted form field for phone is empty
    if(Validator.isEmpty(data.phone)){
        errors.phone = 'A contact phone number is required.';
    }

    return({
        errors,
        isValid: isEmpty(errors)
    })
};