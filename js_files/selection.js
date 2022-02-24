function swap(arr,min, i)
{
    arr[min].style.background = "#035abe"
    arr[i].style.background = "#035abe"
    var temp = arr[min].style.height;
    arr[min].style.height = arr[i].style.height;
    arr[i].style.height = temp;

    arr[i].style.background = "green";
   
}
  
async function selectionSort(arr,  n)
{
    
    var i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        arr[i].style.background = "red";
        for (j = i + 1; j < n; j++)
     {
        arr[j].style.background = "red";
        await waitforme(10);
        if (parseInt(arr[j].style.height) < parseInt(arr[min_idx].style.height)){  
            arr[min_idx].style.background = "#035abe"; 
        min_idx = j;
        arr[min_idx].style.background = "cyan";
        await waitforme(500);
        }
         // Swap the found minimum element with the first element
         await waitforme(40);
         arr[j].style.background = "#035abe";
        
     }
     swap(arr,min_idx, i);
       
    }

    console.log('sorted array', arr);
}

let selection = document.getElementById("selection");

selection.addEventListener('click', () => {
    let arr = document.querySelectorAll('.bar');
    let l = arr.length;
    console.log(arr);
    selectionSort(arr, l);
})