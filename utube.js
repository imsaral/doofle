var uObj
var ustr="ronaldo"
function ureqListener(){
  //console.log('herev also')
  console.log(this.responseText)
  uObj=JSON.parse(this.responseText)
  for(i=0;i<10;i++){
    let x=uObj.items[i].id.videoId
  //console.log(Obj.items[0].id.videoId)
    let d=document.createElement('div')
    let h=document.createElement('h5')
    h.innerHTML=uObj.items[i].snippet.title
    let a=document.createElement('iframe')
  //a.setAttribute("width","560")
  //a.setAttribute("height","315")
    a.setAttribute("src",`https://www.youtube.com/embed/${x}`)
    a.setAttribute("frameborder","0")
    a.setAttribute("allow","autoplay;encrypted-media")
    a.setAttribute("allowfullscreen","true")
    let b=document.getElementById('video')
    d.append(h)
    d.append(a)
    b.append(d)
  }
}
let ui=setInterval(function uf(){
  //console.log('gere')
  var uoReq=new XMLHttpRequest()
  uoReq.open("GET",`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${ustr}&maxResults=10&type=video&videoCaption=closedCaption&key=AIzaSyBgRBtfg3im4_6a3XGq3r4UcLJ0bweU6-4`)
  var z=uoReq.addEventListener("load",ureqListener)
  uoReq.send();                                            
},500)
setTimeout(function g(){
  clearInterval(ui)
},800)