// Declear and Output student information including lab session day
// Replace the placeholders with your actual information

const studentID = "12382393";
const fullName = "wuwiwiwiw xbdhd";
const professorName =  "Leonard Zajaczkowski";
const labDay = "Wednesday";

// Display the information using document.write with inline CSS
document.write('<div style="position: fixed; bottom: 0; right: 0; font-weight: bold;">');
document.write('<p>' + '<strong>Student ID:</strong>' +  studentID + '  , ' +  '<strong>Full Name:</strong>'+ fullName + '</p>');
document.write('<p>'+ '<strong>Lab Professor:</strong>' +  professorName + '  , ' +  '<strong>Lab Session Day:</strong>'+ labDay + '</p>');
document.write('</div>');

function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (num1 < num2) {
        _return = 1;
    } else if (num1 === num2) {
        _return = 0;
    } else {
        _return = 2;
    }
     
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}

function part3(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            _return += i;
        
        }
    } else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            _return += i;
        }
    } else {
        _return = (num1 + num2);
    }
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (array_index >= 0 && array_index < array.length) {
        _return = true; // Case 1: Valid index within array bounds
    } else if (array_index === array.length) {
        _return = false; // Case 2: Index equal to array length
    } else {
        _return = false; // Default: Cases 3 and 4 (negative index or index in an empty array)
    }

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    // let sum = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            
            // sum += array[i];
            _return = _return + array[i].toString()
        }
    }
    if (_return.length === 0)
    _return = 0;
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


