window.onload=function(){
        //导航栏效果
	var classfy_ul = document.getElementById('classfy_ul');
	var video_li = classfy_ul.children[0] || classfy_ul.childNodes[0];

	classfy_ul.onmouseover=function(e){
		var ev=e || window.event;
		var ev_a = ev.target || ev.srcElement;
        var ev_li = ev_a.parentNode;
        if(ev_li == video_li){
        	return;
        }else{
        	video_li.className="";
        	ev_li.className="home_page";
        }
	}
	classfy_ul.onmouseout=function(e){
		var ev=e || window.event;
		var ev_a = ev.target || ev.srcElement;
        var ev_li = ev_a.parentNode;
        if(ev_li == video_li){
        	return;
        }else{
        	video_li.className="home_page";
        	ev_li.className="";
        }
	}
       
	/*图片轮播*/
       var aPicLi=document.getElementById('pic_list').getElementsByTagName('li');
        var aTextLi=document.getElementById('text_list').getElementsByTagName('li');
        var aIcoLi=document.getElementById('ico_list').getElementsByTagName('li');
        var oIcoUl=document.getElementById('ico_list').getElementsByTagName('ul')[0];
        var oPrev=document.getElementById('btn_prev');
        var oNext=document.getElementById('btn_next');
        var oDiv=document.getElementById('box');
        var i=0;
        var iNowUlLeft=0;
        var iNow=0;
        
        oPrev.onclick=function(){
                if(iNowUlLeft>0){
                        iNowUlLeft--;
                        oUlleft();
                }
                oPrev.className=iNowUlLeft==0?'btn':'btn showBtn';
                oNext.className=iNowUlLeft==(aIcoLi.length-7)?'btn':'btn showBtn';
        }
        
        oNext.onclick=function(){
                if(iNowUlLeft<aIcoLi.length-7){
                        iNowUlLeft++;
                        oIcoUl.style.left=-aIcoLi[0].offsetWidth*iNowUlLeft+'px';
                }
                oPrev.className=iNowUlLeft==0?'btn':'btn showBtn';
                oNext.className=iNowUlLeft==(aIcoLi.length-7)?'btn':'btn showBtn';
        }
        
        for(i=0;i<aIcoLi.length;i++){
                aIcoLi[i].index=i;
                aIcoLi[i].onclick=function(){
                        if(iNow==this.index){
                                return false;
                        }
                        iNow=this.index;
                        tab();
                }
        }
        
        function tab(){
                for(i=0;i<aIcoLi.length;i++){
                        aIcoLi[i].className='';
                        aPicLi[i].style.filter='alpha(opacity:0)';
                        aPicLi[i].style.opacity=0;
                        aTextLi[i].getElementsByTagName('h2')[0].className='';
                        miaovStopMove( aPicLi[i]);
                }
                aIcoLi[iNow].className='active';
                //aPicLi[this.index].style.filter='alpha(opacity:100)';
                //aPicLi[this.index].style.opacity=1;
                miaovStartMove(aPicLi[iNow],{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
                aTextLi[iNow].getElementsByTagName('h2')[0].className='show';
        }
        
        function oUlleft(){
                oIcoUl.style.left=-aIcoLi[0].offsetWidth*iNowUlLeft+'px';
        }
        
        function autoplay(){
                iNow++;
                if(iNow>=aIcoLi.length){
                        iNow=0;
                }
                if(iNow<iNowUlLeft){
                        iNowUlLeft=iNow;
                }else if(iNow>=iNowUlLeft+7){
                        iNowUlLeft=iNow-6;
                }
                oPrev.className=iNowUlLeft==0?'btn':'btn showBtn';
                oNext.className=iNowUlLeft==(aIcoLi.length-7)?'btn':'btn showBtn';
                oUlleft();
                tab();
        }
        
        var time=setInterval(autoplay,3000);
        oDiv.onmouseover=function(){
                clearInterval(time);
        }
        oDiv.onmouseout=function(){
                time=setInterval(autoplay,3000);
        }

        // 评价小星星
        var comment_1_star = document.getElementById('comment_1_star');
        var comment_2_star = document.getElementById('comment_2_star');
        var comment_3_star = document.getElementById('comment_3_star');
        var comment_4_star = document.getElementById('comment_4_star');
        var comment_5_star = document.getElementById('comment_5_star');
        var comment_6_star = document.getElementById('comment_6_star');
        var comment_7_star = document.getElementById('comment_7_star');
        var gradenum_1 = document.getElementById('gradenum_1');
        var gradenum_2 = document.getElementById('gradenum_2');
        var gradenum_3 = document.getElementById('gradenum_3');
        var gradenum_4 = document.getElementById('gradenum_4');
        var gradenum_5 = document.getElementById('gradenum_5');
        var gradenum_6 = document.getElementById('gradenum_6');
        var gradenum_7 = document.getElementById('gradenum_7');
        function comment(ul_id,span_id,islast){
            var ul_id = ul_id;
            var span_id=span_id;
            var num =parseInt(span_id.innerHTML);
            var star_num = Math.round(num/20);
            var li_length=ul_id.children.length || ul_id.childNodes.length;
            if(!islast){
                for(var z=0;z<star_num;z++){
                  var li = ul_id.children[z] || ul_id.childNodes[z];
                  li.style.background="url('images/hotTV/star1.jpg') 0 0 no-repeat";
                }
            }
            else{
                for(var z=0;z<star_num;z++){
                  var li = ul_id.children[z] || ul_id.childNodes[z];
                  li.style.background="url('images/hotTV/star3.jpg') 0 0 no-repeat";
               }
            }


        }
       comment(comment_1_star,gradenum_1,false);
       comment(comment_2_star,gradenum_2,false);
       comment(comment_3_star,gradenum_3,false);
        comment(comment_4_star,gradenum_4,true);
        comment(comment_5_star,gradenum_5,true);
        comment(comment_6_star,gradenum_6,true);
        comment(comment_7_star,gradenum_7,true);
}