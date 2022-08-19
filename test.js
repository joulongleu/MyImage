(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test_atlas_1", frames: [[471,0,371,394],[0,0,469,844]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,185.5,197), null);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,234.5,422), null);


(lib.風扇動 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.元件2();
	this.instance.setTransform(92.6,98.4,1,1,0,0,0,92.6,98.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:92.8,regY:98.5,rotation:15.6522,x:92.75,y:98.6},0).wait(1).to({rotation:31.3043,x:92.7},0).wait(1).to({rotation:46.9565,x:92.65,y:98.65},0).wait(1).to({rotation:62.6087,x:92.6},0).wait(1).to({rotation:78.2609,x:92.55},0).wait(1).to({rotation:93.913,x:92.45,y:98.6},0).wait(1).to({rotation:109.5652,x:92.4,y:98.5},0).wait(1).to({rotation:125.2174,y:98.45},0).wait(1).to({rotation:140.8696,x:92.35,y:98.4},0).wait(1).to({rotation:156.5217,y:98.35},0).wait(1).to({rotation:172.1739,y:98.3},0).wait(1).to({rotation:187.8261,y:98.2},0).wait(1).to({rotation:203.4783,x:92.45},0).wait(1).to({rotation:219.1304},0).wait(1).to({rotation:234.7826,x:92.55,y:98.15},0).wait(1).to({rotation:250.4348},0).wait(1).to({rotation:266.087,x:92.6},0).wait(1).to({rotation:281.7391,x:92.8,y:98.2},0).wait(1).to({rotation:297.3913},0).wait(1).to({rotation:313.0435,x:92.85,y:98.35},0).wait(1).to({rotation:328.6957,x:92.9},0).wait(1).to({rotation:344.3478,x:92.8,y:98.4},0).wait(1).to({rotation:360,y:98.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-36.7,270.7,270.3);


// stage content:
(lib.風扇 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_3
	this.instance = new lib.元件1();
	this.instance.setTransform(400,298.3,1,1,0,0,0,117.3,211.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:117.2,regY:211,x:399.9,y:298.2},0).wait(62));

	// 圖層_2
	this.instance_1 = new lib.風扇動();
	this.instance_1.setTransform(393.45,221.05,1,1,0,0,0,92.6,98.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:92.7,rotation:-35.5645,x:393.5,y:221,alpha:0.96},0).wait(1).to({rotation:-71.129,x:393.45,y:220.95,alpha:0.92},0).wait(1).to({rotation:-106.6935,x:393.35,alpha:0.88},0).wait(1).to({rotation:-142.2581,alpha:0.84},0).wait(1).to({rotation:-177.8226,x:393.3,y:221,alpha:0.8},0).wait(1).to({rotation:-213.3871,y:221.1,alpha:0.76},0).wait(1).to({rotation:-248.9516},0).wait(1).to({rotation:-284.5161,x:393.4},0).wait(1).to({rotation:-320.0806,x:393.45},0).wait(1).to({rotation:-355.6452,x:393.5,y:221.05},0).wait(1).to({rotation:-391.2097,x:393.45,y:220.95},0).wait(1).to({rotation:-426.7742,x:393.35,y:220.9},0).wait(1).to({rotation:-462.3387},0).wait(1).to({rotation:-497.9032,x:393.2,y:220.95},0).wait(1).to({rotation:-533.4677,y:221},0).wait(1).to({rotation:-569.0323,y:221.05},0).wait(1).to({rotation:-604.5968,x:393.25,y:221.15},0).wait(1).to({rotation:-640.1613,x:393.3,y:221.1},0).wait(1).to({rotation:-675.7258},0).wait(1).to({rotation:-711.2903,x:393.4,y:221.05},0).wait(1).to({rotation:-746.8548,x:393.35,y:221},0).wait(1).to({rotation:-782.4194,x:393.25,y:220.95},0).wait(1).to({rotation:-817.9839},0).wait(1).to({rotation:-853.5484,x:393.15},0).wait(1).to({rotation:-889.1129,x:393.1,y:221},0).wait(1).to({rotation:-924.6774,y:221.1},0).wait(1).to({rotation:-960.2419,x:393.2},0).wait(1).to({rotation:-995.8065,x:393.25},0).wait(1).to({rotation:-1031.371},0).wait(1).to({rotation:-1066.9355,y:221.05},0).wait(1).to({rotation:-1102.5,y:221},0).wait(1).to({rotation:-1138.0645,y:220.95},0).wait(1).to({rotation:-1173.629,x:393.15,y:220.9},0).wait(1).to({rotation:-1209.1935,x:393.05},0).wait(1).to({rotation:-1244.7581,x:393,y:221},0).wait(1).to({rotation:-1280.3226,x:393.05,y:221.1},0).wait(1).to({rotation:-1315.8871,x:393.1},0).wait(1).to({rotation:-1351.4516,x:393.15},0).wait(1).to({rotation:-1387.0161,x:393.2},0).wait(1).to({rotation:-1422.5806,y:221.05},0).wait(1).to({rotation:-1458.1452,y:221},0).wait(1).to({rotation:-1493.7097,x:393.1,y:220.95},0).wait(1).to({rotation:-1529.2742,x:393.05,y:220.9},0).wait(1).to({rotation:-1564.8387,x:393,y:220.95},0).wait(1).to({rotation:-1600.4032,x:392.95,y:221},0).wait(1).to({rotation:-1635.9677,x:393,y:221.05},0).wait(1).to({rotation:-1671.5323,y:221.15},0).wait(1).to({rotation:-1707.0968,x:393.05},0).wait(1).to({rotation:-1742.6613,x:393.1,y:221.1},0).wait(1).to({rotation:-1778.2258,x:393.15},0).wait(1).to({rotation:-1813.7903,y:221},0).wait(1).to({rotation:-1849.3548,x:393.1,y:220.95},0).wait(1).to({rotation:-1884.9194,x:393,y:220.9},0).wait(1).to({rotation:-1920.4839,x:392.9,y:220.95},0).wait(1).to({rotation:-1956.0484},0).wait(1).to({rotation:-1991.6129,y:221},0).wait(1).to({rotation:-2027.1774,x:392.95,y:221.1},0).wait(1).to({rotation:-2062.7419},0).wait(1).to({rotation:-2098.3065},0).wait(1).to({rotation:-2133.871,x:393.05,y:221.05},0).wait(1).to({rotation:-2169.4355,y:221},0).wait(1).to({rotation:-2205,x:393,y:220.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(657.5,385.6,-128.89999999999998,123.59999999999997);
// library properties:
lib.properties = {
	id: 'AA9F3F07D56B534FB9D0474C32E90686',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/test_atlas_1.png", id:"test_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AA9F3F07D56B534FB9D0474C32E90686'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;