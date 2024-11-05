let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r =20
// ==================================================
function preload(){  
    //VariableFont_wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}

function setup() { //設定初始內容，只會執行一次
    createCanvas(windowWidth, windowHeight);  //產生一個畫布
    angleMode(DEGREES) //設定三角函數的角度用0~360
    background("＃edae49") //黃色背景
    points = font.textToPoints("IronMan"), -300, 80, 200, {
    sampleFactor:0.1
    
  }
  }

  function draw() { //畫圖，每秒會畫60次
    background("＃edae49") //背景顏色
    rectMode(CENTER) //設定方形的座標點放在方形的中間
    noFill() //以下所畫的未見不要充滿顏色
    strokeWeight(2)

    var rect_width=50 +mouseX/10 //方形的寬度
    var bc_width=50 +mouseY/10 //大圓的寬度
    var sc_width=25 +mouseX/100 //小圓的寬度

   for(let j=0;j<50;j=j+1) { //產生第幾排，共20排
   for(let i=0;i<90;i=i+1) { //產生一整排的物件(兩個圓加上一個方形)，每排有40個物件
   
   ellipse(25+50*i,25+50*j,bc_width) //在座標(x:25,y:25,h:50)畫一個直徑為50的圓
   stroke("#ffd60a")
  
   rect(25+50*i,25+50*j,rect_width) //畫方形，在座標(x:25,y:25)畫一個直徑為50的方形
   stroke("#d00000")

   ellipse(50+50*i,50+50*j,sc_width) //畫小圓，直徑為25{rect(25,25,50)
   stroke("#0077b6")
   }
  }
  
    translate(width/2,height/2) //把原本原點(0,0)在左上角，改為到畫布中心點(winth/2,height/2)為原點(0,0)
    rotate((frameCount)%360) //依照frameCount除以360求餘數
    for (let i=0; i<points.length-1; i++) 
    strokeWeight(5) //線條的粗細
   
   translate(mouseX,mouseY) 
   rotate((frameCount)%360) 
        
   stroke("#111111") //線條顏色
   strokeWeight(8) //線條粗細
   line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10))


 angle=angle+10
}
