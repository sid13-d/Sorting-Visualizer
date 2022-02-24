const insSort = document.getElementById('insertion');
let n=100;
insSort.addEventListener('click', async () => {
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
   const insertWait =await insertionSort(arr, n);
   colorGreen();
   enableNewArrayBtn();
   enableSizeSlider();
   enableSortingBtn();
})

//Insertion Sort 
async function insertionSort(arr, n)
{
    let el1,el2;
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;
 
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {

            el1 = document.querySelector(`.barNo${j}`);
            el2 = document.querySelector(`.barNo${j+1}`);
            el1.style.background="red";
             el2.style.background="red";
             var w = await  waitforme(speed.value);
            //  console.log(w);
             swapBars(el1, el2)
             el1.style.background="green";
            el2.style.background="#035abe";
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        arr[j + 1] = key;
    }
    // console.log(arr);
    
}

 function colorGreen() {
    for(let i=0; i<n; i++) {
        el1 = document.querySelector(`.barNo${i}`);
    el1.style.background="green";
    }
}
