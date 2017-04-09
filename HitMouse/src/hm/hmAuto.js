var hm=hm||{};
hm.F2xAuto_25=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_25,F2xContainer);
hm.F2xAuto_25.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"EgwWAWkMAAAgtIMBgtAAAMAAAAtIg"},{type:0,color:"rgba(255,255,255,0.8)"},null);
	Flash2x.d(_d0,{x:309.5,y:144.5});
	s.addChild(_d0);
};
hm.F2xAuto_26=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_26,F2xContainer);
hm.F2xAuto_26.prototype.initUI=function(){
	var s = this;
	var _d0=new hm.F2xAuto_29();
	_d0.name="title";
	s.title=_d0;
	Flash2x.d(_d0,{x:-136.5,y:-65.45});
	var _d2=new hm.F2xAuto_27();
	_d2.initButton();
	_d2.name="playAgain";
	s.playAgain=_d2;
	Flash2x.d(_d2,{x:-39,y:61.9});
	_d2.initButton();
	var _d1=Flash2x.t(0,decodeURI("15"),54,"#FF8908","Microsoft YaHei",2,2,244,71.3,56,"center",false,false,"multiline",false);
	_d1.name="score";
	s.score=_d1;
	Flash2x.d(_d1,{x:-124,y:-30.45});
	var _d3=new hm.F2xAuto_30();
	Flash2x.d(_d3,{x:-210,y:-98,o:0.6719});
	s.addChild(_d3);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d0);
};
hm.F2xAuto_30=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_30,F2xContainer);
hm.F2xAuto_30.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"EAgTAOxMhAlAAAIAA9hMBAlAAAg"},null,{type:0,color:"#FF6600",lineWidth:4,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:210.7,y:95.5});
	var _d0=Flash2x.s({type:0,data:"EggSAOwIAA9gMBAlAAAIAAdgg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d0,{x:210.7,y:95.5});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_27=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_27,F2xMovieClip);
hm.F2xAuto_27.prototype.initUI=function(){
	var s = this;
	var _d0=new hm.F2xAuto_28();
	s.a().b(1).c(_d0).b(1).c(_d0,{x:2.6,y:0.65,a:0.95,b:0.95});
};
hm.F2xAuto_28=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_28,F2xContainer);
hm.F2xAuto_28.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.t(0,decodeURI("%E5%86%8D%E7%8E%A9%E4%B8%80%E6%AC%A1"),12,"#FF8908","Microsoft YaHei",2,2,77.55,15.55,14,"center",false,false,"multiline",false);
	var _d2=Flash2x.s({type:0,data:"AGaBkIszAAIAAjHIMzAAg"},null,{type:0,color:"#FF8908",lineWidth:2,caps:"square",joints:"miter",miter:"10"});
	Flash2x.d(_d2,{x:41,y:10});
	var _d1=Flash2x.s({type:0,data:"AmZBjIAAjGIMyAAIAADGg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d1,{x:41,y:10});
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d0);
};
hm.F2xAuto_29=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_29,F2xMovieClip);
hm.F2xAuto_29.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.t(0,decodeURI("%E6%81%AD%E5%96%9C%E6%82%A8%EF%BC%8C%E6%82%A8%E6%9C%AC%E6%AC%A1%E6%B8%B8%E6%88%8F%E7%9A%84%E6%88%90%E7%BB%A9%E6%98%AF%EF%BC%9A"),20,"#555555","Microsoft YaHei",2,2,280.2,26.4,22,"left",false,false,"multiline",false);
	var _d1=Flash2x.t(0,decodeURI("%E5%BE%88%E9%81%97%E6%86%BE%EF%BC%8C%E6%B2%A1%E6%9C%89%E6%89%93%E5%88%B0%E6%9C%89%E5%A5%96%E5%93%81%E7%9A%84%E5%9C%B0%E9%BC%A0%EF%BC%8C%E6%8D%A2%E4%B8%AA%E6%96%B9%E5%90%91%E5%86%8D%E6%9D%A5%E4%B8%80%E6%AC%A1"),18,"#555555","Microsoft YaHei",2,2,323,49.5,20,"center",false,false,"multiline",false);
	s.a().b(1);
	s.a().b(1).c(_d0).b(1).c(_d1,{y:-6});
	s.as(function(){this.stop();}.bind(this),0);
};
hm.aqwswdedede=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.aqwswdedede,F2xContainer);
hm.aqwswdedede.prototype.initUI=function(){
	var s = this;
	var _d3=Flash2x.s({type:0,data:"AAkG/QhAgIg2g/Qgzg9ADhCQABhBA3gwIDii+QA4gwBAAJQBDAJAyA8QA2A9gDBCQgDA/g4A0IjiC/QgyAng2AAIgPgBgAD8BLQgHACgGAGIi8CfQgIAGgCAHQgDAGAFAGQAHAIAHgCQAIABAHgGIC8igQAHgGABgJQADgFgHgIQgEgFgFAAIgDAAgAk6BmQgCgDABgDQgDgDACgCIFBkPQAJgJADgGQgCgHgDgEQgEgFgHgCQgGgBgKAIIlDEPIgEAEIgDgFIhdhrQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgFADgCIHOmKIAGADIBVBkQACACgHAKIgMASQgFAJABACIADADQACgCAEAAQAYAAATAIQATAIATAXQAPATAHAaQAHAbgLAZQgIAbgdAXIl/FFIgEAEg"},{type:0,color:"#663333"},null);
	Flash2x.d(_d3,{x:77.1732,y:68.3164});
	var _d2=Flash2x.s({type:0,data:"ArIgaIMgqGQGKEPDnHDIgFAFIkMDPIjXCnIk7D0Qmfk2jPmFg"},{type:0,color:"#FFFF00"},null);
	Flash2x.d(_d2,{x:78.9,y:71.9});
	var _d1=Flash2x.s({type:0,data:"AMLPgQgTgSgJgXIritCIDXikILTNPIAgAlQARAcAAAkQAAA2gmAlQgmAmg2AAQg1AAgmgmgAokGNQjIgOiEiYQiDiXAOjHQAFhBASg4IADgLIAwhXQDOGGGgE1Qh6AlhfAAIgegBgAh5vYIBYgaIAIgBIAMgEQA4gOBAAAQDKAACNCNQCOCOAADKQAABpgmBZIg1BaQjmnEmIkQg"},{type:0,color:"#663333"},null);
	Flash2x.d(_d1,{x:100.0324,y:103.075});
	var _d0=Flash2x.s({type:0,data:"AgPgRIALAJQALALAJAPg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d0,{x:196.775,y:185});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
};
hm.F2xAuto_9=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_9,F2xContainer);
hm.F2xAuto_9.prototype.initUI=function(){
	var s = this;
	var _d2=new hm.sqwswdwd();
	Flash2x.d(_d2,{x:-16.45,y:-19.95,a:0.9801,d:180});
	var _d1=new hm.sqwswdwd();
	Flash2x.d(_d1,{x:18,y:-21.95});
	var _d0=Flash2x.s({type:0,data:"AiJDEQg5hSAAhyIABgQQAAgVADgVIADgSQAHgmAPggQALgaARgXQA5hRBQAAIAQABQBGAHAzBJQAQAXANAaIABADQAVAwAGA5IABAWIAAAQQAAByg6BSQg5BRhQAAQhQAAg5hRg"},{type:0,color:"#FFE081"},null);
	Flash2x.d(_d0,{x:2.425,y:9.625});
	var _d3=new hm.sqswdwedede();
	Flash2x.d(_d3,{x:-48.25,y:-39.25});
	s.addChild(_d3);
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
};
hm.sqswdwedede=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.sqswdwedede,F2xContainer);
hm.sqswdwedede.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AnXC3QABgeAEgZQAIhFAWgiQCnkHD5BeQD7hVBPBgQBQBgAjBAIABAEQAdAcARAzQiJhmjDBTQhdAdgwgFIhxgKIgvAFQhcAKgxAIIgMACQhGANhSAoIgFACIAAgCgACgBbIgMAAIAkAAIgDADQgGgCgPgBg"},{type:0,color:"#C45A44"},null);
	Flash2x.d(_d1,{x:47.275,y:-2.5242});
	var _d0=Flash2x.s({type:0,data:"Am0C0IgslMIgBgzIAAgrIAFgCQBSgnBGgOIAMgCQAxgIBcgJIAvgFIBxAKQAwAFBdgeQDDhTCJBnIAFARQAGAZAEAeIAEAtIAAACIAAACIABAIIgBErQgFDvjYANIgTABIjCANQg1AEgwAAQlbAAgjjGgACWlTQAPABAGACIADgEIgkAAIAMABg"},{type:0,color:"#EC6535"},null);
	Flash2x.d(_d0,{x:48.275,y:40.7133});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.sqwswdwd=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.sqwswdwd,F2xContainer);
hm.sqwswdwd.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AgUBTIg6AsIgBABIgCABIgHgKQgTgYgOg/IAAgCIAAgCIgDgPIgMg9IAAgBIgNhJQgBgGACgGIADgHIACAGQAGAWAZAoQAhAzAEAaIADATIABADQAEAXgDAmIAHgVQAcgOAIACQAVgCAWAbIAAABQAFAGADAjQAPg0AWgoIABgBQAXgmAthFIAAAAIABgBIATgeQgCANAAARIAAADIgFAdQgMA2gaAvQgpBEgpAVQgYgJgTgyg"},{type:0,color:"#BF4D00"},null);
	Flash2x.d(_d1,{x:15.0583,y:16.675});
	var _d0=Flash2x.s({type:0,data:"AANBmIAAgBQgWgbgVADQgIgCgcANIgHAWQADgmgEgYIgBgDIgDgTQgEgaghgzQgZgngGgWIA9gRQA0gOAlAAQA0AAA0AZQAaANANANIAAAEIgTAeIgBABIAAABQgtBCgXApIgBABQgWAngPA1QgDgkgFgGg"},{type:0,color:"#EC6535"},null);
	Flash2x.d(_d0,{x:15.375,y:14.425});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_8=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_8,F2xContainer);
hm.F2xAuto_8.prototype.initUI=function(){
	var s = this;
	var _d3=new hm.sqswdwedede();
	Flash2x.d(_d3,{x:-48.25,y:-39.25});
	var _d2=new hm.sqwswdwd();
	Flash2x.d(_d2,{x:-16.45,y:-19.95,a:0.9801,d:180});
	var _d1=new hm.sqwswdwd();
	Flash2x.d(_d1,{x:18,y:-21.95});
	var _d0=Flash2x.s({type:0,data:"AiJDEQg5hSAAhyIABgQQAAgVADgVIADgSQAHgmAPggQALgaARgXQA5hRBQAAIAQABQBGAHAzBJQAQAXANAaIABADQAVAwAGA5IABAWIAAAQQAAByg6BSQg5BRhQAAQhQAAg5hRg"},{type:0,color:"#FFE081"},null);
	Flash2x.d(_d0,{x:2.425,y:9.625});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
};
hm.aqswdeded=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.aqswdeded,F2xContainer);
hm.aqswdeded.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AlEENIBbisIAAgBIBKh/QgFAGADgFQDGmmEgBhQiVAUhwB2QiECQAADKQAAAfADAeIABALIAAgBIAQCvg"},{type:0,color:"#EC6535"},null);
	Flash2x.d(_d1,{x:32.575,y:37.4935});
	var _d0=Flash2x.s({type:0,data:"AkEFuIg+gYIgQiuIABAAIgBgKQgEgeAAggQAAjJCHiRQBwh1CTgVQBMAZBTA/QDjDoilDQQg5BYiSBCQhGAhhfAcQg7AShEAOIAAABg"},{type:0,color:"#FBD779"},null);
	Flash2x.d(_d0,{x:59.9098,y:40.7});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.swswdwdesesd=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.swswdwdesesd,F2xContainer);
hm.swswdwdesesd.prototype.initUI=function(){
	var s = this;
	var _d4=Flash2x.s({type:0,data:"ADQAjImfhF"},null,{type:0,color:"#663300",lineWidth:1.5,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d4,{x:139.425,y:103.575});
	var _d3=Flash2x.s({type:0,data:"ADGhJImLCS"},null,{type:0,color:"#663300",lineWidth:1.5,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d3,{x:137.325,y:83.05});
	var _d2=Flash2x.s({type:0,data:"AjBAgIGDg/"},null,{type:0,color:"#663300",lineWidth:1.5,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d2,{x:19.4,y:112.325});
	var _d1=Flash2x.s({type:0,data:"Ai3hDIFvCH"},null,{type:0,color:"#663300",lineWidth:1.5,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:23.175,y:84.725});
	var _d0=Flash2x.s({type:0,data:"AgWJxIifgPQhsgLhdggQgvgVgcgMIAFgGQhzgwgkhnQgrh6BFjIIgHiQQgDgtAFgpQAEgxANgsQAPgzAZgtQAfg4AugvQASgUAVgQQA0gpBtgtQBkghB/gDQCEgCBkAhQBrAlBWBjQAhArAYAzQAVAsAOAxIANA1QALA6ADBCIAAAEIAAAKIALBeQCLDehTCNQg1BZiLA5IACAAQiCA0h2AUIgFABIgOACIgRACIADAAQhPAagvAAIgPgBg"},{type:0,color:"#EC6535"},null);
	Flash2x.d(_d0,{x:80.2914,y:62.6024});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
	s.addChild(_d4);
};
hm.F2xAuto_7=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_7,F2xContainer);
hm.F2xAuto_7.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AgLADIgKgQIAJgHIAAAAIAKgJIATAMIAAAAIAFADIgDAIIAAAAIgPAkIgPgbg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d1,{x:5.2,y:6.0625});
	var _d0=Flash2x.s({type:0,data:"AgYArQgQgRgLgNQgGABgFgDQgFgDgCgFQAAgBAAAAQAAgBAAAAQAAAAAAABQAAABABABQACAEAOgHQANgGAPgcQAHgNgCABIAAgBQABgGAFgEQAFgEAGAAQAEABAEAFQAEAFgBAGIAAADQAfAmAeALQgKAEgGAAQgCABgGgCIgCAFIAAABQghAmgLAFQgIgBgQgRgAgPgGIAAABIgJAFIAKARIAPAbIAPgmIAAAAIADgGIgFgCIAAAAIgTgMIgKAIg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d0,{x:5.5189,y:4.6219});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_6=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_6,F2xContainer);
hm.F2xAuto_6.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AA+geQAaAUgVAPQgUARgSARQgRAQgMgGQgJgHgcgMQgdgKgIgQQgEgGAEgJQAEgJANgKQAZgUAiAAQAkAAAYAUg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:0.01915,y:0.01685});
	var _d0=Flash2x.s({type:0,data:"AAAAxQgJgHgcgMQgdgKgIgQQgEgGAEgJQAEgJANgKQAZgUAiAAQAkAAAYAUQAaAUgVAPIgmAiQgMAMgKAAQgDAAgEgCg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d0,{x:0.01915,y:0.01685});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_5=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_5,F2xContainer);
hm.F2xAuto_5.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"AA+geQAaAUgVAPQgUARgSARQgRAQgMgGQgJgHgcgMQgdgKgIgQQgEgGAEgJQAEgJANgKQAZgUAiAAQAkAAAYAUg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:0.01915,y:0.01685});
	var _d0=Flash2x.s({type:0,data:"AAAAxQgJgHgcgMQgdgKgIgQQgEgGAEgJQAEgJANgKQAZgUAiAAQAkAAAYAUQAaAUgVAPIgmAiQgMAMgKAAQgDAAgEgCg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d0,{x:0.01915,y:0.01685});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.sqs2s3wd2=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.sqs2s3wd2,F2xMovieClip);
hm.sqs2s3wd2.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AhuBuQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAAA0geAoIgQASQguAvhBAAQhAAAgugvgAgRgjQgOAOAAAUQAAASAOAOQAOAOASAAQATAAAPgOQAOgOAAgSQAAgUgOgOQgPgOgTAAQgSAAgOAOg"},{type:0,color:"#FFFFFF"},null);
	var _d1=Flash2x.s({type:0,data:"AggAhQgPgOAAgTQAAgSAPgOQANgPATAAQATAAAOAPQAOAOAAASQAAATgOAOQgOAOgTABQgTgBgNgOg"},{type:0,color:"#663300"},null);
	var _d2=Flash2x.s({type:0,data:"ACdAAQAAA0geAoQgHAJgJAJQguAvhBAAQhAAAgugvQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAgAAxAfQgPAOgTAAQgSAAgOgOQgOgOAAgSQAAgUAOgOQAOgOASAAQATAAAPAOQAOAOAAAUQAAASgOAOg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	var _d3=new hm.F2xAuto_31();
	var _d4=new hm.F2xAuto_32();
	s.a().b(9).c(_d0,{x:15.725,y:15.725}).c(_d1,{x:17.25,y:15.45}).c(_d2,{x:15.725,y:15.725}).b(1).c(_d3,{x:15.7,y:15.7}).b(1).c(_d3,{x:15.7,y:15.7,b:0.5318}).b(1).c(_d4,{x:15.7,y:15.7,b:0.0637}).b(1).c(_d4,{x:15.7,y:15.7,b:0.3758}).b(1).c(_d4,{x:15.7,y:15.7,b:0.6879}).b(13).c(_d3,{x:15.7,y:15.7}).b(1).c(_d3,{x:15.7,y:15.7}).b(1).c(_d3,{x:15.7,y:15.7,b:0.5318}).b(1).c(_d4,{x:15.7,y:15.7,b:0.0637}).b(1).c(_d4,{x:15.7,y:15.7,b:0.3758}).b(1).c(_d4,{x:15.7,y:15.7,b:0.6879}).b(1).c(_d3,{x:15.7,y:15.7}).b(1).c(_d3,{x:15.7,y:15.7,b:0.5318}).b(1).c(_d4,{x:15.7,y:15.7,b:0.0637}).b(1).c(_d4,{x:15.7,y:15.7,b:0.3758}).b(1).c(_d4,{x:15.7,y:15.7,b:0.6879}).b(28).c(_d3,{x:15.7,y:15.7});
};
hm.F2xAuto_31=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_31,F2xContainer);
hm.F2xAuto_31.prototype.initUI=function(){
	var s = this;
	var _d2=Flash2x.s({type:0,data:"ACdAAQAAA0geAoQgHAJgJAJQguAvhBAAQhAAAgugvQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAgAA/gBQAAASgOAOQgPAOgTAAQgSAAgOgOQgOgOAAgSQAAgUAOgOQAOgOASAAQATAAAPAOQAOAOAAAUg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d2,{x:0.025,y:0.025});
	var _d1=Flash2x.s({type:0,data:"AggAhQgPgOAAgTQAAgSAPgOQANgPATAAQATAAAOAPQAOAOAAASQAAATgOAOQgOAOgTABQgTgBgNgOg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d1,{x:1.55,y:-0.25});
	var _d0=Flash2x.s({type:0,data:"AhuBuQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAAA0geAoIgQASQguAvhBAAQhAAAgugvgAgRgjQgOAOAAAUQAAASAOAOQAOAOASAAQATAAAPgOQAOgOAAgSQAAgUgOgOQgPgOgTAAQgSAAgOAOg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d0,{x:0.025,y:0.025});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
};
hm.F2xAuto_32=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_32,F2xContainer);
hm.F2xAuto_32.prototype.initUI=function(){
	var s = this;
	var _d2=Flash2x.s({type:0,data:"AAxAfQgPAOgTAAQgSAAgOgOQgOgOAAgSQAAgUAOgOQAOgOASAAQATAAAPAOQAOAOAAAUQAAASgOAOgACdAAQAAA0geAoQgHAJgJAJQguAvhBAAQhAAAgugvQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d2,{x:0.025,y:0.025});
	var _d1=Flash2x.s({type:0,data:"AggAhQgPgOAAgTQAAgSAPgOQANgPATAAQATAAAOAPQAOAOAAASQAAATgOAOQgOAOgTABQgTgBgNgOg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d1,{x:1.55,y:-0.25});
	var _d0=Flash2x.s({type:0,data:"AhuBuQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAAA0geAoIgQASQguAvhBAAQhAAAgugvgAgRgjQgOAOAAAUQAAASAOAOQAOAOASAAQATAAAPgOQAOgOAAgSQAAgUgOgOQgPgOgTAAQgSAAgOAOg"},{type:0,color:"#FFFFFF"},null);
	Flash2x.d(_d0,{x:0.025,y:0.025});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
};
hm.F2xAuto_20=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_20,F2xContainer);
hm.F2xAuto_20.prototype.initUI=function(){
	var s = this;
	var _d3=new hm.sqswdwedede();
	Flash2x.d(_d3,{x:-48.25,y:-28.75});
	var _d2=new hm.sqwswdwd();
	Flash2x.d(_d2,{x:-16.45,y:-9.45,a:0.9801,d:180});
	var _d1=new hm.sqwswdwd();
	Flash2x.d(_d1,{x:18,y:-11.45});
	var _d0=Flash2x.s({type:0,data:"AiJDEQg5hSAAhyIABgQQAAgVADgVIADgSQAHgmAPggQALgaARgXQA5hRBQAAIAQABQBGAHAzBJQAQAXANAaIABADQAVAwAGA5IABAWIAAAQQAAByg6BSQg5BRhQAAQhQAAg5hRg"},{type:0,color:"#FFE081"},null);
	Flash2x.d(_d0,{x:2.425,y:20.125});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
};
hm.F2xAuto_19=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_19,F2xContainer);
hm.F2xAuto_19.prototype.initUI=function(){
	var s = this;
	var _d3=new hm.sqswdwedede();
	Flash2x.d(_d3,{x:-48.25,y:-28.75});
	var _d2=new hm.sqwswdwd();
	Flash2x.d(_d2,{x:-16.45,y:-9.45,a:0.9801,d:180});
	var _d1=new hm.sqwswdwd();
	Flash2x.d(_d1,{x:18,y:-11.45});
	var _d0=Flash2x.s({type:0,data:"AiJDEQg5hSAAhyIABgQQAAgVADgVIADgSQAHgmAPggQALgaARgXQA5hRBQAAIAQABQBGAHAzBJQAQAXANAaIABADQAVAwAGA5IABAWIAAAQQAAByg6BSQg5BRhQAAQhQAAg5hRg"},{type:0,color:"#FFE081"},null);
	Flash2x.d(_d0,{x:2.425,y:20.125});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
};
hm.F2xAuto_18=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_18,F2xContainer);
hm.F2xAuto_18.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AgUA7QAFAEAPAGQAMAGAEAAAgGhKIAbBx"},null,{type:0,color:"#663300",lineWidth:1.5,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d0,{x:1.475,y:3.75});
	s.addChild(_d0);
};
hm.F2xAuto_17=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_17,F2xContainer);
hm.F2xAuto_17.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"ABEgCQgRASgPATQgPATgMgFQgLgFgdgHQgegGgKgOQgFgHACgKQADgHAKgMQAXgYAjgFQAhgFAbAPQAeAQgTAUg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:0.01484,y:0.008046});
	var _d0=Flash2x.s({type:0,data:"AAJAxQgLgFgdgHQgegGgKgOQgFgHACgKQADgHAKgMQAXgYAjgFQAhgFAbAPQAeAQgTAUIggAlQgMAPgKAAIgFgBg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d0,{x:0.01484,y:0.008046});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_16=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_16,F2xContainer);
hm.F2xAuto_16.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.s({type:0,data:"ABEgCQgRASgPATQgPATgMgFQgLgFgdgHQgegGgKgOQgFgHACgKQADgHAKgMQAXgYAjgFQAhgFAbAPQAeAQgTAUg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d1,{x:0.01484,y:0.008046});
	var _d0=Flash2x.s({type:0,data:"AAJAxQgLgFgdgHQgegGgKgOQgFgHACgKQADgHAKgMQAXgYAjgFQAhgFAbAPQAeAQgTAUIggAlQgMAPgKAAIgFgBg"},{type:0,color:"#663300"},null);
	Flash2x.d(_d0,{x:0.01484,y:0.008046});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_15=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_15,F2xContainer);
hm.F2xAuto_15.prototype.initUI=function(){
	var s = this;
	var _d1=new hm.sqwswdwd();
	Flash2x.d(_d1,{x:-22.25,y:5.45,a:0.9801,c:50.984,d:-129.0163});
	var _d0=new hm.sqwswdwd();
	Flash2x.d(_d0,{x:21.7,y:-3.6,r:-45});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_14=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_14,F2xContainer);
hm.F2xAuto_14.prototype.initUI=function(){
	var s = this;
	var _d1=new hm.sqwswdwd();
	Flash2x.d(_d1,{x:-22.25,y:5.45,a:0.9801,c:50.984,d:-129.0163});
	var _d0=new hm.sqwswdwd();
	Flash2x.d(_d0,{x:21.7,y:-3.6,r:-45});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_13=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_13,F2xContainer);
hm.F2xAuto_13.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AiJDEQg5hSAAhyIABgQQAAgVADgVIADgSQAHgmAPggQALgaARgXQA5hRBQAAIAQABQBGAHAzBJQAQAXANAaIABADQAVAwAGA5IABAWIAAAQQAAByg6BSQg5BRhQAAQhQAAg5hRg"},{type:0,color:"#FFE081"},null);
	Flash2x.d(_d0,{x:0.025,y:0.025});
	s.addChild(_d0);
};
hm.F2xAuto_12=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_12,F2xContainer);
hm.F2xAuto_12.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AiJDEQg5hSAAhyIABgQQAAgVADgVIADgSQAHgmAPggQALgaARgXQA5hRBQAAIAQABQBGAHAzBJQAQAXANAaIABADQAVAwAGA5IABAWIAAAQQAAByg6BSQg5BRhQAAQhQAAg5hRg"},{type:0,color:"#FFE081"},null);
	Flash2x.d(_d0,{x:0.025,y:0.025});
	s.addChild(_d0);
};
hm.F2xAuto_11=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_11,F2xContainer);
hm.F2xAuto_11.prototype.initUI=function(){
	var s = this;
	var _d1=new hm.sdwddwdwws();
	Flash2x.d(_d1,{x:-51.8,y:-15.15,a:1.4936,b:1.4936,r:-8.7222});
	var _d0=new hm.sdwddwdwws();
	Flash2x.d(_d0,{x:44.7,y:-31.25,a:1.494,b:1.494,c:-8.722,d:171.3});
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.sdwddwdwws=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.sdwddwdwws,F2xMovieClip);
hm.sdwddwdwws.prototype.initUI=function(){
	var s = this;
	var _d0=new hm.axswwdededfef();
	var _d1=Flash2x.s({type:0,data:"AhuBuQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAAA0geAoIgQASQguAvhBAAQhAAAgugvg"},{type:0,color:"#FFFFFF"},null);
	var _d2=Flash2x.s({type:0,data:"ACdAAQAAA0geAoQgHAJgJAJQguAvhBAAQhAAAgugvQgugtAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAg"},null,{type:0,color:"#663300",lineWidth:3,caps:"round",joints:"round",miter:"10"});
	s.a().b(1).c(_d0,{x:4.3,y:4.8}).b(1).c(_d0,{x:1.3,y:9.05,a:0.999,b:0.999,r:-18.8185}).b(1).c(_d0,{x:-0.2,y:14.15,a:0.9984,b:0.9984,r:-37.8579}).b(1).c(_d0,{x:0.05,y:19.45,a:0.9985,b:0.9985,r:-56.9047}).b(1).c(_d0,{x:2.05,y:24.35,a:0.9992,b:0.9992,r:-75.9362}).b(1).c(_d0,{x:5.4,y:28.3,a:0.9997,b:0.9997,r:-94.5601}).b(1).c(_d0,{x:9.95,y:30.95,a:0.9988,b:0.9988,r:-113.5765}).b(1).c(_d0,{x:15.15,y:32.05,a:0.9983,b:0.9983,r:-132.6191}).b(1).c(_d0,{x:20.4,y:31.35,a:0.9986,b:0.9986,r:-151.6646}).b(1).c(_d0,{x:25.15,y:29,a:0.9995,b:0.9995,r:-170.6887}).b(1).c(_d0,{x:28.75,y:25.3,a:0.9995,b:0.9995,r:170.6887}).b(1).c(_d0,{x:31,y:20.55,a:0.9986,b:0.9986,r:151.6646}).b(1).c(_d0,{x:31.65,y:15.25,a:0.9983,b:0.9983,r:132.6191}).b(1).c(_d0,{x:30.55,y:10.15,a:0.9988,b:0.9988,r:113.5765}).b(1).c(_d0,{x:27.8,y:5.6,a:0.9997,b:0.9997,r:94.5601}).b(1).c(_d0,{x:23.85,y:2.25,a:0.9992,b:0.9992,r:75.9362}).b(1).c(_d0,{x:18.95,y:0.35,a:0.9985,b:0.9985,r:56.9047}).b(1).c(_d0,{x:13.6,y:0.25,a:0.9984,b:0.9984,r:37.8579}).b(1).c(_d0,{x:8.5,y:1.75,a:0.999,b:0.999,r:18.8185}).b(1).c(_d0,{x:4.3,y:4.8});
	s.a().b(20).c(_d1,{x:15.725,y:15.725}).c(_d2,{x:15.725,y:15.725});
};
hm.axswwdededfef=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.axswwdededfef,F2xContainer);
hm.axswwdededfef.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AgaBwQgegHgXgXQgigiAAgvQAAgtAigiQAhghAuAAQAvAAAhAhQAfAfADArQAAAMgCALQgLAigbARQgaAQgkgJQgBAAgLgDQgKgDgRgMQgGgEgEgEQgDgCgCgCQgSgSAAgaQAAgYASgSQASgSAYAAQAZAAASASQATASgCAXQgCAZgSAKQgSAKgggQQAFACAFAAQAKAAAIgJQAJgJAAgMQAAgKgJgIQgIgJgKAAQgNAAgIAJ"},null,{type:0,color:"#663300",lineWidth:1.5,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d0,{x:11.43,y:11.28});
	s.addChild(_d0);
};
hm.F2xAuto_10=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_10,F2xMovieClip);
hm.F2xAuto_10.prototype.initUI=function(){
	var s = this;
	var _d0=new hm.sdwddwdwws();
	var _d1=new hm.sdwddwdwws();
	s.a().b(20).c(_d0,{x:44.7,y:-31.25,a:1.494,b:1.494,c:-8.722,d:171.3}).g("loop",0,0).c(_d1,{x:-51.8,y:-15.15,a:1.4936,b:1.4936,r:-8.7222}).g("loop",0,0);
};
hm.swdedrfrefd=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.swdedrfrefd,F2xMovieClip);
hm.swdedrfrefd.prototype.initUI=function(){
	var s = this;
	var _d0=new hm.sqswdedd();
	var _d1=new hm.sqswdedd();
	var _d2=new hm.sqswdedd();
	s.a().b(25).b(1);
	s.a().b(2).b(23).c(_d0,{x:-7.55,y:48.75,r:-135}).b(1);
	s.a().b(3).b(22).c(_d1,{x:-41.65,y:11.2,r:-74.9998}).b(1);
	s.a().b(25).c(_d2,{x:1.2,y:-18.55,a:0.7847,b:0.7847}).b(1);
	s.as(function(){this.stop();}.bind(this),25);
};
hm.sqswdedd=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.sqswdedd,F2xMovieClip);
hm.sqswdedd.prototype.initUI=function(){
	var s = this;
	var _d0=new hm.F2xAuto_33();
	var _d1=new hm.F2xAuto_34();
	s.a().b(1).c(_d0,{x:31.5,y:33.35,a:0.2282,b:0.2282}).b(1).c(_d0,{x:71.05,y:25.95,a:0.4142,b:0.4142,r:86.9464}).b(1).c(_d0,{x:99.65,y:20.65,a:0.5479,b:0.5479,r:149.447}).b(1).c(_d0,{x:118.1,y:17.3,a:0.6351,b:0.6351,r:-170.1887}).b(1).c(_d0,{x:129.7,y:15.05,a:0.6891,b:0.6891,r:-144.6322}).b(1).c(_d0,{x:138.3,y:13.45,a:0.7291,b:0.7291,r:-125.8367}).b(1).c(_d0,{x:145.4,y:12.15,a:0.7634,b:0.7634,r:-110.0229}).b(1).c(_d0,{x:151.7,y:10.95,a:0.7933,b:0.7933,r:-96.2577}).b(1).c(_d0,{x:157.2,y:10,a:0.8193,b:0.8193,r:-84.2238}).b(1).c(_d0,{x:162.15,y:9,a:0.8421,b:0.8421,r:-73.4368}).b(1).c(_d0,{x:166.65,y:8.2,a:0.8628,b:0.8628,r:-63.4535}).b(1).c(_d0,{x:170.75,y:7.4,a:0.882,b:0.882,r:-54.4167}).b(1).c(_d0,{x:174.65,y:6.7,a:0.8999,b:0.8999,r:-45.9047}).b(1).c(_d0,{x:178.3,y:6,a:0.9172,b:0.9172,r:-37.8726}).b(1).c(_d0,{x:181.8,y:5.4,a:0.9341,b:0.9341,r:-30.0766}).b(1).c(_d0,{x:185.5,y:4.75,a:0.9515,b:0.9515,r:-22.0536}).b(1).c(_d0,{x:189.55,y:3.95,a:0.971,b:0.971,r:-13.0542}).b(1).c(_d1,{x:195.6,y:2.8});
};
hm.F2xAuto_34=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_34,F2xContainer);
hm.F2xAuto_34.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AiZCGIihiMIDQg5IB6kNIBTEOIDYBFIicByIAyDOIjHheIjABkg"},{type:0,color:"#FFFF33"},null);
	Flash2x.d(_d0,{x:0.025,y:0.025});
	s.addChild(_d0);
};
hm.F2xAuto_33=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_33,F2xContainer);
hm.F2xAuto_33.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"AiZCGIihiMIDQg5IB6kNIBTEOIDYBFIicByIAyDOIjHheIjABkg"},{type:0,color:"#FFFF33"},null);
	Flash2x.d(_d0,{x:0.025,y:0.025});
	s.addChild(_d0);
};
hm.F2xAuto_24=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_24,F2xContainer);
hm.F2xAuto_24.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("hm","F2xAuto_40");
	Flash2x.d(_d0,{y:4});
	s.addChild(_d0);
};
hm.F2xAuto_21=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_21,F2xContainer);
hm.F2xAuto_21.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"EgrpAQuMAAAghbMBXTAAAMAAAAhbg"},{type:0,color:"rgba(255,255,255,0)"},null);
	Flash2x.d(_d0,{x:309.5,y:144.5,a:1.107,b:1.35});
	s.addChild(_d0);
};
hm.F2xAuto_35=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_35,F2xContainer);
hm.F2xAuto_35.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"EgudAVBMAAAgqAMBc7AAAMAAAAqAg"},{type:0,color:"#FF0000"},null);
	Flash2x.d(_d0,{x:309.5,y:144.5,a:1.04,b:1.074});
	s.addChild(_d0);
};
hm.F2xAuto_1=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_1,F2xContainer);
hm.F2xAuto_1.prototype.initUI=function(){
	var s = this;
	var _d1=new hm.F2xAuto_0();
	_d1.initButton();
	_d1.name="starBtn";
	s.starBtn=_d1;
	Flash2x.d(_d1,{x:312.4,y:200.5});
	_d1.initButton();
	var _d0=Flash2x.b("hm","F2xAuto_38");
	var _d2=new hm.F2xAuto_24();
	Flash2x.d(_d2,{y:-4});
	s.addChild(_d2);
	s.addChild(_d0);
	s.addChild(_d1);
};
hm.F2xAuto_0=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(hm.F2xAuto_0,F2xMovieClip);
hm.F2xAuto_0.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("hm","F2xAuto_37");
	s.a().b(1).c(_d0,{x:-110.5,y:-39}).b(1).c(_d0,{x:-105,y:-37.05,a:0.95,b:0.95});
};
