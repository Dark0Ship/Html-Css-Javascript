var title;
var message;
title="웹지니의 특별한 제안";
message= '<a href=\"sale.html\">25% 할인!</a>';

var elTitle=document.getElementById('title');
elTitle.textContent=title;
var elNote=document.getElementById('note');
elNote.innerHTML=message;