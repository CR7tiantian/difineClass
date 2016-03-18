/法二，创建对象，定义一个方法，方法定义一个实例对象并返回,并有类的继承，私有属性
//1.1封装
var anotherObj = {
	
	createObj2:function() {
		var person = {};
		
		person.sex = "male";
		person.attributes = "football";
		return person;
	}
};
var obj = {
	 share:"javascript",
	createObj:function() {
//1.2继承
		var obj2 = anotherObj.createObj2();
		var pravite = "zzzlll";
		obj2.age = 23;
		obj2.work = "programming";
		obj2.say = function() {
			alert(obj.share);
		}
		obj2.change = function(x) {
			obj.share = x;
		};
		obj2.sayPravite = function() {
			alert(pravite);
		}
		return obj2;
	}
};
var obj3 = obj.createObj();// 实现继承
alert(obj3.sex);//"male"
alert(obj3.work);//"programming";
//1.3私有属性和方法
alert(obj3.pravite);//undefined;
obj3.sayPravite();//"zzzlll"
 //1.4数据共享
 var obj4 = obj.createObj();
 obj4.say();//"javascript";
 obj3.change("qqqqq");
 obj4.say();//"qqqqq";
