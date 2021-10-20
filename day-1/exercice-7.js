export const my_is_posi_neg = (nbr) => {
    if (typeof nbr == undefined || typeof nbr == null || nbr > 0)
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