
//This is a custom func that used in form validation that checks ...

const isEmpty =(value)=> {

    return(

        value === undefined || value === null || //if the string is not there
        (typeof value === 'object' && Object.keys(value).length === 0) || //if the obj is empty
        (typeof value === 'string' && value.trim().length === 0 ) // if the string has nothing in it
    )
};

module.exports = isEmpty;

