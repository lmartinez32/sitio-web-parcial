const btnLeft = document.querySelector(".btn-left"); 
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

    btnLeft.addEventListener("click", e => moveToLeft());
    btnRight.addEventListener("click", e => moveToRight());

    let operacion = 0;
    let counter = 0;


    function moveToRight(){
        if (counter >= sliderSection.length) {
           counter = 0;
           operacion = 0;
           slider.style.transform = `translate(-${operacion}%)`;
        }else{
            counter++;
            operacion = operacion + 80
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s"
        }
    }

    function moveToLeft() {
        counter--;
        if (counter < 0) {
            counter = sliderSection.length-1;
            operacion = 80 * (sliderSection.length-1)
            console.log(operacion)
            slider.style.transform = `translate(-${operacion}%)`;
        }else{
            operacion = operacion - 80
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s"
        }
        
    }
    
