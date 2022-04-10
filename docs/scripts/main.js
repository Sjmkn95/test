const myImg = document.querySelector('img');
const myH1 = document.querySelector('h1');
const span = document.querySelector('span');
const button = document.querySelector('button');

if (!localStorage.getItem('name')) {
    setUserName();
}else{
    const storedName = localStorage.getItem('name');
    span.textContent = storedName;
}

function setUserName() {
    const userName = prompt("Please enter your name");
    if (!userName) {
        setUserName();
    }else{
        localStorage.setItem("name", userName);
        span.textContent = userName;
    }
}

myImg.onclick = function() {
    const mySrc = myImg.getAttribute('src');
    if (mySrc === "images/cat.jpg") {
        myImg.setAttribute("src", "images/cat2.jpg");
    }else{
        myImg.setAttribute("src", "images/cat.jpg");
    }
};

myH1.onclick = function(){
    alert("Hello");
};

button.onclick = function() {
    setUserName();
}


