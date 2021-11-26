var el_pubs = document.getElementById('el_pubs');
var el_news = document.getElementById('el_news');
var el_talk = document.getElementById('el_talk');
var el_blog = document.getElementById('el_blog');

var str_pubs = '';
var str_news = '';
var str_talk = '';
var str_blog = '';

var ref_pubs = '';
var ref_pubs = '';
var ref_pubs = '';
var ref_pubs = '';

$.getJSON('/search/pub.json', function (data) {
	str_pubs = data.publication['p_00'].display
	ref_pubs = data.publication['p_00'].url
	el_pubs.innerHTML = str_pubs;
	el_pubs.href = ref_pubs;
	el_pubs.target = '_blank';
});


$.getJSON('/search/news.json', function (data) {
	str_news = data.news['n_00'].display
	ref_news = data.news['n_00'].url
	el_news.innerHTML = str_news;
	el_news.href = ref_news;
	el_news.target = '_blank';
});


$.getJSON('/search/pres.json', function (data) {
	str_talk = data.presentations['p_00'].display
	ref_talk = data.presentations['p_00'].url
	el_talk.innerHTML = str_talk;
	el_talk.href = ref_talk;
	el_talk.target = '_blank';
});

str_blog = window.store[Object.keys(window.store)[0]].title
ref_blog = window.store[Object.keys(window.store)[0]].url

el_blog.innerHTML = str_blog;
el_blog.href = ref_blog;
el_blog.target = '_blank';