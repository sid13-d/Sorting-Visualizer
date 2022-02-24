// console.log('hello world')

let arr = [];
var arr_size=document.querySelector("#arr_sz"); 
arr_size.addEventListener("input",bars);

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
    bars();
})



