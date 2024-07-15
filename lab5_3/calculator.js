let n0 = document.getElementById('n0');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let n9 = document.getElementById('n9');
let np = document.getElementById('np');
let nn = document.getElementById('nn');
let nm = document.getElementById('nm');
let nd = document.getElementById('nd');
let ne = document.getElementById('ne');
let b = document.getElementById('ndel');
let c = document.getElementById('c');
let dot = document.getElementById('dot');
let textbox = document.getElementById('textbox');
let arraytext = [];
let number = "";
let resuleArray = [];
let number1 = 0;
let number2 = 0;
let first = true;
const seearray = ()=>{
    console.log(arraytext);
};
const updateTextBox = ()=>{
    let textTemp = arraytext.toString();
    let textnew = textTemp.replaceAll(",", "");
    textbox.value = textnew;
};
const test = (operator)=>{
    let string = arraytext.toString();
    let stringCut = string.replaceAll(",", "");
    resuleArray.push(stringCut);
    resuleArray.push(operator);
    arraytext = [];
    console.log(resuleArray);
    return resuleArray;
}
n0.addEventListener("click", (e) =>{
    arraytext.push(n0.value);
    seearray();
    updateTextBox();
});
n1.addEventListener("click", (e) =>{
    arraytext.push(n1.value);
    seearray();
    updateTextBox();
});
n2.addEventListener("click", (e) =>{
    arraytext.push(n2.value);
    seearray();
    updateTextBox();
});
n3.addEventListener("click", (e) =>{
    arraytext.push(n3.value);
    seearray();
    updateTextBox();
});
n4.addEventListener("click", (e) =>{
    arraytext.push(n4.value);
    seearray();
    updateTextBox();
});
n5.addEventListener("click", (e) =>{
    arraytext.push(n5.value);
    seearray();
    updateTextBox();
});
n6.addEventListener("click", (e) =>{
    arraytext.push(n6.value);
    seearray();
    updateTextBox();
});
n7.addEventListener("click", (e) =>{
    arraytext.push(n7.value);
    seearray();
    updateTextBox();
});
n8.addEventListener("click", (e) =>{
    arraytext.push(n8.value);
    seearray();
    updateTextBox();
});
n9.addEventListener("click", (e) =>{
    arraytext.push(n9.value);
    seearray();
    updateTextBox();
});
np.addEventListener("click", (e) =>{
    seearray();
    updateTextBox();
    test('+');
});
nn.addEventListener("click", (e) =>{
    seearray();
    updateTextBox();
    test('-');
});
nm.addEventListener("click", (e) =>{
    seearray();
    updateTextBox();
    test('*');
});
nd.addEventListener("click", (e) =>{
    seearray();
    updateTextBox();
    test('/');
});
b.addEventListener("click", (e) =>{
    arraytext.pop();
    seearray();
    updateTextBox();
});
dot.addEventListener("click", (e) =>{
    arraytext.push(dot.value);
    seearray();
    updateTextBox();
});
c.addEventListener("click", (e) =>{
    arraytext = [];
    resuleArray = [];
    first = true;
    number = "";
    number1 = 0;
    number2 = 0;

    updateTextBox();
});
const p = (n1,n2) =>{
    return n1+n2;
};
const m = (n1,n2) =>{
    return n1*n2;
};
const n = (n1,n2) =>{
    return n1-n2;
};
const d = (n1,n2) =>{
    return n1/n2;
};

ne.addEventListener("click", (e) =>{
    seearray();
    updateTextBox();
    console.log(test('='));
    for(let i =0; i < resuleArray.length; i++){
        if(resuleArray[i] =='+' || resuleArray[i] == '-' || resuleArray[i] == '*' || resuleArray[i] == '/' || resuleArray[i] == '='){
            first = false;
            number2 = resuleArray[i+1];
            let key = resuleArray[i];
            switch (key) {
                case "+":
                    console.log(p(parseFloat(number1),parseFloat(number2)));
                    textbox.value = p(parseFloat(number1),parseFloat(number2));
                    number1 = p(parseFloat(number1),parseFloat(number2));
                    break;
                case "-":
                    console.log(n(parseFloat(number1),parseFloat(number2)));
                    textbox.value = n(parseFloat(number1),parseFloat(number2));
                    number1 = n(parseFloat(number1),parseFloat(number2));
                    break;
                case "*":
                    console.log(m(parseFloat(number1),parseFloat(number2)));
                    textbox.value = m(parseFloat(number1),parseFloat(number2));
                    number1 = m(parseFloat(number1),parseFloat(number2));
                    break;
                            
                case "/":
                    console.log(d(parseFloat(number1),parseFloat(number2)));
                    textbox.value = d(parseFloat(number1),parseFloat(number2));
                    number1 = d(parseFloat(number1),parseFloat(number2));
                    break;
                            
                default:
                    resuleArray = [];
                    arraytext = [];
                    number1 = 0;
                    number2 = 0;
                    number = "";
                    first = true;
                    break;
            }
        }else if(first){
            number1 = resuleArray[i];
        }
    }
});
















    
    // for(let i =0; i < arraytext.length; i++){
    //     if(arraytext[i] == '+' || arraytext[i] == '-' || arraytext[i] == '*' || arraytext[i] == '/' || arraytext[i] == '='){
    //         let key = arraytext[i];
    //         let number1 = number;
    //         number = "0";
    //         if(arraytext[i] == '='){
    //             let number2 = number;
    //             switch (key) {
    //                 case "+":
    //                     console.log(p(parseInt(number1),parseInt(number2)));
    //                     break;
                
    //                 default:
    //                     break;
    //             }
    //         }
    //     }else {
    //         number = number + arraytext[i].toString();
    //     }
       
    // }
    // //console.log(number);