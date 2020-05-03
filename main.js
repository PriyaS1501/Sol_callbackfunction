// Assignment : print message to 3 different devices.

function Print1(strValue1) {
    let result = undefined;
    if (typeof (strValue1) === "string") {
        result= "Message to Android";
        return result;
    }
    else {
        return 0;
    }
}

let response = Print1("Android");
console.log(response);
//-----------------------------------------------------
function Print2(strValue1) {
    let result = undefined;
    if (typeof (strValue1) === "string") {
        result= "Message to IOS";
        return result;
    }
    else {
        return 0;
    }
}

response = Print2("IOS");
console.log(response);
//-------------------------------------------------------------
function Print3(strValue1) {
    let result = undefined;
    if (typeof (strValue1) === "string") {
        result= "Message to Windows";
        return result;
    }
    else {
        return 0;
    }
}

response = Print3("Windows");
console.log(response);
//-------------------------------------------------------------


// using Common Function
function CommonFunc(strValue1, printOperation) {
    let result = undefined;
    if (typeof (strValue1) === "string") {

        switch (printOperation) {
            case "Android":
                result = "Message to Android";
                break;
            case "IOS":
                result = "Message to IOS";
                break;
            case "Windows":
                result = "Message to Windows";
                break;
            default:
                result = 0;
                break;
        }

        return result;
    }
    else {
        return 0;
    }
}

response = CommonFunc("Message to Android", "Android");
console.log(response);


response = CommonFunc("Message to IOS", "IOS");
console.log(response);


response = CommonFunc("Message to Windows", "Windows");
console.log(response);


// CallBack Function
function callbackMessage(strValue1, printMessage) {

    let result = undefined;
    if (typeof (strValue1) === "string") {
        result = printMessage(strValue1); // Calling Function
        return result;
    }
    else {
        return 0;
    }

}

response = callbackMessage(   "Message to Android" , (strValue1) => "Using Callback Function: Message to Android");
console.log(response);

response = callbackMessage(   "Message to ios" , (strValue1) => "Using Callback Function : Message to IOS");
console.log(response);

response = callbackMessage(   "Message to Windows" , (strValue1) => "Using Callback Function : Message to Windows");
console.log(response);

