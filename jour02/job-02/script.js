function myAddCount(){
    let count = document.getElementById("count-displayer").innerHTML;
    count++;
    document.getElementById("count-displayer").innerHTML = count;
    if (count > 0){
        document.getElementById("count-displayer").style.color = "green";
        const resetButtonC = document.getElementById("reset-btn-container");
        resetButtonC.innerHTML = '<button id="reset-btn" onclick="myResetCount()">Reset</button>';
    }
}
function myResetCount(){
    document.getElementById("count-displayer").innerHTML = 0;
    document.getElementById("count-displayer").style.color = "black";
    const resetButtonC = document.getElementById("reset-btn-container");
    resetButtonC.innerHTML = '';
}

const button = document.getElementById("add-count-btn");
button.addEventListener("click", myAddCount);

