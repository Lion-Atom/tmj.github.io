/********************** date工具类 ***************/
Date.prototype.format = function(format){
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
};

Date.prototype.yyyyMMddhhmmssS='yyyy-MM-dd hh:mm:ss.S';
Date.prototype.yyyyMMddhhmmss='yyyy-MM-dd hh:mm:ss';

Date.prototype.getFullText = function(){
  return this.format(this.yyyyMMddhhmmssS);
};

Date.prototype.getText = function(){
  return this.format(this.yyyyMMddhhmmss);
};
function getDay(day){
  var today = new Date();

  var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;

  today.setTime(targetday_milliseconds); //注意，这行是关键代码

  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear+"-"+tMonth+"-"+tDate;
}
function doHandleMonth(month){
  var m = month;
  if(month.toString().length == 1){
    m = "0" + month;
  }
  return m;
}
