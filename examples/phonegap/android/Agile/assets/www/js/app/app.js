//列表刷新
var li = '<li class="table-view-cell media"><a class="navigate-right"><span class="media-object icon icon-more pull-left"></span><div class="media-body">新数据</div></a></li>';
function showPull(){
    A.Refresh({
        selector : '#pull_article',
        type : 'pullDown',
        refreshTip : '<span id="refresh_time" class="sliver">更新于：从未更新</span>',
        callback : function(){
            var scroll = this;
            setTimeout(function () {
                $('#pull_ul').append(li);
                $('#refresh_time').html('更新于：'+A.Util.formatDate(new Date(),'MM-dd hh:mm'));
                scroll.refresh();
                A.showToast('更新成功');
            }, 2000);
        }
    });
}

function showUp(){

    A.Refresh('#up_article','pullUp', function(){
        var scroll = this;
        setTimeout(function () {
            var html = '';
            for(var i=0;i<10;i++){
                html += li;
            }
            $('#up_ul').append(html);
            scroll.refresh();
            A.showToast('加载成功');
        }, 2000);
    });
    
}
//横向滚动
function doHorizontalArticleLoad(){
	A.Scroll('#h_scroll_demo',{hScroll:true,hScrollbar : false});
}
//Slider
function doBtnHide(){
	$('#slider_prev').hide();
	$('#slider_next').hide();
}

function doBtnShow(){
	$('#slider_prev').show();
	$('#slider_next').show();
}

function doNormalArticleLoad(){

    new A.Slider({
        selector : '#slider_normal',
        onBeforeSlide : function(){
            return true;
        },
        onAfterSlide : function(i){
        	
        	return true;
        }
    });
}

function doBannerArticleLoad(){
	
	var label;
	var bannerSlider = new A.Slider({
		                selector : '#slider_banner',
		                onBeforeSlide : function(){
		                    return true;
		                },
		                onAfterSlide : function(i){
		                	
		                	if(!label){
		                		label = $('#slider_banner').append('<div class="slider_label"></div>').find('div.slider_label');
		                	}
		                	//alert(label.html());
		                	label.html('这是第'+i+'条新闻');
		                }
		            });
    $('#slider_prev').click(function(){bannerSlider.prev(); return false;});
    $('#slider_next').click(function(){bannerSlider.next(); return false;});
}

//popup
function doPopupArticleLoad(){
	$('#btn_alert').tap(function(){
		A.alert('提示','这是一个Alert');
	});
	$('#btn_confirm').tap(function(){
	    A.confirm('提示','这是一个Confirm！',function(){A.showToast('你选择了“确定”')},function(){A.showToast('你选择了“取消”')});
	});
	$('#btn_loading').tap(function(){
	    A.showMask();
	});
	$('#btn_center').tap(function(){
		A.popup({
	                html: '<div style="height: 100px;text-align: center;font-size: 20px;font-weight: 600;margin-top: 10px;color:#E74C3C ">随意设计你的弹出框吧</div>',
	                pos : 'center'
	            });
	});
	$('#btn_from_tpl').tap(function(){
	    A.popup({
	                tplId : 'tpl_popup_login',
	                pos : 'center'
	            });
	});
	$('#btn_t_top').tap(function(){
	    A.popup({
	                html: '这是一个来自顶部的弹出框',
	                pos : 'top',
	                showCloseBtn : false
	            });
	});
	$('#btn_t_ts').tap(function(){
	    A.popup({
	                html: '这是一个在header之下的弹出框',
	                pos : 'top-second',
	                showCloseBtn : false
	            });
	});
	$('#btn_t_bottom').tap(function(){
	    A.popup({
	                html: '这是一个来自底部弹出框',
	                pos : 'bottom',
	                showCloseBtn : false
	            });
	});
	$('#btn_t_bs').tap(function(){
		A.popup({
	                html: '这是一个在footer之上的弹出框',
	                pos : 'bottom-second',
	                showCloseBtn : false
	            });
	});
	$('#btn_popover').tap(function(){
	    A.popover('<ul class="table-view"><li class="table-view-cell">Item 1</li><li class="table-view-cell">Item 2</li></ul>',{top:'50px',left:'10%',right:'10%'},'top');
	});
	$('#btn_actionsheet').tap(function(){
	    A.Popup.actionsheet([{
	                text : '告诉QQ好友',
	                handler : function(){
	                    A.showToast('告诉QQ好友！');
	                }
	            },{
	                text : '告诉MSN好友',
	                handler : function(){
	                    A.showToast('告诉MSN好友！');
	                }
	            }
	            ]);
	});
}
//Aside
function doAsidePageLoad(){
	A.Page.loadContent('html/custom_aside.html', function(html){
		$('#aside_container').html(html);
	});
	
}
//calendar
function doCalendarAricleLoad(){
	new A.Calendar('#calendar_demo',{
        onRenderDay : function(day,date){
            if(day == 5){
                return '<div>'+day+'</div><div style="font-size: .8em;color: red">威武</div>'
            }
            return day;
        },
        onSelect:function(date){
            A.alert('提示',date);
        }
    });
    $('#btn_popup_calendar').tap(function(){
        A.popup({
            html : '<div id="popup_calendar"></div>',
            pos : 'center',
            backgroundOpacity : 0.4,
            showCloseBtn : false,
            onShow : function(){
                new A.Calendar('#popup_calendar',{
                    date : new Date(2013,7,1),
                    onSelect:function(date){
                        $('#btn_popup_calendar').text(date);
                        A.closePopup();
                    }
                });
            }
        });
    });
}
//color
function doColorPageLoad(){
	$('a.button').click(function(){
    	A.alert('提示',$(this).attr('class').replace('button bg-',''));
    });
}
//icon
function doIconPageLoad(){
	$('.demo-content .icon').click(function(){
    	A.alert('提示',$(this).attr('class'));
    });
}
$(function(){
	A.launch({
		basePagePath : 'html/',
        showPageLoading : false
    });
});