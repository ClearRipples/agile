/*
 * 初始化settings
 * */
A.settings.crossDomainHandler = $util.ajax;
/*
 * 扩展Element
 */
//扩展file在ExMobi中调用本地能力
A.Element.addFormSelector('file','[data-role="file"]',function(el){
	var $el = $(el);
	var $label = $el.find('label');
	var $input = $el.find('input');
	var placeholder = $label.html();
	$el.tap(function(e){
		$native.openFileSelector(function(path){
			var p = path.split('/');
			$label.html(path?p[p.length-1]:placeholder);
			$input.val(path);      			
		});
	});
});
//扩展date和time在ExMobi中调用本地能力
A.Element.addFormSelector('datetime','[data-role="date"],[data-role="time"]',function(el){
	var $el = $(el);
	var $label = $el.find('label');
	var $input = $el.find('input');
	var placeholder = $label.html();
	$el.tap(function(e){
		$native.openDateTimeSelector($el.data('role'),$input.val(),function(str){
			$label.html(str?str:placeholder);
			$input.val(str);
		});
	});
});
/*
 * 扩展Router
*/
//扩展data-target="native"
A.Router.add('native', function(href, el){
	if(!href) return;
	var _this = $(el);
	var isNew = _this.attr('target')!="_self";
    var transition = _this.data('transition'); 
	
	if(href.indexOf("#")==0){
		href = 'res:page/html/'+href.replace("#","")+'.html';
	}else if(href.indexOf('res')<0){
		href = 'res:page/html/'+href;
	}
	var urlOpt = $util.parseResURL(href);

	var opt = {
			url:urlOpt.href,
			id:urlOpt.fileName,
			isNew:isNew,
			query:urlOpt.query,
			transition:transition
	};

	$native.open(opt);
});
//扩展data-target="exit"
A.Router.add('exit', function(){ $native.exit('是否退出程序？'); });
//扩展data-target="close"
A.Router.add('close', function(){ $native.close(); });
//扩展data-target="exmobi"
A.Router.add('exmobi', function(href, el){
	if(!href) return;
	
	var _this = $(el);
	var isNew = _this.attr('target')!="_self";
	
	if(href.indexOf("#")==0){
		href = "res:page/"+href.replace("#","")+".xhtml";
	}
	
	if(href.indexOf("res")==0){	    			    	
    	
    	var urlOpt = $util.parseResURL(href);

    	var opt = {
    			url:urlOpt.href,
    			id:urlOpt.fileName,
    			isNew:isNew,
    			query:urlOpt.query
    	};
    	
    	ExMobiWindow.open(opt.url,isNew,false,'',opt.query);
	}else{
		ExMobiWindow.open(href,isNew);
	}
});
/*
 * 初始化默认ajax
 * */
//A.ajax = $util.server;