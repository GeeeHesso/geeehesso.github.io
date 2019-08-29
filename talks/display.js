var display_element = document.getElementById('talks-results');

   $.getJSON('pres.json', function(data) {
    var appendString = '';
       $.each(data.presentations, function(i, f) {
          appendString += '<li style="margin: 15px 0"><a class=link href="'+ f.url+'" target="_blank">' +f.date+' / '+f.display+'</a>';
     });
    display_element.innerHTML = appendString;
   }); 
