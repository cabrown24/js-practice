function add7 (num) {

    if(isNaN(num)){
        console.warn("'Add Seven' only takes numbers as input");
    } else {
        return (+num + 7); // plus sign ensures num is always treated as a number
        // even if the user sends a number within string quotes.
    }
}

function multiply(factor1, factor2) {
    if(isNaN(factor1) || isNaN(factor2)) {
        console.warn("'Multiply' only takes two numbers as input.");
    } else {
        return (factor1 * factor2);
    }
    
}

function capitalize(myString) {

    // isa string check.
    if((typeof myString) !== 'string') {
        console.warn("Capitalization requires a string.");
        return;
    }

    myString = myString.trim();

    //length check.
    if(myString.length < 1) {
        console.warn("String to capitalize must be at least a letter long.");
        return;
    }



    //only one letter long. Return capital letter
    else if(myString.length === 1) {
        return myString.toUpperCase();
    }

    //String is at least 2 characters long. 
    //Capitalize first letter, lowercase for rest
    else {
        let firstLetter = myString.charAt(0).toUpperCase();
        let theRest = myString.substring(1).toLowerCase();

        //reconnect aka concatenate
        return firstLetter + theRest;
    }
    
}

function lastLetter(myString) {

    if((typeof myString) !== 'string') {
        console.warn("Extraction requires a string.");
        return;
    }

    myString = myString.trim();

    if(myString.length < 1) {
        console.warn("Extraction requires a string of at least one letter long.");
    }

    else if(myString.length === 1) {
        return myString;
    }

    //String is at least 2 characters long
    else {
        return myString.charAt(myString.length - 1);
    }
}
