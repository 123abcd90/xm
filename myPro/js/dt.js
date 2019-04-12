var map = new BMap.Map("container");
// 创建地图实例  
var point = new BMap.Point(120.155358,30.236839);
// 创建点坐标  
map.centerAndZoom(point, 19);
// 初始化地图，设置中心点坐标和地图级别



//地图一组控件
//导航控件
map.addControl(new BMap.NavigationControl());
//缩略控件
map.addControl(new BMap.ScaleControl());
//概览图
map.addControl(new BMap.OverviewMapControl()); 
//地图类型
map.addControl(new BMap.MapTypeControl());   