let countdown = document.querySelector("#count");
let startbtn = document.querySelector(".startbtn");
let resetbtn = document.querySelector(".resetbtn");
let stopbtn = document.querySelector(".stopbtn");
let timebtn = document.querySelector(".timebtn");
let clearbtn = document.querySelector(".clearbtn");
let resetvalueelement = document.querySelector(".resetvalue");
let startcount = 0;
let intervalId;

const starttimer = () => {
    countdown.innerText = ++startcount;
    intervalId = setInterval(() => {
        countdown.innerText = ++startcount;
    }, 1000);
};


const resettimer = () => {
    startcount = 0;
    countdown.innerText = startcount;
    clearInterval(intervalId);
};


const stoptimer = () => {
    clearInterval(intervalId);
};


const showstopvalue = () => {
    const para = document.createElement("P");
    para.innerText = `🔅 The  time is : ${startcount}`;
    resetvalueelement.append(para);
};

const cleartimer = () => {
    resetvalueelement.innerHTML = "";
};

startbtn.addEventListener("click", starttimer);

resetbtn.addEventListener("click", resettimer);

stopbtn.addEventListener("click", stoptimer);

timebtn.addEventListener("click", showstopvalue);

clearbtn.addEventListener("click", cleartimer);