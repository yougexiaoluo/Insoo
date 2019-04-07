window.onload = function () {
  var divLis = Array.from(document.querySelectorAll('form> div'));
  var arr = [23, 23, 24, 26, 20, 18, 27, 26, 30];
  for (var i = 0, len = arr.length; i < len; i++) {
    divLis[i].style['margin-bottom'] = (arr[i] / 10) + 'rem';
  }
}

console.log('success!');