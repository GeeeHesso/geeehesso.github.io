var dis_PJ = {val:1}
var dis_PJ2 = {val:1}

dis_PJ.val = 0
dis_PJ2.val = 0

var el_PJ = "cGhpbGlwcGUuamFjcXVvZEBoZXZzLmNo"

function display_mail(display_var,display_el,el) {
	if (display_var.val == 0){
		document.getElementById(display_el).innerHTML = "Click me"
		document.getElementById(display_el).style.MozTextDecorationStyle="none"
		document.getElementById(display_el).style.color = "999"
		display_var.val = 1
	}
	else if (display_var.val == 1){
		document.getElementById(display_el).innerHTML = window.atob(el)
		document.getElementById(display_el).style.MozTextDecorationStyle="underline"
		document.getElementById(display_el).style.color = "999"
		display_var.val = 0
	}
}

function display_mail_test(display_var,display_el,el,on_off){
	if(on_off == 1){
		element = window.atob(el)
		document.getElementById(display_el).innerHTML = element
		document.getElementById(display_el).style.color = "black"
	}
	else if(on_off==0 && display_var.val==0){
		document.getElementById(display_el).innerHTML = "Click me"
		document.getElementById(display_el).style.color = "#999"
	}
}

function display_mail_test_click(display_var,display_el_mail,display_el_env,el){
	if (display_var.val == 0){
		element = window.atob(el)
		document.getElementById(display_el_mail).innerHTML = element
		document.getElementById(display_el_mail).style.color = "black"
		document.getElementById(display_el_env).innerHTML = '&nbsp;&nbsp;&nbsp;<a href=mailto:'+ window.atob(el) +'target=_top class="link fa fa-envelope"></a>'
		display_var.val = 1
	}
	else if (display_var.val == 1){
		document.getElementById(display_el_mail).innerHTML = "Click me"
		document.getElementById(display_el_mail).style.color = "#999"
		document.getElementById(display_el_env).innerHTML = ''
		display_var.val = 0
	}
}
