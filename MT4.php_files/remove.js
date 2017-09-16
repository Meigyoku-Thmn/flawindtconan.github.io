function lv_remove(userid, postid, point)
{
	box = fetch_object('level_message_'+postid);
	potay = fetch_object('level_button_'+postid);
	total = fetch_object('level_total_'+userid);
	ss = '<a href="addpoint.php?do=doadd&userid='+userid+'&postid='+postid+'" onclick="javascript: openWindow(this.href, \'level_window\', \'statusbar=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,width=415,height=200\'); return false;"><img src="level_class/bg/button.gif" alt="+/- SP" border="0"><\/a>'
	lv_ajax = new vB_AJAX_Handler(true);
	lv_ajax.onreadystatechange(remove_response);
	lv_ajax.send('addpoint.php', 'do=remove&ajax=1&userid='+userid+'&postid='+postid+'&point='+point);	
}
function remove_response()
{
	if (lv_ajax.handler.readyState == 4 && lv_ajax.handler.status == 200)
	{
		res = lv_ajax.handler.responseText;
		if (res.substr(0,5) != 'Error') 
		{
			potay.innerHTML = ss;
			total.innerHTML = parseFloat(total.innerHTML) - 1;
			box.innerHTML = '';
			alert('SP Removed');	
		} else {
			alert('Something is wrong!');
		}
	}
}