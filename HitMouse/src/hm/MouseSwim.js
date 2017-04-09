var hm=hm||{};
hm.MouseSwim=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.MouseSwim,F2xContainer);
hm.MouseSwim.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new hm.Mouse_2();
	Flash2x.d(_d0,{a:0.5531,b:0.4971});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
