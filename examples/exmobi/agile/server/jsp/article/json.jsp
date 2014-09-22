<%@ page language="java" import="java.util.*,com.fiberhome.bcs.appprocess.common.util.*"
 contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String cb = aa.req.getParameter("__jsonpcallback");
if(cb.length()==0){
%>
{"css":["icon-person alizarin","icon-home orange","icon-download green-sea","icon-trash belize-hole"]}
<%
}else{
%>
<%=cb%>({"css":["icon-person alizarin","icon-home orange","icon-download green-sea","icon-trash belize-hole"]});
<%
}
%>

