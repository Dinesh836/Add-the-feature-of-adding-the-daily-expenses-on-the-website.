window.addEventListener("DOMContentLoaded", () => {
  axios.get('http://localhost:2000/getexpence')
  .then((res)=>{
    console.log(res)
    const allExpences=res.data.expenses;
    allExpences.forEach((each)=>{
      const parentEl = document.querySelector(".second-container");
      const childEl = `<div class="expence list dynamic">
                                 <p class="list">${each.expence}</p>
                                 <p class="list">${each.Description}</p>
                                 <p class="list">${each.category}</p>
                                 <i class="fa-solid fa-trash"></i>
                            </div>`;
      parentEl.innerHTML = parentEl.innerHTML + childEl;
    })
  })
  .catch(err=>console.log(err))


  const notify = document.getElementById("notify");
  notify.innerHTML = `<h2>Sucessfully Logged In </h2>`;
  setTimeout(() => {
    notify.remove();
  }, 2000);
});

const addExpBtn = document.getElementById("addExpBtn");
addExpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const expence = document.getElementById("expence").value;
  const Description = document.getElementById("Description").value;
  const category = document.getElementById("category").value;
  const token=localStorage.getItem('token');

  const expenceObj={
    expence,
    Description,
    category
  }
  axios.post('http://localhost:2000/addexpences', expenceObj)
  .then((res)=>{
    console.log(res)
    if(res.status==200){
      const parentEl = document.querySelector(".second-container");
      const childEl = `<div class="expence list dynamic">
                                 <p class="list">${res.data.expence.expence}</p>
                                 <p class="list">${res.data.expence.Description}</p>
                                 <p class="list">${res.data.expence.category}</p>
                                 
                                    <i class="fa-solid fa-trash"></i>
                                 
                                 
                            </div>`;
      parentEl.innerHTML = parentEl.innerHTML + childEl;
    }
  })
  .catch(err=>console.log(err))


});

// const deleteBtn = document.querySelector(".trash");
// console.log(deleteBtn);
// deleteBtn.addEventListener("click", () => {
//   console.log("btn clicked");
// });
