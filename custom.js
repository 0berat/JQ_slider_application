$(document).ready(function () {
 $(".slider li:first").fadeIn(500)
$(".slider li:not(:first)").hide()
 $(".slider li:first").fadeIn()
 index = 0;

slide_count = $(".slider li").length - 1;

//Nativation Butonların Uretilmesi...
 navigation_button_count = $(".slider li").length

 for(i=1; i<=navigation_button_count;i++){
  $(".navigation").append("<li> <a href='#'>"+ i +"</a></li>");
 }
$(".navigation li:first").find("a").addClass("active");

 /**************************************************************/






$(".navigation li").click(function () {
index = $(this).index(); // var ı silince index globalleşerek bütün projeye etki ediyor.


$(".slider li ").hide();
$(".slider li:eq("+ index +")").fadeIn();

$(".navigation li a").removeClass();
$(this).find("a").addClass("active");



})

 //Hover metodu ile slayt geçme işleminide yaptık fakat click metodu ile devam ettim.
 //


// $(".navigation li ").hover(function (){},function (){}) // ilk fonksiyon üzerine geldiğinde ikinci fonksiyon ise üzerinden gidildiğinde


 // $(".navigation li ").hover(function (){
 //  var index = $(this).index();
 //
 //
 //  $(".slider li ").hide();
 //  $(".slider li:eq("+ index +")").fadeIn(500);
 //
 //  $(".navigation li a").removeClass();
 //  $(this).find("a").addClass("active");
 //
 // },function (){})
 //

$("#prev").click(function () {
 if (index == 0){
  index= slide_count;
 }else {
  index--;
 }
 $(".slider li ").hide();
 $(".slider li:eq("+ index +")").fadeIn();

 $(".navigation li a").removeClass();
 $(".navigation li:eq("+ index +")").find("a").addClass("active");


})
$("#next").click(function () {
 if (index == slide_count){
  index=0;
 }
 else {
  index++;
 }



 $(".slider li ").hide();
 $(".slider li:eq("+ index +")").fadeIn();

 $(".navigation li a").removeClass();
 $(".navigation li:eq("+ index +")").find("a").addClass("active");

})

})