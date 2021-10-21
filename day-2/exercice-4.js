export const my_display_comb = () => {
    let str = ""
    let arr = []
    let index_array = 0
    for (let i = 0; i < 100; i++) {
        str += i
        for (let j = 0; j < 100; j++) {
            str += j
            arr[index_array] = str
            str = ""
			index_array += 1
        }
    }
	return arr
}