(function () {
    "use strict";
    const myphotos = ["Cat1.jpg", "Cat2.jpg", "Cat3.jpg", "Cat4.jpg", "Cat5.jpg", "Cat6.jpg", "Cat7.jpg", "Cat8.jpg"];
    //setting to the index 0 
    let currentImage = 0;
    const container = document.getElementById("content");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");
    console.log(currentImage);
    nextBtn.addEventListener("click", function(event){
        //it will cancels the event ,the default action that belongs to the event will not occur ie going to the link in href 
        event.preventDefault();
        currentImage++;
        console.log(currentImage);
        if(currentImage > myphotos.length-1){
            currentImage = 0;
        }
        swapImage();
    });

    prevBtn.addEventListener("click", function(event){
        //it will cancels the event ,the default action that belongs to the event will not occur ie going to the link in href 
        event.preventDefault();
        currentImage--;
        console.log(currentImage);
        if(currentImage < 0){
            currentImage = myphotos.length-1;
        }
        swapImage();
    });
    
    function swapImage(){
        // console.log(currentImage);
        const newSlide = document.createElement("img");
        newSlide.classname = "fadeinimg";
        newSlide.id = "myimage";
        newSlide.src = `${myphotos[currentImage]}`;
        container.appendChild(newSlide);

        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }

})();