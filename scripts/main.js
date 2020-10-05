let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  let input = document.getElementById("foo");
  let body = document.getElementById("body");
  if (mySrc === "images/konan.png") {
    myImage.setAttribute("src", "images/okiya.png");
    input.style.backgroundColor = " hsl(283, 30%, 58%)";
    body.style.border = "5px solid rgb(65, 60, 55)";
  } else {
    myImage.setAttribute("src", "images/konan.png");
    input.style.backgroundColor = "hsl(209, 100%, 64%)";
    body.style.border = "5px solid rgb(255, 159, 159)";
  }
};

//let myButton = document.querySelector("button");
let myButton = document.getElementById("user");
let myHeading = document.querySelector("h1");

myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  let myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  console.log(myName);
  if (myName === null) {
    myHeading.textContent = "名探偵コナンのすすめ";
  } else {
    myHeading.textContent = myName + "!名探偵コナンを見てみよう！";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  //let storedName = localStorage.getItem("name");
  myHeading.textContent = "名探偵コナンのすすめ";
}
