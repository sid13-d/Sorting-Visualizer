const bubbleSort = document.getElementById("bubble");
const speed = document.querySelector('#arr_sp');
console.log("array before sorting",arr);

bubbleSort.addEventListener('click', async () => {
  let arr = document.querySelectorAll('.bar');
    bblSort(arr);
})
 async function bblSort(arr){
   console.log(arr.length, arr_size.value, "arr:", arr);
     let el1=null, el2=null;
     var i,j;
    for(i = 0; i < arr.length; i++){
        
      // Last i elements are already in place  
      for(j = 0; j < ( arr.length - i )-1; j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height)){
            
          // If the condition is true then swap them
           el1 = arr[j];
           el2 = arr[j+1];
           el1.style.background="red";
       el2.style.background="red";
       var w = await  waitforme(speed.value);
       console.log(w);
       swapBars(el1, el2)
          el1.style.background="#035abe";
          el2.style.background="#035abe";
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
          
        } 
       
      } 
      arr[arr.length-1-i].style.background = 'green';
    }
    arr[0].style.background = 'green';
    // Print the sorted array
    console.log("The sorted array is",arr);
   }

   function swapBars(el1, el2) {
       
      
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        //getting the heights
        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");

        //swapping the heights
        el1.style.height = transform2;
        el2.style.height = transform1;
        // console.log(transform1, transform2);

      

   }

   function waitforme(ms) {
    return new Promise(resolve => setTimeout(() => {resolve('waited')}, ms));
   }