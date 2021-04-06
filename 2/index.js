 const div = (val, by) => (val - val % by) / by; 

const add0 = (num) => {
  if(num < 10){
    num = "0" + num
  }
  return num
}//Добавление 0 в координатах

const coorX = (X) =>{
  X = (X - 36.00) / 18.54;
  console.log(X)
  minX = Math.abs(X.toFixed() % 60);
  gradX = 49 + div(Math.ceil(X), 60);
  return gradX + "." + add0(minX);
} //Перевод из координат клика в координты карты для широты

const coorY = (Y) =>{
  Y = (1157 - Y + 562) / 28.1;
  console.log(Y);
  minY = Math.abs(Y.toFixed() % 60);
  gradY = 55 + div(Math.ceil(Y), 60);
  return gradY + "." + add0(minY);
} //Перевод из координат клика в координты карты для долготы


$(document).ready(function() {
  $('img').click(function(e) {
   var offset = $(this).offset();
   var X = (e.pageX - offset.left).toFixed(2);
   var Y = (e.pageY - offset.top).toFixed(2);
   console.log(X);
   console.log(Y);
   $('#coordinates').text("Координаты точки: " + coorX(X) + "  " + coorY(Y));
   });
  });//Координаьы нажатой точки



