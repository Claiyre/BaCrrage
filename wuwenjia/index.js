window.onload=function(){
		document.getElementById('flow').style.height=document.body.scrollHeight+'px' ;
		//console.log(document.body.scrollHeight );
		var oBox=document.getElementById('screen');
		var oCon=document.getElementsByTagName("input")[0];
		var oBtn=document.getElementsByTagName("button")[0];
		var cW=oBox.offsetWidth;
		var cH=oBox.offsetHeight;
		//console.log(cW+"~"+cH);
		var message="";//弹幕内容初始化;

		// oCon.onkeydown=function(e){
		// 	e=e||window.event;
		// 	if(e.keyCode==13){//回车
		// 		oBtn.onclick;
		// 	}
		// }
		var sW=0;
		oBtn.onclick=function sendcomment(){
			var content=oCon.value;
			if(content.trim()==""){
				alert("请输入弹幕内容");
			}else{
				message=content;
				var span=document.createElement('span');
				span.innerHTML=message;
				oBox.appendChild(span);
				//sW=span.scrollWidth;
				//console.log(sW);
				
				
				//span.style.marginLeft=cW+'px';//初始化位置
				roll.call(span, {
		            //call改变函数内部this的指向
		            //timing: ['linear', 'ease-out'][~~(Math.random() * 2)],
		            timing: 'linear',
		            color: '#' + (~~(Math.random() * (1 << 24))).toString(16),
		            top: random(0, cH-32),
		            fontSize: random(16, 32)
		        });
				// document.getElementById("movecomment").innerHTML=(span);
				oCon.value="";//清空评论框
			}
		}
		function roll(opt){
			//弹幕滚动
	        //如果对象中不存在timing 初始化
	        //opt.timing = opt.timing || 'linear';
	        opt.color = opt.color || '#fff';
	        opt.top = opt.top || 0;
	        opt.fontSize = opt.fontSize || 16;
	        this._left = 800;   //获取当前left的值
	        //console.log(this.style.left);
	        this.style.color = opt.color;   //初始化颜色
	        this.style.marginTop = opt.top + 'px';
	        this.style.fontSize = opt.fontSize + 'px';
	        var sW=this.scrollWidth ;
	        console.log(sW);
	        this.style.width=0+'px'; 
	        this.style.height=opt.fontSize +6+ 'px';
	        this.style.marginLeft=cW+'px';//初始化位置
	        var flag=0;      
	        this.timer = setInterval(function () {
	            if (this._left <= -sW) {
	                clearInterval(this.timer);   //终止定时器
	                //this.parentNode.removeChild(this);
	                return;   //终止函数
	            }
	            switch (opt.timing) {
	                case 'linear':   //如果匀速  
	                	var left=800-sW;              
	                    if(this._left>left){
	                    	flag = 800-this._left;
	                    	this._left += -2;	                    	
	                    }else{
	                    	this._left += -2;
	                    }
	                	//this._left += -2;
	                    //
	                    break;
	                // case 'ease-out':   //
	                //     this._left += (0 - this._left) * .01;
	                //     break;
	            }
	            this.style.width=flag+2+'px'; 
	            this.style.marginLeft = this._left + 'px';
	        }.bind(this), 1000 / 60);
		}
		function random(start, end) {
	        //随机数封装
	        return start + ~~(Math.random() * (end - start));
	    }
	    // var aLi = document.querySelectorAll('li');   //10

	    // function forEach(ele, cb) {
	    //     for (var i = 0, len = aLi.length; i < len; i++) {
	    //         cb && cb(ele[i], i);
	    //     }
	    // }
	    // forEach(aLi, function (ele, i) {
	    //     ele.style.left = i * 100 + 'px';
	    // });
	    //产生闭包
	    var obj = {
	        num: 1,
	        add: function () {
	            this.num++;   //obj.num = 2;
	            (function () {
	                console.log(this.num);
	            })
	        }
	    };
	    obj.add();  //window
	}