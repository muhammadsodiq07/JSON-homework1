let elList = document.querySelector(".info__list");

function userApi() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://reqres.in/api/users");
  request.onload = function () {
    let userData = JSON.parse(request.responseText);
    console.log(userData);
    showUser(userData);
  }
  request.send()
}
userApi()

function showUser(userData) {
  userData.data.forEach((item) => {
    let li = document.createElement("li");
    li.className = "info__item";
    li.innerHTML = `
    <div class="info__div">
    <div class="row middle-xs">
      <div class="info__box">
        <img class="info__img" src="${item.avatar}" alt="">
      </div>
      <div class="info__title">
          <h4 class="info__name">${item.first_name}</h4>
          <p class="info__desc">${item.last_name}</p>
      </div>
    </div>
    <div class="row middle-xs between-xs">
      <p class="info__company">Company</p>
      <p class="info__companyName">Romaguera-Crona</p>
    </div>
    <div class="row middle-xs between-xs">
      <p class="info__company">Email</p>
      <p class="info__companyName companyEmail">${item.email}</p>
    </div>
    <div class="row middle-xs between-xs">
      <p class="info__company">Phone</p>
      <p class="info__companyName">1-22-3-4555-13-3234</p>
    </div>
    <div class="row middle-xs between-xs">
      <p class="info__company">Website</p>
      <p class="info__companyName">hildegard.org</p>
    </div>
    <div class="buttons">
      <button class="btn remove-btn">Remove User</button>
    </div>
</div>
    `
    elList.appendChild(li)
  })
  let elBtns = document.querySelectorAll(".remove-btn");
  deleteIt(elBtns);
}

function deleteIt(elBtns){
  elBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.remove();
    });
  }); 
}

