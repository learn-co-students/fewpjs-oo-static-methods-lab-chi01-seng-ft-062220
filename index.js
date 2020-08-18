class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let skipCapital = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let data = string.split(" ")
    let completeTitle = []
    data.forEach(word => {
      if(skipCapital.includes(word) && word != data[0]){
        completeTitle.push(word)
      }else{
       completeTitle.push(this.capitalize(word))
      }
    })
    return completeTitle.join(' ')
  }

}