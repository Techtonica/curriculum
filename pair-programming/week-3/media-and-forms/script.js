const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userName = document.getElementById("username");

  if (userName.value === "") {
    const errDiv = document.getElementById("error");

    alert("Please enter the name. This field is mandatory");

    errDiv.innerText = "Please enter the name. This field is mandatory";
  } else {
    console.log(userName.value);
  }
});
