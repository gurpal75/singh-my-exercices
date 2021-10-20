export const my_sum = (a,b) => {
    if (typeof a != "number" || typeof b != "number")
    {
    	return 0;
    }
	else {
		return a+b;
	}
}