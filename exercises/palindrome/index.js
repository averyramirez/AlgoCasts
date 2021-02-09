function palindrome(str) {
    let reversed = str.split("").reverse().join("");
    if(reversed === str){
        return true;
    }
    return false;
}