let arr = ['миНск', 'бРест', "МосКвА"];
let new_arr = arr.map( (el) => 
{
    return el.toLowerCase();
})
console.log(new_arr);
let arr2 = [];
new_arr.forEach(word => 
    {
        word = word[0].toLocaleUpperCase() + word.slice(1, word.length);
        console.log(word);
        arr2.push(word);
    }    
    )
    console.log(new_arr);