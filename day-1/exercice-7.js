export const my_is_posi_neg = (nbr) => {
    if (nbr == undefined || nbr == null || nbr > 0)
    {
        console.log("POSITIF")
    }
    if (nbr == 0) {
        console.log("NEUTRAL")
    }
    else{
        console.log("NEGATIF")
    }
}