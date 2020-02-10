function ckname()
{
	var str_n=document.getElementById("Say_phone").value;
	var i=0;
	for(i=0;i<11;i++)
	{
		if(str_n[i]<"0"|| str_n[i]>"9")
		return "电话号码为非法字符";
	}
	if(str_n.length!=11)
		return "电话号码应为11位";
	if (str_n[0]!='1') 
		return "电话号码开头应该为1";
	if (str_n[1]<'3' || str_n[1]>'9') 
		return "电话号码第二位不在3-9之间";
	return "电话号码可用";
}
function ckID()
{
	var str_ID=document.getElementById("Say_ID").value;
	if (str_ID.length!=18) 
		return "身份证号码长度不足18位";
	var i=1
	
	for (let i=1;i<17;i++){
		if (str_ID[i]<"0" || str_ID[i]>"9") 
			return "身份证号码存在非法字符"; //除最后一位外都是数字
	}
	if (str_ID[0]<'1' || str_ID[0]>'9')
		return "身份证号码第一位不为0"; 
	if (str_ID[6]!='1' && str_ID[6]!='2') 
		return "身份证号码年份输入错误"; // 年份 1或2
	if (str_ID[6]=='1'){
		if (str_ID[7]!='8' && str_ID[7]!='9') 
			return "身份证号码年份输入错误";
	}
	if (str_ID[6]=='2'){
		if (str_ID[7]!='0') 
			return "身份证号码年份输入错误";  //20**
		if (str_ID[8]!='0' && str_ID[8]!='1') 
			return "身份证号码年份输入错误";  //200* 201*
	}
	
	//后2位0-9
	
	//320 112 1999 09 23 0016
	//月份 [10]
	if (str_ID[10]!='0' && str_ID[10]!='1') 
		return "身份证号码月份输入错误"; //月份开头不为01
	if (str_ID[10]=='0'){
		if (str_ID[11]<"1" || str_ID[11]>"9") 
			return "身份证号码月份输入错误";  //第一位 0,第二位1-9
	}
	if (str_ID[10]=='1'){
		if (str_ID[11]!="1" && str_ID[11]!="2") 
			return "身份证号码月份输入错误";  //第一位 1,第二位1或2
	}
	
	//日期 [12]
	if (str_ID[12]!='0' && str_ID[12]!='1'&& str_ID[12]!='2'&& str_ID[12]!='3') 
		return "身份证号码日期输入错误";  //日期开头不为0123
	if (str_ID[12]=='0' && str_ID[13]=='0') 
		return "身份证号码日期输入错误";  //日期00
	if (str_ID[12]=='3' && (str_ID[13]!='0' || str[13]!='1')) 
		return "身份证号码日期输入错误"; //日期>31
	
	//校验码
	if (str_ID[17]<'0' || str_ID[17]>'9')
	{
		if (str_ID[17]!='x' && str_ID[17]!='X') 
			return "身份证号码应为末尾为数字或大小写“x”";
	}
	return "身份证号码可用";
	
}