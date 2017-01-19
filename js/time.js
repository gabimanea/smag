// my javascript
var d = new Date();
var ziua = d.getDay();
var luna = d.getMonth();
var anul = d.getFullYear();
function afiseazaData(){
  document.write(ziua + '-' + luna + '-' + anul);
}
