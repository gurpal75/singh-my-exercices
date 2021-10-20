export const my_alpha_reverse = (str) => {
    let i = 0
    let strng = ""
    while (str[i] != undefined) {
        i++
    }
    let length = 0
    i -= 1
    while (length >= 0) {
        strng += str[i]
        i -= 1
        length += 1
    }
    return strng
}