var dis_PJ = {val:1}
var dis_LP = {val:1}
var dis_RD = {val:1}
var dis_DT = {val:1}
var dis_MT = {val:1}
var dis_GG = {val:1}
var dis_AR = {val:1}
var dis_KW = {val:1}
var dis_JF = {val:1}
var dis_MG = {val:1}
var dis_GD = {val:1}

dis_PJ.val = 0
dis_LP.val = 0
dis_RD.val = 0
dis_DT.val = 0
dis_MT.val = 0
dis_GG.val = 0
dis_AR.val = 0
dis_KW.val = 0
dis_JF.val = 0
dis_MG.val = 0
dis_GD.val = 0

var el_PJ = "cGhpbGlwcGUuamFjcXVvZEBoZXZzLmNo"
var el_LP = "bGF1cmVudC5wYWduaWVyQGhldnMuY2g="
var el_RD = "cm9iaW4uZGVsYWJheXNAaGV2cy5jaA=="
var el_DT = "ZGF2aWQudGF1eGVAaGV2cy5jaA=="
var el_MT = "bWVsdnluLnR5bG9vQGhldnMuY2g="
var el_GG = "Z2xvcnltYXJ5LmdpdmlAaGV2cy5jaA=="
var el_AR = "YW5kcmUucmVnZ2lvQGhldnMuY2g="
var el_KW = "a29lbi52YW53YWxzdGlqbkBoZXZzLmNo"
var el_JF = "anVsaWFuLmZyaXR6c2NoQGhldnMuY2g="
var el_MG = "bWFyYy5naWxsaW96QGhldnMuY2g=" 
var el_GD = "Z3VpbGxhdW1lLmR1YnVpc0BoZXZzLmNo"

function display_mail(display_var,display_el,el) {
	if (display_var.val == 0){
		document.getElementById(display_el).innerHTML = "Click me"
		document.getElementById(display_el).style.MozTextDecorationStyle="none"
		document.getElementById(display_el).style.color = "#2d8dcf"
		display_var.val = 1
	}
	else if (display_var.val == 1){
		document.getElementById(display_el).innerHTML = window.atob(el)
		document.getElementById(display_el).style.MozTextDecorationStyle="underline"
		document.getElementById(display_el).style.color = "#2d8dcf"
		display_var.val = 0
	}
}

function display_mail_test(display_var,display_el,el,on_off){
	// console.log('wow')
	if(on_off == 1){
		element = window.atob(el)
		document.getElementById(display_el).innerHTML = element
		document.getElementById(display_el).style.color = "black"
	}
	else if(on_off==0 && display_var.val==0){
		document.getElementById(display_el).innerHTML = "Click me"
		document.getElementById(display_el).style.color = "#2d8dcf"
	}
}

function display_mail_test_click(display_var,display_el,el){
	if (display_var.val == 0){
		document.getElementById(display_el).innerHTML = '&nbsp;&nbsp;&nbsp;<a href=mailto:'+ window.atob(el) +' target=_top class="link fa fa-envelope"></a>'
		display_var.val = 1
	}
	else if (display_var.val == 1){
		document.getElementById(display_el).innerHTML = ''
		display_var.val = 0
	}
}
