let counter = document.getElementById("counter");

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}  

async function count() {
    var target = 1442351;
    for(let i = 0; i <= target;) {
        counter.style.cssText = "--current: " + i;
        await delay(1);
        if(i < target-1111) {
            i+=1111;
        } else {
            i++;
        }
    }
}

count();

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, i) => {
    let content = slider.querySelector(".content");

    let items = content.querySelectorAll(".slider-item");
    let itemAmt = items.length;

    let buttons = slider.querySelector(".slider-buttons");

    let next = buttons.querySelector(".next");
    let prev = buttons.querySelector(".prev");

    if(parseInt(slider.getAttribute('data-current')) == null) {
        slider.setAttribute('data-current', 0);
    }

    let updateSliders = () => {
        items.forEach((item, index) => {
            item.classList.toggle(slider.getAttribute('data-class'), index==parseInt(slider.getAttribute('data-current'))?true:false);
        });
    }

    next.onclick = () => {
        slider.setAttribute('data-current', (parseInt(slider.getAttribute('data-current')) + 1 + itemAmt) % itemAmt)
        updateSliders();
    }

    prev.onclick = () => {
        slider.setAttribute('data-current', (parseInt(slider.getAttribute('data-current')) - 1 + itemAmt) % itemAmt)
        updateSliders();
    }

    updateSliders();
});