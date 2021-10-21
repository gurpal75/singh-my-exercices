export const my_string_is_number = (str) => {
    if (str == null ||str == undefined) {
        return false;
      }
    
      var i = 0;
      while (str[i] != undefined) {
        if (str[i] >= '0' && str[i] <= '9') {
          return true;
        }
        i++;
      }
      return false;
}