INSERT INTO pagemodels (code,descr,frames,plugincode,templategui) VALUES ('service','Service Page','<?xml version="1.0" encoding="UTF-8"?>
<frames>
	<frame pos="0">
		<descr>Sample Frame</descr>
		<sketch x1="0" y1="0" x2="11" y2="0" />
	</frame>
</frames>

',NULL,'<#assign wp=JspTaglibs["/aps-core"]>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<script type="text/javascript">
 var baseUrl = "<@wp.info key="systemParam" paramName="applicationBaseURL" />"
 
 <#if (Session.currentUser != "guest") >
 
 var accessToken = "${Session.currentUser.accessToken}"
 </#if>
</script>

<html>
<head>
<base href="/exampleAngular">
</head>




<body>
<div><@wp.show frame=0 /></div>

</body>
</html>');
INSERT INTO pagemodels (code,descr,frames,plugincode,templategui) VALUES ('home','Home Page',NULL,NULL,NULL);
