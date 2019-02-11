
function displaySearchResults(results, results2, results3, store,container, tag) {
  var searchResults = document.getElementById(container);
  // console.log(results)
  // console.log(results2)
  // console.log(results3)
  if (results.length /*|| results2.length*/) { // Are there any results?
    var appendString = '<b>Results in ' +tag+' :</b>'+'<br>';

    for (var i = 0; i < results.length; i++) {  // Iterate over the results
      var item = store[results[i].ref];

      appendString += '<li><a class=link href="' + item.url + '">' + item.title + '</a>';
    }
    for (var i = 0; i < results2.length; i++) {  // Iterate over the results
      var item = store[results2[i].ref];

      // appendString += '<li><a class=link href="' + item.url + '">' + item.title + '</a>';
    }
    if (results3.length){
      for (var i = 0; i < results3.length; i++) {  // Iterate over the results
        var item = store[results3[i].ref];

        // appendString += '<li><a class=link href="' + item.url + '">' + item.title + '</a>';
      }
    }
    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<b>No results found in ' + tag+'</b>';
	//console.log('wow')
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

var searchTerm = getQueryVariable('query');
//console.log(searchTerm)
//searchTerm+='*'
//console.log(searchTerm)

searchTerm_temp = searchTerm;
searchTerm_temp_2 = searchTerm_temp +'*';
searchTerm_temp_3 = '';
if (searchTerm_temp.length > 1){
  searchTerm_temp_3 = searchTerm_temp.slice(0,-1);
  searchTerm_temp_3 += '*';
}
// console.log(searchTerm_temp)
// console.log(searchTerm_temp_2)
// console.log(searchTerm_temp_3)
// console.log(JSON.parse('pub.json'))


if (searchTerm_temp_2) {
  document.getElementById('search-box').setAttribute("value", searchTerm);
  document.getElementById('search_input').setAttribute("value", searchTerm);

  

  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  var idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('category');
    this.field('tags');
    //this.field('content');
  
    for (var key in window.store) { // Add the data to lunr
      this.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'tags':window.store[key].tags
        //'content': window.store[key].content
          });
        }
  });
  

  var results = idx.search(searchTerm_temp); // Get lunr to perform a search
  var results2 = idx.search(searchTerm_temp_2); // Get lunr to perform a search
  var results3 ='';
  if (searchTerm_temp_3){
    results3 = idx.search(searchTerm_temp_3); // Get lunr to perform a search
  }

  displaySearchResults(results, results2, results3, window.store, 'search_results_pages','Pages');


// Publications
  $.getJSON('pub.json', function(data) {
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('authors');
      this.field('category');
      this.field('tags');
      //this.field('content');
    
      for (var key in data.publication) { // Add the data to lunr
        this.add({
          'id': key,
          'title': data.publication[key].title,
          'authors': data.publication[key].authors,
          'category': data.publication[key].date,
          'tags':data.publication[key].tags
          //'content': window.store[key].content
            });
          }
      });
      var results = idx.search(searchTerm_temp); // Get lunr to perform a search
      var results2 = idx.search(searchTerm_temp_2); // Get lunr to perform a search
      var results3 ='';
      if (searchTerm_temp_3){
        results3 = idx.search(searchTerm_temp_3); // Get lunr to perform a search
      }
      displaySearchResults(results, results2, results3, data.publication, 'search_results_pub','Publications'); 
    });

  // News
  $.getJSON('news.json', function(data) {
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('tags');
      this.field('publisher');
      //this.field('content');
    
      for (var key in data.news) { // Add the data to lunr
        this.add({
          'id': key,
          'title': data.news[key].title,
          'author': data.news[key].authors,
          'publisher':data.news[key].publisher,
          'category': data.news[key].date,
          'tags':data.news[key].tags
          //'content': window.store[key].content
            });
          }
    });
    var results = idx.search(searchTerm_temp); // Get lunr to perform a search
    var results2 = idx.search(searchTerm_temp_2); // Get lunr to perform a search
    var results3 ='';
    if (searchTerm_temp_3){
      results3 = idx.search(searchTerm_temp_3); // Get lunr to perform a search
    }
    displaySearchResults(results, results2, results3, data.news, 'search_results_news','News');
  });

// Talks
  $.getJSON('pres.json', function(data) {
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('tags');
      //this.field('content');
    
      for (var key in data.presentations) { // Add the data to lunr
        this.add({
          'id': key,
          'title': data.presentations[key].title,
          'author': data.presentations[key].authors,
          'category': data.presentations[key].date,
          'tags':data.presentations[key].tags
          //'content': window.store[key].content
            });
          }
    });
    var results = idx.search(searchTerm_temp); // Get lunr to perform a search
    var results2 = idx.search(searchTerm_temp_2); // Get lunr to perform a search
    var results3 ='';
    if (searchTerm_temp_3){
      results3 = idx.search(searchTerm_temp_3); // Get lunr to perform a search
    }
    displaySearchResults(results, results2, results3, data.presentations, 'search_results_pres','Talks'); 
  });

//People
  $.getJSON('people.json', function(data) {
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('tags');
      //this.field('content');
    
      for (var key in data.people) { // Add the data to lunr
        this.add({
          'id': key,
          'title': data.people[key].title,
          'author': data.people[key].authors,
          'category': data.people[key].date,
          'tags':data.people[key].tags
          //'content': window.store[key].content
            });
          }
    });
    var results = idx.search(searchTerm_temp); // Get lunr to perform a search
    var results2 = idx.search(searchTerm_temp_2); // Get lunr to perform a search
    var results3 ='';
    if (searchTerm_temp_3){
      results3 = idx.search(searchTerm_temp_3); // Get lunr to perform a search
    }
    displaySearchResults(results, results2, results3, data.people, 'search_results_people','People'); 
  });

}

        
