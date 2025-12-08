//1  поннял //на уроке обястнили/



//2//

const teg = document.querySelector('.hello')
const btns = document.querySelector('.buton-color')

btns.addEventListener('click' , function(){
  if ( teg.style.color !== "red")
    teg.style.color = "red";
else (teg.style.color = "")
})





//3//
const imgs = document.getElementsByTagName('img');
const btn = document.querySelector('.buton-img');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].style.display = "none";
}

btn.addEventListener('click', function () {

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }

  const imgResult = Math.floor(Math.random() * imgs.length);

  imgs[imgResult].style.display = "block";
});







