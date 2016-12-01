function setDefault(){
	var textV = "请先搜问后，您的问题就在这里！"
	var v = document.getElementById("searchInput");
	if(v.value ==""){
		v.value = textV;}
	else if(v.value == textV){
		v.value = "";
	}
}
function switchStatus(obj){
  var obj1 = document.getElementById(obj);

  if(obj1.style.display == "none"){
		
		$('#'+obj).animate({ height: 'show', opacity: 'show' }, 1000);
	}else{
		
		$('#'+obj).animate({ height: 'hide', opacity: 'hide' }, 1000);
	}
}
function getElementWidth(objectId) {
	x = document.getElementById(objectId);
	return x.offsetWidth;
}
function getAbsoluteLeft(objectId) {
	// Get an object left position from the upper left viewport corner

	o = document.getElementById(objectId)
	oLeft = o.offsetLeft    // Get left position from the parent object
	while(o.offsetParent!=null) {   // Parse the parent hierarchy up to the document element
		oParent = o.offsetParent    // Get parent object reference
		oLeft += oParent.offsetLeft // Add parent left position
		o = oParent
	}
	
	return oLeft
}

function getAbsoluteTop(objectId) {
	// Get an object top position from the upper left viewport corner
	o = document.getElementById(objectId)
	oTop = o.offsetTop            // Get top position from the parent object
	while(o.offsetParent!=null) { // Parse the parent hierarchy up to the document element
		oParent = o.offsetParent  // Get parent object reference
		oTop += oParent.offsetTop // Add parent top position
		o = oParent
	}
	return oTop
}

/* Tip标签 */
function JT_show(linkId,contentObj){
	
	$('#dtip').remove();
	var cObj = document.getElementById(contentObj);
	
	$("body").append("<div id='dtip'><div id='leftSide'></div><div id='mainContent'>"+cObj.innerHTML+"</div></div>");//right side

	var o = document.getElementById(linkId);

	var clickElementx = getAbsoluteLeft(linkId)+getElementWidth(linkId)+10;

	var clickElementy = getAbsoluteTop(linkId);

	$('#dtip').css({left: clickElementx+"px", top: clickElementy+"px"});
	
	$('#dtip').show();

}
function JT_hide(){$('#dtip').remove();}
/* Tip标签 结束*/

/* 滑动打开*/
function slideShow(obj){
	obj1 = document.getElementById(obj);
	$(obj1).slideToggle(300);
	}
/* 滑动打开 结束*/	

/* 弹出窗口，锁屏 */
function setCate(){
	$.blockUI({ 
		message: $('#cate') ,
		css: {top:  ($(window).height() - 500) /2 + 'px', 
              left: ($(window).width() - 586) /2 + 'px',
			  width:'578px'} 
	});
}
function closeCate(){
		$.unblockUI();
	}
/* 弹出窗口，锁屏 结束*/