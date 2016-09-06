$(function(){
	var html = $("#people").html();
	var people = [
		{
			name:'Oleg',
			age:25,
			phone:'222111222',
			mail:'test1@gmail.com'
		},
		{
			name:'Sergey',
			age:30,
			phone:'287970222',
			mail:'test2@gmail.com'
		},
		{
			name:'Alex',
			age:30,
			phone:'6576822',
			mail:'test3@gmail.com'
		},
		{
			name:'Victor',
			age:58,
			phone:'222111222',
			mail:'test4@gmail.com'
		}
	];
	
	var content = tmpl(html,{data:people});
	
	$(".temp_block").append(content);
})