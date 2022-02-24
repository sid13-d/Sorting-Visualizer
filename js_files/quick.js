async function swapQuick(arr, i, j) {
    arr[i].style.background = "cyan";
    arr[j].style.background = "cyan";
    await waitforme(speed.value);
    let temp = arr[i].style.height;
    arr[i].style.height = arr[j].style.height;
    arr[j].style.height = temp;

    arr[i].style.background = "green";
}
 
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
async function partition(arr, low, high) {
 
    // pivot
    let pivot = parseInt(arr[high].style.height);
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
    arr[high].style.background = "red";
 
    for (let j = low; j <= high - 1; j++) {
 
        // If current element is smaller
        // than the pivot
        arr[j].style.background = "pink";
        await waitforme(speed.value);
     
        if (parseInt(arr[j].style.height) < pivot) {
 
            // Increment index of
            // smaller element
            i++;
           await swapQuick(arr, i, j);
            arr[i].style.background = "purple"
            if(i != j) arr[j].style.background = "purple";
        }
        arr[j].style.background = "#035abe";
    }
   await swapQuick(arr, i + 1, high);
    console.log("quick sort sorted array",arr);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
 async function quickSort(arr, low, high) {
    if (low < high) {
 
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = await partition(arr, low, high);
 
        // Separately sort elements before
        // partition and after partition
       await quickSort(arr, low, pi - 1);
       await quickSort(arr, pi + 1, high);
    } else {
        if(low >= 0 && high >= 0 && low < arr.length && high < arr.length) {
            arr[high].style.background = "green";
            arr[low].style.background = "green";
        }
    }
}

let quick = document.getElementById("quick");
quick.addEventListener('click', async () => {
    let arr = document.querySelectorAll('.bar');
    console.log("quick sort func called with value : ", arr, 0, arr.length-1)
    quickSort(arr, 0, arr.length-1)
});