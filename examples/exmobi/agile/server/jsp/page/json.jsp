<%@ page language="java" import="java.util.*,com.fiberhome.bcs.appprocess.common.util.*"
 contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String cb = aa.req.getParameter("__jsonpcallback");
if(cb.length()==0){
%>
{result:[{css:"turquoise",text:"#1ABC9C"},{css:"green-sea",text:"#16A085"},{css:"emerland",text:"#78ba00"},{css:"nephritis",text:"#27AE60"},{css:"peter-river",text:"#3498DB"},{css:"belize-hole",text:"#2980B9"},{css:"amethyst",text:"#9B59B6"},{css:"wisteria",text:"#8E44AD"},{css:"wet-asphalt",text:"#2C3E50"},{css:"midnight-blue",text:"#2C3E50"},{css:"concrete",text:"#95A5A6"},{css:"asbestos ",text:"#7F8C8D"},{css:"clouds",text:"#ECF0F1"},{css:"sliver",text:"#BDC3C7"},{css:"alizarin",text:"#E74C3C"},{css:"pomegranate",text:"#C0392B"},{css:"carrot",text:"#E67E22"},{css:"pumpkin",text:"#D35400"},{css:"sun-flower",text:"#F1C40F"},{css:"orange",text:"#F39C12"},{css:"violet",text:"#9f00a7"}]}
<%
}else{
%>
<%=cb%>({result:[{css:"turquoise",text:"#1ABC9C"},{css:"green-sea",text:"#16A085"},{css:"emerland",text:"#78ba00"},{css:"nephritis",text:"#27AE60"},{css:"peter-river",text:"#3498DB"},{css:"belize-hole",text:"#2980B9"},{css:"amethyst",text:"#9B59B6"},{css:"wisteria",text:"#8E44AD"},{css:"wet-asphalt",text:"#2C3E50"},{css:"midnight-blue",text:"#2C3E50"},{css:"concrete",text:"#95A5A6"},{css:"asbestos ",text:"#7F8C8D"},{css:"clouds",text:"#ECF0F1"},{css:"sliver",text:"#BDC3C7"},{css:"alizarin",text:"#E74C3C"},{css:"pomegranate",text:"#C0392B"},{css:"carrot",text:"#E67E22"},{css:"pumpkin",text:"#D35400"},{css:"sun-flower",text:"#F1C40F"},{css:"orange",text:"#F39C12"},{css:"violet",text:"#9f00a7"}]});
<%
}
%>

