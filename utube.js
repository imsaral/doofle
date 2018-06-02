var Obj
var ustr="dog"
function ureqListener(){
  //console.log('herev also')
  //console.log(this.responseText)
  Obj=JSON.parse(this.responseText)
  let x=Obj.items[0].id.videoId
  //console.log(Obj.items[0].id.videoId)
  let a=document.createElement('iframe')
  a.setAttribute("width","560")
  a.setAttribute("height","315")
  a.setAttribute("src",`https://www.youtube.com/embed/${x}`)
  a.setAttribute("frameborder","0")
  a.setAttribute("allow","autoplay;encrypted-media")
  a.setAttribute("allowfullscreen","true")
  let b=document.getElementById('maincontain')
  b.append(a)
}
let ui=setInterval(function uf(){
  //console.log('gere')
  var oReq=new XMLHttpRequest()
  oReq.open("GET",`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${ustr}&type=video&videoCaption=closedCaption&key=AIzaSyBgRBtfg3im4_6a3XGq3r4UcLJ0bweU6-4`)
  var z=oReq.addEventListener("load",ureqListener)
  oReq.send();                                            
},500)
setTimeout(function g(){
  clearInterval(ui)
},800)