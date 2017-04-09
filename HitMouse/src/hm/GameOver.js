var hm=hm||{};
hm.GameOver=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.visible = false;
};
F2xExtend(hm.GameOver,F2xContainer);
hm.GameOver.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new hm.F2xAuto_26();
	_d0.name="mc";
	s.mc=_d0;
	Flash2x.d(_d0,{x:309.5,y:144.5});
	var _d1=new hm.F2xAuto_25();
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
