// code your solution here

/*function superBowlWin(record){
    if ['result'] === "W" {
        return ['year']
    } else {
        return null
    }
}

['year', 'result'].find(superBowlWin);

*/

/*function superbowlWin(arr) {
    for (const record of arr)
    if (record.result === "W") {
        return record.year
    } 
}

arr.find(superbowlWin) */


function superbowlWin(array) {
    let win = array.find((array) => array.result ==="W");
    if (win) {
        return win.year;
    } else {
        return undefined
    }
}