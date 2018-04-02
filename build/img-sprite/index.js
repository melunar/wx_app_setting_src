var util = require('util');
var fs = require('fs');
var path = require('path');

require('./ix');
var picMerge = require("./picConvertor.js");
var cfg = require('./config.js');
var _cwd = process.cwd() + "/" ;
var tplDir = _cwd + "build/img-sprite/tpl/";

//////////////

function renderTplToFile(tplfile, lessData, destPath){
	var _tpl = fs.readFileSync(tplDir + tplfile, {encoding : "utf8"}).toString();
	var tpl = new IX.ITemplate({tpl : _tpl});
	var renderStr = tpl.renderData("", lessData);
	IX.safeWriteFileSync(destPath, renderStr);
	return renderStr;
}

function writeLessFile(lessData, destPath, demoDest){
	var suffix = lessData.suffix;
	var lessFilePath = "/less/sprite"+suffix+".less";
	console.log("write less file to : " + destPath + lessFilePath);

	renderTplToFile("tpl.less", lessData, destPath + lessFilePath);
	if (!demoDest) 
		return;
	renderTplToFile("demo-tpl.less", lessData, demoDest + lessFilePath);
	renderTplToFile("preview.html", lessData, demoDest + "/preview"+suffix+".html");
	renderTplToFile("demo.less", lessData, demoDest + "/less/demo"+suffix+".less");
	renderTplToFile("less.min.js", {}, demoDest + "/less.min.js");
}

var allLessData = {};
function execTask(name, taskDef, suffix, fn){
	if (name in allLessData){
		console.log("reuse: "+ name + " for " + suffix);
		return fn(allLessData[name]);
	}

	picMerge(taskDef, function(lessInfo){
		allLessData[name] = lessInfo;
		fn(lessInfo);
	});
}
function processFn(finishFn, suffix){
	var srcPath = _cwd + cfg.src;
	var imgDestPath = _cwd + cfg.imgDest;
	var lessDestPath = _cwd + cfg.lessDest;
	var demoDest = !cfg.demoDest ? null : (_cwd + cfg.demoDest);

	var lessData ={
		pic :[],
		suffix : suffix
	};

	function createTask(task){
		var taskPath = $XP(task, "path", "picmap");
		if (fs.existsSync(srcPath + "/" + taskPath + suffix))
			taskPath = taskPath + suffix;

		return ["picmap:" + taskPath, function(name, fn){
			execTask(name, IX.inherit({
				src : srcPath + "/" + taskPath,
				dest : imgDestPath,
				margin : 8,
				demoDest : demoDest
			}, task, {
				path : taskPath
			}), suffix, function(lessInfo){
				lessData["pic"].push(lessInfo);
				fn();
			});
		}];
	}

	IX.sequentialSteps(IX.map($XP(cfg, "picmap", []), createTask)).exec(function(){
		writeLessFile(lessData, lessDestPath, demoDest);
		finishFn();
	});
}

var oemList = cfg.oem;
oemList.unshift("");

IX.sequentialSteps(IX.map(oemList, function(oemName){
	return [oemName, function(oemName, fn){
		console.log("process " + oemName);
		processFn(fn, oemName ? ("-" + oemName) : "");
	}];
})).exec(function(){
	console.log("Done!", arguments);
});
