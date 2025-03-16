document.write("<h1> Osilama Kadiri | 101521804</h1>" + 
"<p> Copyright <span style='color:blue;'> 2023</span></p>");

let a=[1,4,3,5,8,9,0,8,5,6,8,1,2];
a[0]=8;
a[13]=10;
let totalIndex= a.length;
let userInput = prompt("enter a number to find: ");
let flag;
for(let i=0; i < totalIndex; i++){
    if(a[i] == userInput){
        document.write(`Array index ${i} contains ${a[i]} <br>`);
    }
    else if(flag == 0){
        document.write('Value not found in array.<br>');
        flag=1;
    }
}
let arrayIndex=prompt('What array index do you want to look at?');
if(arrayIndex < totalIndex){
    document.write(`I choose Array index ${arrayIndex} which contains ${a[arrayIndex]} <br>`)
}
else{
    document.write('Index not in range');
}