let arr2;
h = 100;
function as(h){
    if (i<100){
        arr2.push(Math.random()*100).toFixed(2) ;
    }
    h--;
    as(h);   

}
console.log(arr2);

arr.forEach((item) => {
if (isFinite(item)){
        +item;
    }
})
arr2.forEach(item => +item);
console.log(arr2);
