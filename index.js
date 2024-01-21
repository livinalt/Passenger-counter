let countNumber = document.getElementById("counter");


let count = 0;

function increment() {
    count = count + 1;
    countNumber.innerText = count;
}

increment();


let saved = document.getElementById("entry");

function save() {
    newCount = count + " - "
    saved.innerText = saved.textContent + newCount;
    countNumber.textContent=0;
    count = 0;
}

save();