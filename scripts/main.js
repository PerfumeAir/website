
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
let myFooter = document.querySelector(".footer-em");

function setUserName() {
  if (!localStorage.getItem("name")) {
    let myName = prompt("请输入你的名字:");
    if (!myName) {
      myHeading.textContent = "Hello!" 
      myFooter.textContent="None";
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Hello," + myName;
      myFooter.textContent=myName;
    }
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello," + storedName;
    myFooter.textContent=storedName;
  }

}

myButton.onclick = function () {
    localStorage.removeItem("name");
    location.reload();
  };

document.body.onload=setUserName;
