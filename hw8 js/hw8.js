// <!-- - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


// document.querySelector('#text').addEventListener('keyup', function(){
//     localStorage.setItem('key', document.querySelector('#text').value)
// })
// document.querySelector('#text').value = localStorage.getItem('key')

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// const form = document.forms.newForm;
// getDataForm(form)
// function saveForm(t){
    
//     setDataForm(t)
// }

// function setDataForm(tag){
//   for (let i=0; i<tag.length; i++ ){
//       const tagElement = tag[i];
      
//       if(tagElement.type === 'checkbox' || tagElement.type === 'radio'  )
//         tagElement.checked
//         ? tagElement.value = true
//         : tagElement.value = false

//       localStorage.setItem(tagElement.id, tagElement.value)
//   }
// }

// function getDataForm (tag){
//     for(let i=0;  i<localStorage.length; i++){
//         if(localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if(tag.children[i].value ==='true'){
//                 tag.children[i].setAttribute('checked', 'checked')
//             }
//     }
// }}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const text1 = document.querySelector('#textArr');
// const butt1 = document.querySelector('#saveArr');
// const buttL = document.querySelector('#left');
// const buttR = document.querySelector('#right');

// butt1.onclick= () =>{
//     localStorage.setItem(localStorage.length+1, text1.value);
// }

// buttL.onclick = () =>{

// 	buttR.style.visibility = 'visible';
//     let index
    
// 	for (const key of localStorage) {
// 		if(localStorage.hasOwnProperty(key)){
// 			if(localStorage.getItem(key === text1.value))
// 				index = key;
// 		}
//     }
    

// 	if (index === '1'){
// 		buttL.style.visibility = 'hidden';
// 		return;
// 	}
// 	text1.value = localStorage.getItem(index - 1);
// }

// buttR.onclick = ()=>{

// 	buttL.style.visibility = 'visible';
//     let index;
    
// 	for (const key of localStorage) {
// 		if (localStorage.hasOwnProperty(key)){
// 			if(localStorage.getItem(key) === text1.value){
// 				index = key;
// 			}
// 		}
//     }
    
// 	if (index === localStorage.length.toString()){
// 		buttR.style.visibility = 'hidden';
// 		return;
// 	}
// 	text1.value = localStorage.getItem(index + 1);
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта -->

const data = [
    {
      name: 'Ivan Ivanovich Ivanov',
      phone: 333555,
      email: 'kbvljvbla@com',
      work: ' Work',
      department:'Dep1',
      birthday:'24.04.1975'

    },
    {
        name: 'Vasyl Vasilipvich Vasiliev',
        phone: 333555,
        email: 'kbvljvbla@com',
        work: ' Work',
        department:'Dep1',
        birthday:'24.04.1975'
    }
  ]
  
  localStorage.setItem('data', JSON.stringify(data))
  
  
  const allUsers = document.getElementById('allUsers');
  const nameInpt = document.getElementById('name');
  const phoneInpt = document.getElementById('phone');
  const emailInpt = document.getElementById('email');
  const workInpt = document.getElementById('work');
  const departmentInpt = document.getElementById('department');
  const birthdayInpt = document.getElementById('birthday');
  const save = document.getElementById('save');
  
  const saveEditBtn = document.getElementById('saveEdit');
  const editName = document.getElementById('editName');
  const editPhone = document.getElementById('editPhone');
  const editEmail = document.getElementById('editEmail');
  const editWork = document.getElementById('editWork');
  const editDepartment = document.getElementById('editDepartment');
  const editBirthday = document.getElementById('editBirthday');
  
  
  adder()
  
  save.onclick = () => {
    const name = nameInpt.value;
    const phone = phoneInpt.value;
    const email = emailInpt.value;
    const work = workInpt.value;
    const department = departmentInpt.value;
    const birthday = birthdayInpt.value;
  
    data.push({ name, phone, email, work, department, birthday })
    localStorage.setItem('data', JSON.stringify(data))
  
    adder();
  }
  
  function adder() {
    allUsers.innerHTML = ''
  
    let item = localStorage.getItem('data');
    const data = JSON.parse(item);
  
    data.forEach(({  name, phone, email, work, department, birthday  }, index) => {
      const userDiv = document.createElement('div');
      const removeBtn = document.createElement('button');
      const editBtn = document.createElement('button');
  
      removeBtn.innerText = 'REMOVE'
      editBtn.innerText = 'Edit'
      userDiv.innerText = `${ index + 1 }. Name: ${ name }, phone: ${ phone }, phone: ${ email },  phone: ${ work }, phone: ${ department }, phone: ${ birthday}`
      userDiv.style.margin = '25px'
  
      removeBtn.onclick = () => {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data))
        adder();
      }
  
      editBtn.onclick = () => {
        editHelper({ name, phone, email, work, department, birthday  }, index);
      }
  
      userDiv.appendChild(removeBtn)
      userDiv.appendChild(editBtn)
  
      allUsers.appendChild(userDiv);
    });
  }
  
  function editHelper(user, index) {
    document.getElementById('editForm').style.display = 'block'
  
    editName.value = user.name
    editPhone.value = user.phone
    editEmail.value = user.email
    editWork.value = user.work
    editDepartment.value = user.department
    editBirthday.value = user.birthday

  
    saveEditBtn.onclick = () => {
      data[index].name = editName.value
      data[index].phone = editPhone.value
      data[index].email = editEmail.value
      data[index].work= editWork.value
      data[index].department = editDepartment.value
      data[index].birthday = editBirthday.value
  
      localStorage.setItem('data', JSON.stringify(data))
  
      adder();
  
      document.getElementById('editForm').style.display = 'none'
    }
  }