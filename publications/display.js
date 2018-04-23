var display_element = document.getElementById('publications-results');

   $.getJSON('{{site.baseurl}}/pub.json', function(data) {
    var appendString = '';
       $.each(data.publication, function(i, f) {
          appendString += '<li style="margin: 15px 10px"><p style="text-align: justify"><a class=link href="'+ f.url+'" target="_blank">' +f.display+'</a></p>';
     });
    display_element.innerHTML = appendString;

   });
