const username=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');

const btn=document.querySelector('.submitBtn')

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const userDetails={
        name:username.value,
        email:email.value,
        phone:phone.value,
        password:password.value
    }

    axios.post('http://localhost:2000/signup', userDetails)
    .then((res)=>{
        //alert('sign up sucessfully')
        alert(res.data.message)
        window.location.href = "/login.html"

    })
    .catch(err=> console.log(err))
})


// function storeToDB(e){
//     e.preventDefault();
//     // const name=e.target.name;
//     // const email=e.target.email;
//     // const phone=e.target.phone;
//     // const password=e.target.password;
//    const form =new formData(e.target)


//     const obj={
//         name:form.get('name'),
//         email:form.get('email'),
//         phone:form.get('phone'),
//         password:form.get('password')
//     }
// console.log(obj)
//     // axios.post('http://localhost:5000/signup', obj)
    
// }