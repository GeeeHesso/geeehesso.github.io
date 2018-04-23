var display_element = document.getElementById('newsresults');

console.log("Test")

   $.getJSON('news.json', function(data) {
    var appendString = '';
       $.each(data.news, function(i, f) {
	  console.log(f.display)
          appendString += '<li style="margin: 15px 0"><a class=link href="'+ f.url+'" target="_blank">' +f.date+' / '+f.display+'</a>';
     });
    display_element.innerHTML = appendString;

   });
