// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"



function printArray(array) {
    array = array.map(String);
    return array.join(",");
}