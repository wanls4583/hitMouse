var hm=hm||{};
hm.Mouse_2=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	s.as(function(){
		this.stop();
		setTimeout(function(){
			s.parent.removeChild(s);
			//移除眩晕的老鼠的索引
			for(var i = 0; i<hm.xxMouse.length; i++){
				if(hm.xxMouse[i] == s.thisNum)
					hm.xxMouse.splice(i,1);
			}
		},800);
	}.bind(this),7);
};
F2xExtend(hm.Mouse_2,F2xMovieClip);
hm.Mouse_2.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new hm.swdedrfrefd();
	var _d1=new hm.F2xAuto_9();
	var _d2=new hm.F2xAuto_10();
	var _d3=new hm.F2xAuto_11();
	var _d4=new hm.F2xAuto_12();
	var _d5=new hm.F2xAuto_13();
	var _d6=new hm.F2xAuto_14();
	var _d7=new hm.F2xAuto_15();
	var _d8=new hm.F2xAuto_16();
	var _d9=new hm.F2xAuto_17();
	var _d10=new hm.swswdwdesesd();
	var _d11=new hm.F2xAuto_18();
	var _d12=new hm.F2xAuto_19();
	var _d13=new hm.aqswdeded();
	var _d14=new hm.aqswdeded();
	s.a().b(8).c(_d0,{x:75.45,y:57.55});
	s.a().b(1).c(_d1,{x:97.7,y:99.3}).g("loop",0,0).b(1).c(_d1,{x:90.15,y:105.8,a:0.9999,b:0.9999,r:-1.7796}).g("loop",1,1).b(1).c(_d2,{x:82.55,y:112.3,r:-3.7323}).b(1).c(_d2,{x:82.55,y:110.2,a:0.9998,b:0.9998,r:-3.5577}).b(1).c(_d2,{x:82.55,y:107.95,r:-3.7323}).b(1).c(_d2,{x:82.6,y:108,a:0.9998,b:0.9998,r:-3.5577}).b(1).c(_d2,{x:82.55,y:107.95,r:-3.7323}).b(1).c(_d2,{x:82.55,y:107.95,r:-3.7323});
	s.a().b(1).c(_d3,{x:105.95,y:209.05}).b(1).c(_d3,{x:105.95,y:209.05,a:0.9999,b:0.9999,r:-2.2775}).b(1).c(_d4,{x:105.95,y:209.05,r:-4.7167}).b(1).c(_d4,{x:105.9,y:209.05,a:0.9998,b:0.9998,r:-4.5556}).b(1).c(_d4,{x:105.95,y:209.05,r:-4.7167}).b(1).c(_d4,{x:105.9,y:209.05,a:0.9998,b:0.9998,r:-4.5556}).b(1).c(_d4,{x:105.95,y:209.05,r:-4.7167}).b(1).c(_d4,{x:105.95,y:209.05,r:-4.7167});
	s.a().b(1).c(_d5,{x:106.2,y:186.65}).b(1).c(_d5,{x:104.65,y:186.65,a:0.9998,b:0.9998,r:-4.5319}).b(1).c(_d6,{x:103.1,y:186.65,r:-9.2434}).b(1).c(_d6,{x:103.15,y:186.6,a:0.9995,b:0.9995,r:-9.0664}).b(1).c(_d6,{x:103.1,y:186.65,r:-9.2434}).b(1).c(_d6,{x:103.15,y:186.6,a:0.9995,b:0.9995,r:-9.0664}).b(1).c(_d6,{x:103.1,y:186.65,r:-9.2434}).b(1).c(_d6,{x:103.1,y:186.65,r:-9.2434});
	s.a().b(1).c(_d7,{x:100.7,y:114.05}).b(1).c(_d7,{x:93.6,y:120.45,a:0.9999,b:0.9999,r:-1.7796}).b(1).c(_d8,{x:86.5,y:126.8,r:-3.7323}).b(1).c(_d8,{x:86.5,y:124.6,a:0.9998,b:0.9998,r:-3.5577}).b(1).c(_d8,{x:86.5,y:122.45,r:-3.7323}).b(1).c(_d8,{x:86.5,y:122.4,a:0.9998,b:0.9998,r:-3.5577}).b(1).c(_d8,{x:86.5,y:122.45,r:-3.7323}).b(1).c(_d8,{x:86.5,y:122.45,r:-3.7323});
	s.a().b(1).c(_d9,{x:100.35,y:151.05,a:1.6554,b:1.6554,r:-8.722}).b(1).c(_d9,{x:94.45,y:158.4,a:1.6544,b:1.6544,r:-10.5293}).b(1).c(_d9,{x:88.6,y:165.65,a:1.6554,b:1.6554,r:-12.4541}).b(1).c(_d9,{x:88.6,y:162.55,a:1.6542,b:1.6542,r:-12.3098}).b(1).c(_d9,{x:88.6,y:159.4,a:1.6554,b:1.6554,r:-12.4541}).b(1).c(_d9,{x:88.65,y:159.35,a:1.6542,b:1.6542,r:-12.3098}).b(1).c(_d9,{x:88.6,y:159.4,a:1.6554,b:1.6554,r:-12.4541}).b(1).c(_d9,{x:88.6,y:159.4,a:1.6554,b:1.6554,r:-12.4541});
	s.a().b(1).c(_d10,{x:11.1,y:57.2,r:-8.7221}).b(1).c(_d10,{x:2.35,y:66.45,a:0.9994,b:0.9994,r:-10.5285}).b(1).c(_d10,{x:-6.6,y:75.95,r:-12.4547}).b(1).c(_d10,{x:-6.45,y:73.6,a:0.9993,b:0.9993,r:-12.3103}).b(1).c(_d10,{x:-6.6,y:71.6,r:-12.4547}).b(1).c(_d10,{x:-6.4,y:71.4,a:0.9993,b:0.9993,r:-12.3103}).b(1).c(_d10,{x:-6.6,y:71.6,r:-12.4547}).b(1).c(_d10,{x:-6.6,y:71.6,r:-12.4547});
	s.a().b(1).c(_d11,{x:107.55,y:188.95}).b(1).c(_d11,{x:106.65,y:188.95,a:0.9998,b:0.9998,r:-2.7773}).b(1).c(_d12,{x:105.7,y:188.95,r:-5.7167}).b(1).c(_d12,{x:105.7,y:188.95,a:0.9997,b:0.9997,r:-5.5567}).b(1).c(_d12,{x:105.7,y:188.95,r:-5.7167}).b(1).c(_d12,{x:105.7,y:188.95,a:0.9997,b:0.9997,r:-5.5567}).b(1).c(_d12,{x:105.7,y:188.95,r:-5.7167}).b(1).c(_d12,{x:105.7,y:188.95,r:-5.7167});
	s.a().b(1).c(_d13,{x:66.15,y:7.05,c:-8.7221,d:171.2779}).b(1).c(_d13,{x:60.2,y:15.2,a:0.9996,b:0.9996,c:-7.0567,d:172.9433}).b(1).c(_d13,{x:53.8,y:23.25,c:-5.7069,d:174.2931}).b(1).c(_d13,{x:44,y:20.2,a:0.9993,b:0.9993,c:-13.277,d:166.723}).b(1).c(_d13,{x:34.05,y:18.2,c:-20.9258,d:159.0742}).b(1).c(_d13,{x:39.7,y:18,a:0.9991,b:0.9991,c:-16.5626,d:163.4374}).b(1).c(_d13,{x:45.05,y:17.95,c:-12.4547,d:167.5453}).b(1).c(_d13,{x:45.05,y:17.95,c:-12.4547,d:167.5453});
	s.a().b(1).c(_d14,{x:95.7,y:-0.4,r:-8.7221}).b(1).c(_d14,{x:80.65,y:8.6,a:0.9992,b:0.9992,r:-14.2824}).b(1).c(_d14,{x:65.8,y:18,r:-19.9427}).b(1).c(_d14,{x:75.45,y:10.1,a:0.9994,b:0.9994,r:-11.2839}).b(1).c(_d14,{x:85.65,y:3.7,r:-2.7751}).b(1).c(_d14,{x:79.9,y:5.9,a:0.9996,b:0.9996,r:-7.5329}).b(1).c(_d14,{x:74.05,y:8.55,r:-12.4547}).b(1).c(_d14,{x:74.05,y:8.55,r:-12.4547});
	//f2x_auto_created_init_end
	
};