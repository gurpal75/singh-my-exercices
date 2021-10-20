export const my_array_alpha = (str) => {
    let length = 0;
    let arr =[]
    while (str[length] != undefined) {
        length++
    }
    let i = 0;
    while (i < length){
        arr[i] = str[i]
        i++;
    }
    return arr;

}