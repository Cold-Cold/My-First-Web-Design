function high(){
	
function byId(id) {
    return typeof (id)=="string"?document.getElementById(id):id;
}

var index =0;
    timer=null;
    pics=byId("banner").getElementsByTagName("div");
    dots=byId("dots").getElementsByTagName("span");
    prev=byId("prev");
    next=byId("next");
    len=pics.length;
	

function sildeImg() {
    var main=byId("main");

    main.onmouseover=function () {
        //清除定时器
        if (timer) clearInterval(timer);
    }
    
    main.onmouseout=function () {
        timer=setInterval(function () {
            index++;
            if (index >= len){
                index=0;
            }
            //切换图片
            changeImg();
        },2000);
    }

    main.onmouseout();

    //遍历原点，切换图片
    for (var i=0;i<len ;i++){
        dots[i].id=i;
        dots[i].onclick=function () {
            index=this.id;
            // this.className="active";
            changeImg();
        }
    }

    //点击前后按钮进行切换
    next.onclick=function () {
        index++;
        if (index>=len){
            index=0;
        }
        changeImg();
    }

    prev.onclick=function () {
        if (index==0){
            index=len-1;
        }else{
            index--;
        }
        changeImg();
    }
}

function changeImg() {
    for (var i=0;i<len;i++){
        pics[i].style.display='none';
        dots[i].className="";
    }
    pics[index].style.display='block';
    dots[index].className="active";
}
sildeImg();
}