let Cookie = document.querySelector(".Cookie");
let ppp = document.querySelector('.p2')
let countclick = 0;
function tp() {
    const gameContainer = document.querySelector('.game');
    //Получаем размеры контейнера
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    //случайные коорды
    const randomX = Math.random() * (containerWidth - Cookie.offsetWidth);
    const randomY = Math.random() * (containerHeight - Cookie.offsetHeight);
    //установка кордов
    Cookie.style.left = `${randomX}px`;
    Cookie.style.top = `${randomY}px`;
}
Cookie.addEventListener("click", function(){
    countclick++;
    ppp.textContent = countclick; 
    tp();
})
