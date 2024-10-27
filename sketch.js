  
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

  //파란색 삼각형 8개 추가
  fill(164, 173, 194);
  triangle(546,254,611,274,591,208);
  fill(170, 181, 209);
  triangle(610,274,653,229,590,208);
  fill(145, 159, 196);
  triangle(610,274,674,310,653,228);
  fill(33, 42, 76);
  triangle(696,270,707,336,787,327);
  fill(33, 36, 56);
  triangle(707,335,753,379,787,326);
  fill(46, 57, 87);
  triangle(695,270,787,328,755,269);
  fill(27, 33, 55);
  triangle(786,327,819,266,754,269);
  fill(34, 44, 79);
  triangle(784,329,849,321,819,265);
}