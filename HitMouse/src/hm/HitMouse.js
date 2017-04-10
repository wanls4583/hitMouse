var hm=hm||{};
hm.firstMouse = { x: 110, y: -18}; //左上角老鼠的起始位置和增量
hm.mouseHasShowed = []; //已经出现在舞台上的老鼠的索引
hm.mouseHasShowedRef = []; //老鼠对应的引用
hm.mouseToShow = []; //将要出现在舞台上的老鼠的索引
hm.xxMouse = []; //眩晕的老鼠的索引
hm.isRendering = false; //是否正在渲染老鼠，用来同步
hm.maxSize = 6; //允许舞台上同时出现的老鼠数量
hm.speed = 200;	//出现老鼠的频率
hm.HitMouse=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	//开始游戏按钮
	s.startPageObj.starBtn.addEventListener(annie.MouseEvent.CLICK,function(e){
		annie.Tween.to(s.startPageObj,1,{alpha:0,onComplete:function(){
				s.removeChild(s.startPageObj);
				s.hammerObj.x = e.stageX;
				s.hammerObj.y = e.stageY;
				s.rndShowMouse();
				document.getElementsByTagName('html')[0].className = 'hideMouse';
			}
		});
	});
	//再来一次按钮
	s.gameOver.mc.playAgain.addEventListener(annie.MouseEvent.CLICK,function(e){
		annie.Tween.to(s.gameOver,1,{alpha:0,onComplete:function(){
				//隐藏掉结束层，不然会阻止下层的鼠标监听事件
				s.gameOver.visible = false;
				s.gameOver.alpha = 1;
				s.hammerObj.x = e.stageX;
				s.hammerObj.y = e.stageY;
				s.rndShowMouse();
				document.getElementsByTagName('html')[0].className = 'hideMouse';
			}
		});
	});
	//锤子击打
	s.clickLayer.addEventListener(annie.MouseEvent.CLICK,function(e){
		s.hammerObj.x = e.stageX;
		s.hammerObj.y = e.stageY;
		s.hammerObj.gotoAndPlay(0);
		if(!hm.isRendering){
			var width = s.stage.desWidth / 3
			var height = s.stage.desHeight / 3
			for(var i = 0; i < hm.mouseHasShowed.length; i++){
				var obj = hm.mouseHasShowedRef[hm.mouseHasShowed[i]];
				if(obj && obj.getDrawRect().isPointIn(new annie.Point(e.stageX,e.stageY))){
					(function(obj,i){
						//眩晕效果
						var mouse = new hm.MouseSwim();
						mouse.x = obj.x - 55;
						mouse.y = obj.y - 26;
						mouse.thisNum = hm.mouseHasShowed[i];
						hm.xxMouse[hm.xxMouse.length] = hm.mouseHasShowed[i];
						s.mouseLayer.addChild(mouse);
					})(obj,i);
					//移除舞台上眩晕之前的老鼠
					s.mouseLayer.removeChild(obj);
					hm.mouseHasShowedRef[hm.mouseHasShowed[i]] = null;
					hm.mouseHasShowed.splice(i,1);
					hm.score++;
					break;
				}
			}
			
		}
	});
};
F2xExtend(hm.HitMouse,F2xContainer);
hm.HitMouse.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new hm.F2xAuto_1();
	_d0.name="startPageObj";
	s.startPageObj=_d0;
	var _d1=new hm.GameOver();
	_d1.name="gameOver";
	s.gameOver=_d1;
	var _d2=new hm.F2xAuto_35();
	_d2.name="clickLayer";
	s.clickLayer=_d2;
	Flash2x.d(_d2,{o:0});
	var _d3=new hm.Hammer();
	_d3.name="hammerObj";
	s.hammerObj=_d3;
	Flash2x.d(_d3,{x:632.5,y:17.2,a:0.5051,b:0.5051});
	var _d4=new hm.F2xAuto_21();
	_d4.name="mouseLayer";
	s.mouseLayer=_d4;
	var _d6=Flash2x.t(0,decodeURI("30S"),24,"#FF0000","Microsoft YaHei",2,2,52,31.7,26,"center",false,true,"multiline",false);
	_d6.name="timeCountDown";
	s.timeCountDown=_d6;
	Flash2x.d(_d6,{x:563});
	var _d5=new hm.F2xAuto_24();
	_d5.name="gameBgObj";
	s.gameBgObj=_d5;
	Flash2x.d(_d5,{y:-4});
	s.addChild(_d5);
	s.addChild(_d6);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
//倒计时
hm.HitMouse.prototype.countDown = function(){
	var s = this;
	hm.timeCountDown = 30;
	var intervalId = setInterval(function(){
		s.timeCountDown.text = hm.timeCountDown+'S';
		hm.timeCountDown--;
		if(hm.timeCountDown < 0)
			clearInterval(intervalId);
	},1000);
}
//随机生成老鼠触动位置
hm.HitMouse.prototype.rndShowMouse = function(){
	hm.score = 0;
	this.countDown();
	var s = this;
	var intervalId = setInterval(function(){
		if(hm.timeCountDown == 0){
			console.log('end');
			//清空老鼠-begin
			for(var i = 0; i < hm.mouseHasShowed.length; i++){
				s.mouseLayer.removeChild(hm.mouseHasShowedRef[hm.mouseHasShowed[i]]);
			}
			hm.mouseHasShowed = [];
			hm.mouseToShow = [];
			//清空老师-end
			clearInterval(intervalId);
			s.gameOver.mc.score.text = hm.score;
			s.gameOver.visible = true;
			document.getElementsByTagName('html')[0].className = '';
			return;
		}
		if(hm.mouseHasShowed.length == hm.maxSize || hm.isRendering)
			return;
		var num = Math.floor(9*Math.random())+1;
		if(hm.mouseHasShowed.indexOf(num) == -1 && hm.xxMouse.indexOf(num) == -1){
			hm.mouseToShow[hm.mouseToShow.length] = num;
		}
		hm.time++;
		s.renderMouse();
	},hm.speed);
}
//渲染老鼠
hm.HitMouse.prototype.renderMouse = function(){
	var s = this;
	hm.isRendering = true;
	for(var i = 0; i < hm.mouseToShow.length; i++){
		if(hm.mouseHasShowed.indexOf(hm.mouseToShow[i])!=-1)
			continue;
		var mouse = new hm.MouseShow();
		s.mouseLayer.addChild(mouse);
		mouse.x = hm.firstMouse.x + ((hm.mouseToShow[i] % 3 == 0 ? 3 : hm.mouseToShow[i] % 3) - 1) * ((430-50)/ 2);
		mouse.y = hm.firstMouse.y + (Math.ceil(hm.mouseToShow[i] / 3) - 1) * ((152+40) /2);
		mouse.play(true);
		hm.mouseHasShowed[hm.mouseHasShowed.length] = hm.mouseToShow[i];
		hm.mouseHasShowedRef[hm.mouseToShow[i]] = mouse;
		hm.mouseToShow.splice(i,1);
		i--;
	}
	hm.isRendering = false;
}