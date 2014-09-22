<%@ page language="java" import="java.util.*,com.fiberhome.bcs.appprocess.common.util.*"
 contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String cb = aa.req.getParameter("__jsonpcallback");
System.out.println("============="+cb);
if(cb.length()==0){
%>
{"to":"huangnan@nj.fiberhome.com.cn"}
<%
}else{
%>
<%=cb%>({"to":"huangnan@nj.fiberhome.com.cn"});
<%
}
%>
