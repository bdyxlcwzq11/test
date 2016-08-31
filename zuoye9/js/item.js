//定义一个item类，传入数据图片、标题、描述
function ListItem (img_item, title_item, desc_item) {
	//数据属性
	this.img_item=img_item;
	this.title_item=title_item;
	this.desc_item=desc_item;
	//函数属性(创建item，并且添加到容器)
	this.createToAdd=function function_name () {
		//最外层div
		var item_div=document.createElement("div");
		item_div.setAttribute("class","itemClass");
		
		//内层左div
		var item_left_div=document.createElement("div");
		item_div.appendChild(item_left_div);
		
		//左 div img
		var img=document.createElement("img");
		img.setAttribute("src",this.img_item);
		item_left_div.appendChild(img);
		
		//内层右div
		var item_right_div=document.createElement("div");
		item_div.appendChild(item_right_div);
		//右h3
		var h3=document.createElement("h3");
		h3.innerText=title_item;
		item_right_div.appendChild(h3);
		//右p
		var p=document.createElement("p");
		p.innerText=desc_item;
		item_right_div.appendChild(p);
		
		//类 div
		document.querySelector(".mianSreen").appendChild(item_div);
		
	}
}
	//定义URL（需要拼接页码）
	var url="http://www.marrymin.com/LOL/News?item=%E6%9C%80%E6%96%B0&pageIndex=";
		var i=1;
	//按钮响应函数
	function buttonClick () {
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function  () {
			if (xhr.readyState==4 && xhr.status ==200) {
				//获取完整的数据
				var arr=JSON.parse(xhr.responseText);
				for (var j=0;j<arr.length;j++) {						
					var item=new ListItem(arr[j].img,arr[j].title,arr[j].desc);
					item.createToAdd();
				}
			} 
		}
				var bt=document.querySelector(".mianSreen>button");
				bt.style.top=(2000+25)*i+"px";
		xhr.open("GET",url+i,true);
		xhr.send(null);
		i++;
	}