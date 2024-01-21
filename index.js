let countNumber = document.getElementById("counter");


let count = 0;

function increment() {
    count = count + 1;
    countNumber.innerText = count;
}

increment();