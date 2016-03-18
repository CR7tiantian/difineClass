function foo1() {
	this.age="cat";
	this.sayAge = function() {
		alert("hello");
	}
}
foo1.prototype.sayName = function() {
	alert("ppp")
}
var cat1 = new foo1();
alert(cat1.age);//cat
cat1.sayName();//ppp
cat1.sayAge();//hello
