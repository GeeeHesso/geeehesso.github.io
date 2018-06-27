var years = {val:'All'}
var authors = {val:'All'}
var axes = {val:'All'}

var display_element = document.getElementById('publications-results');

display()

function display(){
    $.getJSON('pub.json', function(data) {
        var appendString = '';
        $.each(data.publication, function(i, f) {
            if ((f.authors.includes(authors.val) || authors.val == 'All') &&
                (f.date.includes(years.val) || years.val == 'All') &&
                (f.tags.includes(axes.val) || axes.val == 'All')){
                appendString += '<li style="margin: 15px 10px"><p style="text-align: justify"><a class=link href="'+ f.url+'" target="_blank">' +f.display+'</a></p>';
            }
        });
    display_element.innerHTML = appendString;

    });
}

function selectFunction(years,authors,axes){
    years.val =   document.getElementById("Years").value
    authors.val = document.getElementById("Authors").value
    axes.val =    document.getElementById("Axes").value
    display()
}