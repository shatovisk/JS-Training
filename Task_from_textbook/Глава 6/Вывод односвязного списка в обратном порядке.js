function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
}


function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
}