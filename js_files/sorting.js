// console.log('hello world')

let arr = [];
var arr_size=document.querySelector("#arr_sz"); 
arr_size.addEventListener("input",bars);
// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubble").disabled = true;
    document.querySelector(".insertion").disabled = true;
    document.querySelector(".merge").disabled = true;
    document.querySelector(".quick").disabled = true;
    document.querySelector(".selection").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubble").disabled = false;
    document.querySelector(".insertion").disabled = false;
    document.querySelector(".merge").disabled = false;
    document.querySelector(".quick").disabled = false;
    document.querySelector(".selection").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".new-array").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".new-array").disabled = false;
}

disableSortingBtn();
disableSizeSlider();
function bars () {
    deletBars();

   
    var no_of_bar=arr_size.value;  
console.log(no_of_bar);
for(let i=0; i<no_of_bar; i++) {
    //creating array of 100 randoms
    arr[i] = Math.floor(Math.random() * 100) +1;

    //creating 100 divs
    const div = document.createElement("div");
        const cl =`barNo${i}`;
        div.className = cl;
        div.classList.add("bar")
        div.style.height = `${arr[i] * 4}px`
        document.getElementById("bars").appendChild(div);
}

}
console.log(arr);

function deletBars() {
    const bar = document.getElementById('bars');
    bar.innerHTML = "";
}
//making new array
const newArray = document.getElementById("new_array");
newArray.addEventListener('click', () => {
    enableSizeSlider();
    bars();
    enableSortingBtn();
})



