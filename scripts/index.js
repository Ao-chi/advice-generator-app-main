let toggle = document.querySelector("#toggle");
let adviceText = document.querySelector(".advice");
let adviceId = document.querySelector("#advice-id");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            // console.log("resolved", response);
            return response.json();
        })
        .then((data) => {
            const advice = data.slip.advice;
            const id = data.slip.id;
            adviceText.innerHTML = `"${advice}"`;
            adviceId.innerHTML = id;
        });
}

function disableBtn() {
    toggle.disabled = true;
    setTimeout(() => {
        toggle.disabled = false;
    }, 1500);
    getAdvice();
}

getAdvice();
toggle.addEventListener("click", disableBtn);
