let input = document.getElementById("themer")
let bg_theme = document.querySelectorAll(".bg-theme")
let txt_theme = document.querySelectorAll(".txt-theme")
let fill_theme = document.querySelectorAll(".fill-theme")
let border_theme = document.querySelectorAll(".border-theme")
let stroke_theme = document.querySelectorAll(".stroke-theme")
let theme_mode = document.querySelector(".theme-mode")
let theme_mode_texts = document.querySelectorAll(".theme-text")
let theme_changer = document.querySelector(".theme-changer")
let wip_images = document.querySelectorAll(".wip-img")
let theme_bullets = document.querySelectorAll(".list-bullet")
let footer_lines = document.querySelectorAll(".footer-lines")
var flag = 1

theme_changer.addEventListener("click",ThemeChanger)





// Orientation()
function ThemeChanger(){
    if(flag == 1){

        document.body.style.background = "black"
        theme_mode_texts.forEach(it =>{
            it.style.color = "white"
        })
        wip_images.forEach(it=>{
            it.style.filter = "invert(100%)"
        })
        theme_bullets.forEach(it=>{
            it.style.background = "white"
        })
        footer_lines.forEach(it=>{
            it.style.background = "white"
        })
        {  
            document.querySelector(".theme-changer").src = "../static/images/icons/sun.png"
            document.querySelector(".theme-changer").style.filter = "invert(100%)"
            document.querySelector(".footer-tag").style.background = "rgb(27, 27, 27)"
            document.querySelector(".phase-1").style.background = "rgb(27, 27, 27)"
            document.querySelector(".nav-bar").style.background = "black"
            document.querySelector(".whiten").style.background = "rgb(27, 27, 27)"
            document.querySelector(".nav-bar").style.border = "1px solid white"
        }
        flag = 0
}else if(flag == 0){
        document.body.style.background = "white"
        theme_mode_texts.forEach(it =>{
            it.style.color = "black"
        })
        wip_images.forEach(it=>{
            it.style.filter = "invert(0%)"
        })
        theme_bullets.forEach(it=>{
            it.style.background = "black"
        })
        footer_lines.forEach(it=>{
            it.style.background = "black"
        })
        document.querySelector(".footer-tag").style.background = "aliceblue"
        document.querySelector(".theme-changer").src = "../static/images/icons/moon.png"
        document.querySelector(".theme-changer").style.filter = "invert(0%)"
        document.querySelector(".phase-1").style.background = "aliceblue"
        document.querySelector(".nav-bar").style.background = "white"
        document.querySelector(".nav-bar").style.border = "1px solid black"
        document.querySelector(".whiten").style.background = "aliceblue"
        flag = 1

    }
}
function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return l;
}
function Themer(){
    // let light = hexToHSL(input.value);
    // if(light > 70){
    //     document.body.style.background = "black"
    //     theme_mode_texts.forEach(it =>{
    //         it.style.color = "white"
    //     })
    //     wip_images.forEach(it=>{
    //         it.style.filter = "invert(100%)"
    //     })
    //     document.querySelector(".theme-changer").src = "icons/sun.png"
    //     document.querySelector(".theme-changer").style.filter = "invert(100%)"
    //     document.querySelector(".phase-1").style.background = "rgb(27, 27, 27)"
    //     document.querySelector(".nav-bar").style.background = "black"
    //     document.querySelector(".whiten").style.background = "rgb(27, 27, 27)"
    //     document.querySelector(".nav-bar").style.border = "1px solid white"
    // }else{
    //     // document.body.style.background = "white"
    //     document.body.style.background = "white"
    //     theme_mode_texts.forEach(it =>{
    //         it.style.color = "black"
    //     })
    //     wip_images.forEach(it=>{
    //         it.style.filter = "invert(0%)"
    //     })
    //     document.querySelector(".theme-changer").src = "icons/moon.png"
    //     document.querySelector(".theme-changer").style.filter = "invert(0%)"
    //     document.querySelector(".phase-1").style.background = "aliceblue"
    //     document.querySelector(".nav-bar").style.background = "white"
    //     document.querySelector(".nav-bar").style.border = "1px solid black"
    //     document.querySelector(".whiten").style.background = "aliceblue"

        
    // }
    bg_theme.forEach(it =>{
        it.style.backgroundColor = input.value

    })
    txt_theme.forEach(it =>{
        it.style.color = input.value

    })
    fill_theme.forEach(it =>{
        it.style.fill = input.value
    })

    border_theme.forEach(it =>{
        it.style.border = `3px solid ${input.value}`
    })

    stroke_theme.forEach(it => {
        it.style.stroke = input.value
    })
}

Themer()
setInterval(Themer)


