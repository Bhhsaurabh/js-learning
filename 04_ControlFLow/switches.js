let num = 2   // switches are used to match one in the multiple conditions
switch(num){
    case 1:
            console.log("saurabh")
        break; // after matching it executes all the downstream conditions expect default  so we used break to not execute downstream conditions
        console.log("golu")
        break;
    default:
        console.log("not found")
        break;
}
