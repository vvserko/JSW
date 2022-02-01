let str = "брест минск москва";
let arr = str.split(' ');
console.log(arr);


for (let i = 0; i < arr.length; i++){
    arr[i][0] = '0';
}
console.log(arr);