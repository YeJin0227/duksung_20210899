  
// 20210899_이예진 첫번째 업로드

let img; 

function setup() {
  img = loadImage("jj.png");
  createCanvas(1280, 720); // 이미지 크기에 맞게 캔버스 크기 설정.
}

function draw() {
  image(img,0,0,1280,720);
  
  if (mouseIsPressed == true){
    console.log("mouseX:"+mouseX,"mouseY:"+mouseY);
  } // 삼각형 꼭짓점 위치를 알아내기 위한 console.log
  
  //얼굴 삼각형 5개
  noStroke(); //삼각형의 테두리를 없앰
  fill(219, 202, 182); //색상
  triangle(571,346,617,335,567,314);
  fill(230, 214, 199);
  triangle(567,314,617,335,610,274);
  fill(240, 224, 211);
  triangle(567,314,610,274,547,255);
  fill(216, 190, 165);
  triangle(617,335,675,310,609,274);
  fill(190, 165, 135);
  triangle(643,361,708,335,673,309);

}