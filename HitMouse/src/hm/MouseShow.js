var hm=hm||{};
hm.MouseShow=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.MouseShow,F2xMovieClip);
hm.MouseShow.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var mask1=new F2xMovieClip();
	var _d0=Flash2x.s({type:0,data:"AiAOmQlhgSkLlnIgJgMIgjgzQgqg+glhEIgFgFQj+jnAfknQAgkqEkjbQEkjbGfgfQGdgfGUD0QGUD1g5HbQglEziSCCQhQCNhOBZQheBthzA+Qh4A/ikAYQhpAPiHAAQhGAAhQgFg"},{type:0,color:"#000000"},null);
	var _d1=new hm.Mouse_1();
	_d1.name="m1";
	s.m1=_d1;
	_d1.mask=mask1;
	s.a().b(14).b(1);
	mask1.a().b(14).c(_d0,{x:-1.516,y:-0.06978}).b(1).c(_d0,{x:-1.516,y:-0.06978});
	s.a().b(1).c(_d1,{x:-50.75,y:58.1,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:52.55,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:46.95,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:41.4,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:35.8,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:30.25,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:24.65,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:19.1,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:13.55,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:7.95,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:2.4,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:-3.2,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:-8.75,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:-14.35,a:0.4742,b:0.4742}).b(1).c(_d1,{x:-50.75,y:-19.9,a:0.4742,b:0.4742});
	s.as(function(){this.m1.gotoAndPlay(0);this.stop();}.bind(this),14);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
};
