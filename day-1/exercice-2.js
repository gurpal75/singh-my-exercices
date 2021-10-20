import {my_display_alpha} from "./exercice-1"

export const my_display_alpha_reverse = () => {

    let res = my_display_alpha
    let i = 0
    while(a[i] != undefined) {
        i++;
    }
    let j = i - 1
    while (j >= 0) {
        res += a[j]
		j--;
    }
    return res

}