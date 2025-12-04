//1 не поннял ///



//2//

const teg = document.querySelector('.hello')
const btn = document.querySelector('button')

btn.addEventListener('click' , function(){
  if ( teg.style.color !== "red")
    teg.style.color = "red";
else (teg.style.color = "")
})





//3 не понял//
const imgs = document.getElementsByTagName("img")
imgs.style.display = "none";


btn.addEventListener("dblclick" , function(){
  const imgResult = Math.floor(Math.random) * imgs.length;

  imgs[imgResult].style.display = "block";

})





