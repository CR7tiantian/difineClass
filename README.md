# difineClass
用两种方法定义一个类
第一种方法是通过构造函数定义类，this指向实例对象;缺点是用到了this和prototype,比较复杂;
第二种方法是创建一个对象，对象模拟类,对象里面定义一个方法，方法定义一个实例对象并返回这个实例对象；然后对象外面通过对象的方法创造实例;
优点是可以实现继承，私有属性，和共享数据
