jj();
fetch('https://192.168.0.200:3000/form',
{
    method: 'POST',
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(user)
})
.then((response) => {
    console.log(response);
    return response.text();
})
.then(text => {
    console.log(text)
})

function jj(){
  const name = document.body.querySelector('#validationDefault01');
  const age = document.body.querySelector('#validationDefault02');

  const form = document.forms[0];
  form.addEventListener('submit', event => {
    const name_user = document.body.querySelector('#validationDefault01').value;
    const age = document.body.querySelector('#validationDefault02').value;
    let user = new Object();  
    user.name = name_user;
    user.age = age;
    console.log(user);
    event.preventDefault();

  })
}



  //собрать в объект данные  
  //отправить при сабмите
  //добавить обработчик
