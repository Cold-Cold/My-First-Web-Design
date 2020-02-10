		Img =new Array ("img/AMEN1.png","img/AMEN2.png","img/AMEN3.png");//图片数组
		Lnk =new Array ("REAME1.html","REAME2.html","REAME3.html");//链接数组
		arr_3=new Array("美国队长 Captain America: The First Avenger‎ (2011)","美国队长2 Captain America: The Winter Soldier‎ (2014)","美国队长3 Captain America: Civil War‎ (2016)");
		size = Img.length;
		i = 0;
		function chImg()
		{
		picID.innerHTML='<a href='+Lnk[i]+'><img src='+Img[i]+' height="350rem"  width="650rem"></a>';
		word_byturns.innerHTML=arr_3[i];
		i++;
		if (i>=size) i = 0;
		setTimeout("chImg()",2000);
		}