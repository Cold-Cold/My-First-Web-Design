function logi() {
	var us=document.getElementById("username_0");
	var ps=document.getElementById("password_0");
	if (us.value=="admin" &&(ps.value=="123456"))
	{
		window.location.href="homepage.html";
	}
	 if (us.value == "")
	 {
	 
	        alert("请输入用户名");
	 
	 } 
	 if (ps.value  == "") 
		{
	 
	        alert("请输入密码");
	 
	    }


}
function register_1()
{
	
	 window.location.href="register.html";
}