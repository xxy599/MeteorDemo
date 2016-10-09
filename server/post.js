if(Posts.find().count() === 0){
	Posts.insert(
		{
			title : "西贝网",
			href: "http://www.cnbeta.com"
		}
	);

	Posts.insert(
		{
			title : "网易",
			href: "http://www.163.com"
		}
	);
	console.log('init data records:2');
}else{
	console.log('data records:' + Posts.find().count());
}

Meteor.publish('posts', function(){
	return Posts.find();
});