var face_x = []
var face_y = []
var face_size = []
var face_num = 10
var song 
var songIsplay = faise //設定此變數為假(false) ，收到按下滑鼠把變數改為真(true)
var amp
var vol

function preload(){
  song = loadSound("yt1s.mp3");
}
 


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)//設定弧度的角度為0~360，如果沒有加上此指令，弧度指令角度為0~2*PI
  //face_size = 400
  //face_x * width/2  //放在螢幕中間
  //face_y = height/2 //放在螢幕中間

  for (var i = 0; i < face_num; i++){
    face_size[i] = random(100,400) //face大小
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}

function draw() {
  background(255,255,104); //背景顏色
  fill(256) //字的顏色
  textSize(80) //上面文字大小
  text("YOUR BEST FRIEND CHARLIE",80, 80) //文字內容
  
  for (var j = 0; j < face_num; j++){
    push()
      var f_s = face_size[j] //把face_size全部換成f_s
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      fill(255,243,224) //臉的顏色
      ellipse(0,0,f_s)  //臉
      ellipse(-f_s/2,f_s/10,f_s/8,f_s/5.7) //左耳
      ellipse(f_s/2,f_s/10,f_s/8,f_s/5.7) //右耳
      
      if(mouseIsPressed){
        fill(122,155,118) //產生綠色
      }
      else{ //否則
        fill(114,81,77) //產生暗紅色
      }
      arc(-f_s/17,-f_s/8,f_s/6,f_s/6,90,-70)  //鼻子

      //左眼
      fill(0)
      ellipse(-f_s/3.5+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20,f_s/15)
      //加map讓眼睛跟隨
      
      //右眼
      fill(0)
      ellipse(f_s/4.5+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20,f_s/15)
      //加map讓眼睛跟隨
      
      noFill()
      arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      if(mouseIsPressed)
      {   //mouseIsPressed為true，代表有按下滑鼠
        arc(0,f_s/4-1,f_s/2,f_s/10,0,180)   //上弧
      }
      else
      {   //mouseIsPressed為false，代表沒有按下滑鼠
        arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //上弧
      }
    
      //if(mouseIsPressed){
        //arc(0,f_s/4-1,f_s/2,f_s/10,0,180) //音樂沒有撥放
      //}
      //else{
        //vol = amp.getLevel() //值會在0~1
        //console.log(vol)
        //arc(0,f_s/4-1,f_s/2,f_s/map(vol,0,1,2,1),0,180)
      //}


        noFill()
    pop()
  }    
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
