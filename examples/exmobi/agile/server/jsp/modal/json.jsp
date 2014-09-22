<%@ page language="java" import="java.util.*,com.fiberhome.bcs.appprocess.common.util.*"
 contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String cb = aa.req.getParameter("__jsonpcallback");
if(cb.length()==0){
%>
{"msg":"点击此处关闭"}
<%
}else{
%>
<%=cb%>({"msg":"点击此处关闭"});
<%
}
%>


