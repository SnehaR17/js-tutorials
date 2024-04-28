// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}
// if break is not given at the end of each case then after the case is matched, all the remaining cases are executed without even checking the condition except the default case
// so break is used to break the control flow