export const my_alpha_reverse = (str) => {
    var res = "";
  var i = 0;
  while (str[i] != undefined) {
    res = str[i] + res;
  }
  return res;
}