$(function(){
//楼层跳转
	var floor_nav=$(".floor-nav")[0];
	var floor_lis=$(".floor-lis");
	var floor=$(".floor");
    var arr=["服饰","美妆","手机","家电","数码","运动","居家","母婴","食品","图书","车品","服务"];
    var brr=["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F","12F"];
	var now;
	var flag=true;
	var flag1=true;
    var cHeight=document.documentElement.clientHeight;
    for(var i=0;i<floor.length;i++){
    	floor[i].h=floor[i].offsetTop;
    	// console.log(floor[i].h);
    }
    window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
    	var top=obj.scrollTop;
    	if(top>=floor[0].h-200){
    		floor_nav.style.display="block";
    		var nHeight=floor_nav.offsetHeight;
    		floor_nav.style.top=(cHeight-nHeight)/2+"px";
    	}
    	if(top<floor[0].h-200){
    		floor_nav.style.display="none";
    	}
    	for(var i=0;i<floor.length;i++){
	    	if(top>=floor[i].h){
	    		for(var j=0;j<floor_lis.length;j++){
	    			floor_lis[j].style.background="#fff";
	    			floor_lis[j].style.color="#625351";
                    floor_lis[j].innerHTML=brr[j];
	    		}
	    		// floor_lis[i].style.background="#C81623";
	    		floor_lis[i].style.color="#CB142A";
                floor_lis[i].innerHTML=arr[i];
	    		now=i;
	    	}
	    }	
    }
    for(var i=0;i<floor_lis.length;i++){
    	floor_lis[i].index=i;
    	floor_lis[i].onclick=function(){
    		animate(document.body,{scrollTop:floor[this.index].h})
    		animate(document.documentElement,{scrollTop:floor[this.index].h})
    		now=this.index;
    	}
    	floor_lis[i].onmouseover=function(){
    		this.style.background="#C81623";
    		this.style.color="#FFFFFF";
            this.innerHTML=arr[this.index];
    	}
    	floor_lis[i].onmouseout=function(){
    		this.style.background="#fff";
    		this.style.color="#625351";
            this.innerHTML=brr[this.index];
    		floor_lis[now].style.background="#fff";
    		floor_lis[now].style.color="#CB142A";
            floor_lis[now].innerHTML=arr[now];
    	}
    }

    var lis=$(".help-lis");
	for(var i=0; i<lis.length;i++){
		hover(lis[i],function(){
			var div=$("div",this)[0];
			div.style.display="block";
			div.style.zIndex=999;
		},function(){
			var div=$("div",this)[0];
			div.style.display="none";
		})
	}

	var lis1=$(".back-lis");
	for(var i=0;i<lis1.length;i++){
		hover(lis1[i],function(){
			var div=$("div",this)[0];
			div.style.display="block";
			
		},function(){
			var div=$("div",this)[0];
			div.style.display="none";
		})
	}
//轮播
	var imgs=$(".middle-pic");
	var banner=$(".banner-middle")[0];
	var lis2=$(".ban-circle");
	var width=parseInt(getStyle(banner,"width"));
	var n=0;
	var next=0;
	var t=setInterval(move,2000);
	var right=$(".zright")[0];
	var left=$(".zleft")[0]; 
    var flag2=true;
	function move(){
        if(flag2){
            flag2=false;
            next=n+1;
            if(next>=imgs.length){
                next=0;
            }
            imgs[next].style.left=width+"px";
            animate(imgs[n],{left:-width},500);
            animate(imgs[next],{left:0},500,function(){flag2=true;});
            for(var i=0;i<lis.length;i++){
                lis2[i].style.background="#D3D2D0";
            }
            lis2[next].style.background="#E72486";
            n=next;
        }
		
	}	
	banner.onmouseover=function(){
		left.style.display="block";
		right.style.display="block";
		clearInterval(t);
	}
	banner.onmouseout=function(){
		left.style.display="none";
		right.style.display="none";
		t=setInterval(move,2000);
	}
	left.onclick=function(){
        if(flag2){
            flag2=false;
            next=n-1;
            if(next<0){
                next=imgs.length-1;
            }
            imgs[next].style.left=-width+"px";
            animate(imgs[n],{left:width},500);
            animate(imgs[next],{left:0},500,function(){flag2=true;});
            for(var i=0;i<lis2.length;i++){
                lis2[i].style.background="#D3D2D0";
            }
            lis2[next].style.background="#E72486";
            n=next;
        }
		
	}
	right.onclick=function(){
		move();
	}
	for(var i=0;i<lis2.length;i++){
		lis2[i].index=i;
		lis2[i].onclick=function(){
			if(n<this.index){
			   imgs[this.index].style.left=width+"px";
			   animate(imgs[n],{left:-width},500);
			   animate(imgs[this.index],{left:0},500);
			   for(var i=0;i<lis2.length;i++){
			   	 lis2[i].style.background="#D3D2D0";
			   }
			   this.style.background="#E72486";
			   n=this.index;	
			}else if(n>this.index){
				imgs[this.index].style.left=-width+"px";
				animate(imgs[n],{left:width},500);
				animate(imgs[this.index],{left:0},500);
				for(var i=0;i<lis2.length;i++){
			   	 lis2[i].style.background="#D3D2D0";
			   }
			   this.style.background="#E72486";
			   n=this.index;
			}
		}
	}

//推荐轮播
   var tui_left=$(".recommend-box-left")[0];
   var tui_right=$(".recommend-box-right")[0];
   var tui_box=$(".recommend-box")[0];
   var n_tui=0;
   var next_tui=0;
   var flag_tui=true;
   var tui_pic_box=$(".recommend-pic-box");
   var tui_width=tui_box.offsetWidth;
   tui_box.onmouseover=function(){
      tui_left.style.display="block";
      tui_right.style.display="block";
   }
   tui_box.onmouseout=function(){
      tui_left.style.display="none";
      tui_right.style.display="none";
   }
   tui_left.onclick=function(){
        if(flag_tui){
            flag_tui=false;
            next_tui=n_tui-1;
            if(next_tui<0){
                next_tui=tui_pic_box.length-1;
            }
            tui_pic_box[next_tui].style.left=-tui_width+"px";
            animate(tui_pic_box[n_tui],{left:tui_width},800);
            animate(tui_pic_box[next_tui],{left:0},800,function(){flag_tui=true;});
            n_tui=next_tui;

        }
   }
   tui_right.onclick=function(){
        if(flag_tui){
            flag_tui=false;
            next_tui=n_tui+1;
            if(next_tui>tui_pic_box.length-1){
                next_tui=0;
            }
            tui_pic_box[next_tui].style.left=tui_width+"px";
            animate(tui_pic_box[n_tui],{left:-tui_width},800);
            animate(tui_pic_box[next_tui],{left:0},800,function(){flag_tui=true;});
            n_tui=next_tui;

        }
   }
//F1
	var F1_imgs=$(".F1-pic2-tu");
	var F1_pic2_circle=$(".F1-pic2-circle");
	var F1_pic2_left=$(".F1-pic2-left")[0];
	var F1_pic2_right=$(".F1-pic2-right")[0];
	var F1_width=$(".F1-pic2")[0].offsetWidth;
	var F1Box=$(".F1-pic2")[0];
    var F1_flag=true;
    lunBo(F1Box,F1_imgs,F1_pic2_circle,F1_pic2_left,F1_pic2_right,F1_width,F1_flag);

// 轮播函数
	function lunBo(fashion,pics,cirs,fashion_left,fashion_right,fashion_width,flagg){
        var n1=0;
        var next1=0;
        // var fashion_width=fashion_width;
        var t1=setInterval(move1,2000);
            function move1(){
            if(flagg){
            flagg=false;
            next1=n1+1;
            if(next1>=pics.length){
                next1=0;
            }
            pics[next1].style.left=fashion_width+"px";
            animate(pics[n1],{left:-fashion_width},500);
            animate(pics[next1],{left:0},500,function(){flagg=true;});
            for(var i=0;i<cirs.length;i++){
                cirs[i].style.background="#3E3E3E";
            }
            cirs[next1].style.background="#B61B1F";
            n1=next1;
       }
        
        }
        
        fashion.onmouseover=function(){
            fashion_left.style.display="block";
            fashion_right.style.display="block";
            clearInterval(t1);
        }
        fashion.onmouseout=function(){
            fashion_left.style.display="none";
            fashion_right.style.display="none";
            t1=setInterval(move1,2000);
        }
        fashion_left.onclick=function(){
            if(flagg){
                flagg=false;
                next1=n1-1;
                if(next1<0){
                    next1=pics.length-1;
                }
                pics[next1].style.left=-fashion_width+"px";
                animate(pics[n1],{left:fashion_width},500);
                animate(pics[next1],{left:0},500,function(){flagg=true;});
                for(var i=0;i<cirs.length;i++){
                    cirs[i].style.background="#3E3E3E";
                }
                cirs[next1].style.background="#B61B1F";
                n1=next1;
            }
            
        }
        fashion_right.onclick=function(){
            move1();
        } 
         for(var i=0;i<cirs.length;i++){
            cirs[i].index=i;
            cirs[i].onclick=function(){
                if(n1<this.index){
                   pics[this.index].style.left=fashion_width+"px";
                   animate(pics[n1],{left:-fashion_width},500);
                   animate(pics[this.index],{left:0},500);
                   for(var i=0;i<cirs.length;i++){
                     cirs[i].style.background="#3E3E3E";
                   }
                   this.style.background="#B61B1F";
                   n1=this.index;    
                }else if(n1>this.index){
                    pics[this.index].style.left=-fashion_width+"px";
                    animate(pics[n1],{left:fashion_width},500);
                    animate(pics[this.index],{left:0},500);
                    for(var i=0;i<cirs.length;i++){
                     cirs[i].style.background="#3E3E3E";
                   }
                   this.style.background="#B61B1F";
                   n1=this.index;
                }
            }
        }
    }

// F2
    var F2_imgs=$(".F2-pic-2");
	var F2_pic2_circle=$(".F2-pic2-circle");
	var F2_pic2_left=$(".F2-pic2-left")[0];
	var F2_pic2_right=$(".F2-pic2-right")[0];
	var F2_pic_2_box=$(".F2-pic-2-box")[0];
    var F2_flag=true;
	var F2_width=$(".F2-pic-2-box")[0].offsetWidth;
	lunBo(F2_pic_2_box,F2_imgs,F2_pic2_circle,F2_pic2_left,F2_pic2_right,F2_width,F2_flag);

// F3,4,5,11
    
	var F3_pic_2_box=$(".F3-pic-2-box");
	
	for(var k=0;k<F3_pic_2_box.length;k++){
		lunBoo(F3_pic_2_box[k]);
	}
	function lunBoo(fashion){
        var flag=true;
       var pics=$(".F3-pic-2",fashion);
        var cirs=$(".F3-pic2-circle",fashion);
        var fashion_left=$(".F3-pic2-left",fashion)[0];
        var fashion_right=$(".F3-pic2-right",fashion)[0];
        var n1=0;
        var next1=0;
        var fashion_width=fashion.offsetWidth;
        var t1=setInterval(move1,2000);
        function move1(){
            if(flag){
                flag=false;
                next1=n1+1;
                if(next1>=pics.length){
                    next1=0;
                }
                pics[next1].style.left=fashion_width+"px";
                animate(pics[n1],{left:-fashion_width},500);
                animate(pics[next1],{left:0},500,function(){flag=true;});
                for(var i=0;i<cirs.length;i++){
                    cirs[i].style.background="#3E3E3E";
                }
                cirs[next1].style.background="#B61B1F";
                n1=next1;
            }
            
        }
        
        fashion.onmouseover=function(){
            fashion_left.style.display="block";
            fashion_right.style.display="block";
            clearInterval(t1);
        }
        fashion.onmouseout=function(){
            fashion_left.style.display="none";
            fashion_right.style.display="none";
            t1=setInterval(move1,2000);
        }
        fashion_left.onclick=function(){
            if(flag){
                flag=false;
                next1=n1-1;
                if(next1<0){
                    next1=pics.length-1;
                }
                pics[next1].style.left=-fashion_width+"px";
                animate(pics[n1],{left:fashion_width},500);
                animate(pics[next1],{left:0},500,function(){flag=true;});
                for(var i=0;i<cirs.length;i++){
                    cirs[i].style.background="#3E3E3E";
                }
                cirs[next1].style.background="#B61B1F";
                n1=next1;
            }
            
        }
        fashion_right.onclick=function(){
            move1();
        } 
         for(var i=0;i<cirs.length;i++){
            cirs[i].index=i;
            cirs[i].onclick=function(){
                if(n1<this.index){
                   pics[this.index].style.left=fashion_width+"px";
                   animate(pics[n1],{left:-fashion_width},500);
                   animate(pics[this.index],{left:0},500);
                   for(var i=0;i<cirs.length;i++){
                     cirs[i].style.background="#3E3E3E";
                   }
                   this.style.background="#B61B1F";
                   n1=this.index;    
                }else if(n1>this.index){
                    pics[this.index].style.left=-fashion_width+"px";
                    animate(pics[n1],{left:fashion_width},500);
                    animate(pics[this.index],{left:0},500);
                    for(var i=0;i<cirs.length;i++){
                     cirs[i].style.background="#3E3E3E";
                   }
                   this.style.background="#B61B1F";
                   n1=this.index;
                }
            }
        }
    }

// F6,7,8,9
    var F6_pic_3_box=$(".F6-pic-3-box");
	// console.dir(F6_pic_3_box);
	for(var k=0;k<F6_pic_3_box.length;k++){
		lunBooSix(F6_pic_3_box[k]);
	}
	function lunBooSix(fashionA){
        var flag=true;
        var pics=$(".F6-pic-3",fashionA);
        var cirs=$(".F6-pic2-circle",fashionA);
        var fashionA_left=$(".F6-pic2-left",fashionA)[0];
        var fashionA_right=$(".F6-pic2-right",fashionA)[0];
        var n1=0;
        var next1=0;
        var fashionA_width=fashionA.offsetWidth;
        var t1=setInterval(move1,2000);
            function move1(){
                if(flag){
                    flag=false;
                    next1=n1+1;
                    if(next1>=pics.length){
                        next1=0;
                    }
                    pics[next1].style.left=fashionA_width+"px";
                    animate(pics[n1],{left:-fashionA_width},500);
                    animate(pics[next1],{left:0},500,function(){flag=true;});
                    for(var i=0;i<cirs.length;i++){
                        cirs[i].style.background="#3E3E3E";
                    }
                    cirs[next1].style.background="#B61B1F";
                    n1=next1;
                }
            
        }
        
        fashionA.onmouseover=function(){
            fashionA_left.style.display="block";
            fashionA_right.style.display="block";
            clearInterval(t1);
        }
        fashionA.onmouseout=function(){
            fashionA_left.style.display="none";
            fashionA_right.style.display="none";
            t1=setInterval(move1,2000);
        }
        fashionA_left.onclick=function(){
            if(flag){
                flag=false;
                next1=n1-1;
                if(next1<0){
                    next1=pics.length-1;
                }
                pics[next1].style.left=-fashionA_width+"px";
                animate(pics[n1],{left:fashionA_width},500);
                animate(pics[next1],{left:0},500,function(){flag=true;});
                for(var i=0;i<cirs.length;i++){
                    cirs[i].style.background="#3E3E3E";
                }
                cirs[next1].style.background="#B61B1F";
                n1=next1;
            }
            
        }
        fashionA_right.onclick=function(){
            move1();
        } 
         for(var i=0;i<cirs.length;i++){
            cirs[i].index=i;
            cirs[i].onclick=function(){
                if(n1<this.index){
                   pics[this.index].style.left=fashionA_width+"px";
                   animate(pics[n1],{left:-fashionA_width},500);
                   animate(pics[this.index],{left:0},500);
                   for(var i=0;i<cirs.length;i++){
                     cirs[i].style.background="#3E3E3E";
                   }
                   this.style.background="#B61B1F";
                   n1=this.index;    
                }else if(n1>this.index){
                    pics[this.index].style.left=-fashionA_width+"px";
                    animate(pics[n1],{left:fashionA_width},500);
                    animate(pics[this.index],{left:0},500);
                    for(var i=0;i<cirs.length;i++){
                     cirs[i].style.background="#3E3E3E";
                   }
                   this.style.background="#B61B1F";
                   n1=this.index;
                }
            }
        }
    }

//F10
    var F10_imgs=$(".F10-pic-31-tu");
    var F10_pic2_circle=$(".F10-pic2-circle");
    var F10_pic2_left=$(".F10-pic2-left")[0];
    var F10_pic2_right=$(".F10-pic2-right")[0];
    var F10_pic_2_box=$(".F10-pic-31")[0];
    var F10_width=439;
    var F10_flag=true;
    lunBo(F10_pic_2_box,F10_imgs,F10_pic2_circle,F10_pic2_left,F10_pic2_right,F10_width,F2_flag);

//F12
    var F12box1=$(".F12-pic-11")[0];
    var F12imgs=$(".F12-pic-11-tu",F12box1);
    var F12left=$(".F12-pic2-left",F12box1)[0];
    var F12right=$(".F12-pic2-right",F12box1)[0];
    var F12width=394;
    var F12cir=$(".F12-pic2-circle",F12box1);
    var F12_flag1=true;
    lunBo(F12box1,F12imgs,F12cir,F12left,F12right,F12width,F12_flag1);

    var F12box2=$(".F12-pic-11")[1];
    var F12imgs2=$(".F12-pic-11-tu",F12box2);
    var F12left2=$(".F12-pic2-left",F12box2)[0];
    var F12right2=$(".F12-pic2-right",F12box2)[0];
    var F12cir2=$(".F12-pic2-circle",F12box2);
    var F12_flag2=true;
     lunBo(F12box2,F12imgs2,F12cir2,F12left2,F12right2,F12width,F12_flag1);
//选项 
    var hunt=$(".banner-navigation");
    for(var i=0;i<hunt.length;i++){
        yin(hunt[i]);
    }
    function yin(hunt){
        var hunt_box=$(".banner-left-hover")[i];
        hover(hunt,function(){
            hunt_box.style.display="block";
        },function(){
            hover(hunt_box,function(){
               this.style.display="block"; 
            },function(){
                this.style.display="none";
            })
            hunt_box.style.display="none";
        })
    }

//楼层选项hidden
    var F1=$(".F1-floor")[0];
    var F1box=$(".F1")[0];
    var hi=$(".F1-hidden",F1box);
    xuXa(F1,hi);
    var F2=$(".F2-floor")[0];
    var F2box=$(".F2")[0];
    var hi2=$(".F2-hidden",F2box);
    xuXa(F2,hi2);
    function xuXa(F,hi){
        var seek=$(".floor-seek-tab",F);
        
        var kuang=$(".seek-hidden",F);
        var n=0;
        for(var i=0;i<seek.length;i++){
        seek[i].index=i; 
        seek[i].onmouseover=function(){
            for(var j=0;j<hi.length;j++){
                kuang[j].style.display="none";
                hi[j].style.display="none";
                seek[j].style.color="#666";
            }
            kuang[this.index].style.display="block";
            hi[this.index].style.display="block";
            this.style.color="#C81623";
            n=this.index;
        }
     }
   }
    var F3=$(".F3-floor")[0];
    var F3box=$(".F3")[0];
    var hi3=$(".F3-hidden",F3box);
    xuXa(F3,hi3);
    var F4=$(".F4-floor")[0];
    var F4box=$(".F4")[0];
    var hi4=$(".F4-hidden",F4box);
    xuXa(F4,hi4);
    var F5=$(".F5-floor")[0];
    var F5box=$(".F5")[0];
    var hi5=$(".F5-hidden",F5box);
    xuXa(F5,hi5);
    var F6=$(".F6-floor")[0];
    var F6box=$(".F6")[0];
    var hi6=$(".F6-hidden",F6box);
    xuXa(F6,hi6);
    var F7=$(".F7-floor")[0];
    var F7box=$(".F7")[0];
    var hi7=$(".F7-hidden",F7box);
    xuXa(F7,hi7);
    var F8=$(".F8-floor")[0];
    var F8box=$(".F8")[0];
    var hi8=$(".F8-hidden",F8box);
    xuXa(F8,hi8);
    var F9=$(".F9-floor")[0];
    var F9box=$(".F9")[0];
    var hi9=$(".F9-hidden",F9box);
    xuXa(F9,hi9);
    var F10=$(".F10-floor")[0];
    var F10box=$(".F10")[0];
    var hi10=$(".F10-hidden",F10box);
    xuXa(F10,hi10);
    var F11=$(".F11-floor")[0];
    var F11box=$(".F11")[0];
    var hi11=$(".F11-hidden",F11box);
    xuXa(F11,hi11);
//导航hover
   var seek_right=$(".seek-right")[0];
   var seek_hover=$(".seek-right-hover")[0];
   var seek_gang=$(".seek-right-gang")[0];
   hover(seek_right,function(){
      this.style.boxShadow="0 0 3px #DFDFDF" ;
      seek_gang.style.display="block";
      seek_hover.style.display="block";
      this.style.borderColor="#FFFFFF";
   },function(){
      seek_gang.style.display="none";
      seek_hover.style.display="none";
      this.style.boxShadow="0 0 3px #DFDFDF" ;
      this.style.borderColor="#DFDFDF";
   })
    //山西
        var page_box=$("#page-box");
        var jiantou=$(".jiantou")[0];
        var page_hover=$(".page-box-hover")[0];
        hover(page_box,function(){
            page_hover.style.display="block";
            this.style.background="#FFFFFF";
            jiantou.style.transform="rotate(180deg)";
        },function(){
            hover(page_hover,function(){
                this.style.display="block";
                page_box.style.background="#FFFFFF";
            },function(){
                this.style.display="none";
                page_box.style.background="#F1F1F1";
            })
            page_hover.style.display="none";
            this.style.background="#F1F1F1";
            jiantou.style.transform="rotate(0deg)";
        })
    //网站导航
        var page_box1=$(".page-box1")[0];
        var jiantou1=$(".jiantou")[1];
        var page_hover1=$(".page-box-hover1")[0];
        hover(page_box1,function(){
            page_hover1.style.display="block";
            this.style.background="#FFFFFF";
            jiantou1.style.transform="rotate(180deg)";
        },function(){
            hover(page_hover1,function(){
                this.style.display="block";
                page_box1.style.background="#FFFFFF";
            },function(){
                this.style.display="none";
                page_box1.style.background="#F1F1F1";
            })
            page_hover1.style.display="none";
            this.style.background="#F1F1F1";
            jiantou1.style.transform="rotate(0deg)";
        })
    //客户服务
        var page_box2=$(".page-box2")[0];
        var jiantou2=$(".jiantou")[2];
        var page_hover2=$(".page-box-hover2")[0];
        hover(page_box2,function(){
            page_hover2.style.display="block";
            this.style.background="#FFFFFF";
            jiantou2.style.transform="rotate(180deg)";
        },function(){
            hover(page_hover2,function(){
                this.style.display="block";
                page_box2.style.background="#FFFFFF";
            },function(){
                this.style.display="none";
                page_box2.style.background="#F1F1F1";
            })
            page_hover2.style.display="none";
            this.style.background="#F1F1F1";
            jiantou2.style.transform="rotate(0deg)";
        })
    //关注京东
        var page_box3=$(".page-box3")[0];
        var jiantou3=$(".jiantou")[3];
        var page_hover3=$(".page-box-hover3")[0];
        hover(page_box3,function(){
            page_hover3.style.display="block";
            this.style.background="#FFFFFF";
            jiantou3.style.transform="rotate(180deg)";
        },function(){
            hover(page_hover3,function(){
                this.style.display="block";
                page_box3.style.background="#FFFFFF";
            },function(){
                this.style.display="none";
                page_box3.style.background="#F1F1F1";
            })
            page_hover3.style.display="none";
            this.style.background="#F1F1F1";
            jiantou3.style.transform="rotate(0deg)";
        })
    //手机京东
        var page_box4=$(".page-box4")[0];
        var jiantou4=$(".jiantou")[4];
        var page_hover4=$(".page-box-hover4")[0];
        hover(page_box4,function(){
            page_hover4.style.display="block";
            this.style.background="#FFFFFF";
            jiantou4.style.transform="rotate(180deg)";
        },function(){
            hover(page_hover4,function(){
                this.style.display="block";
                page_box4.style.background="#FFFFFF";
            },function(){
                this.style.display="none";
                page_box4.style.background="#F1F1F1";
            })
            page_hover4.style.display="none";
            this.style.background="#F1F1F1";
            jiantou4.style.transform="rotate(0deg)";
        })
    //我的京东 
        var page_box5=$(".page-box5")[0];
        var jiantou5=$(".jiantou")[5];
        var page_hover5=$(".page-box-hover5")[0];
        hover(page_box5,function(){
            page_hover5.style.display="block";
            this.style.background="#FFFFFF";
            jiantou5.style.transform="rotate(180deg)";
        },function(){
            hover(page_hover5,function(){
                this.style.display="block";
                page_box5.style.background="#FFFFFF";
            },function(){
                this.style.display="none";
                page_box5.style.background="#F1F1F1";
            })
            page_hover5.style.display="none";
            this.style.background="#F1F1F1";
            jiantou5.style.transform="rotate(0deg)";
        })   
})


