# SubwayMap
地铁app  
该地铁app是基于ionic1+angularjs1开发的，所应用的接口为高德地图的接口api  
[博文](http://www.cnblogs.com/DonaHero/p/5991375.html)  
在本项目中的platform.txt文件，其实主要对应的是platform文件夹，由于文件较大所以没有上传。  
主要的文件是属于www文件下。
index.html中主要的代码  
{ <script src="http://webapi.amap.com/subway?v=1.0&key=你的key&callback=cbk"></script>
}  
controller.js中主要的代码  
{    mysubway = subway("mysubway",{
      easy: 1,
      adcode: '1100'
    });}  
    
