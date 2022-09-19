// Vars
mylocation = window.location.hostname.split(".");
c = 0;
detection = 0;
realurl = '';


console.log("PunyFIX : You are visitin " + window.location.href);

while (mylocation[c]) {

    if (c > 0 ) {
        realurl = realurl + '.';
    }

    if (mylocation[c].indexOf("xn--") >= 0) {
        // Possible attack here
        console.log("ATTACK DETECTED");
        detection = 1;

        // Attack mixed with normal letters
        if (mylocation[c].indexOf("xn--") > 0) {    
            pureXN = mylocation[c].slice(mylocation.indexOf("xn--"), mylocation.length);
            realurl = realurl + mylocation[c].slice(0, mylocation.indexOf("xn--")) + punycode.toUnicode(pureXN);

        } else {
            realurl = realurl + punycode.toUnicode(mylocation[c]);
        }
        
    } else {
        realurl = realurl + mylocation[c];
    }
    
    c++;
}

if (detection != 0) {

    bg = document.createElement("div");
    bg.style.backgroundColor = "rgba(0,0,0,0.3)";
    bg.style.width = window.innerWidth + "px";
    bg.style.height = window.innerHeight + "px";
    bg.style.position = "fixed";
    bg.style.top = "0px";
    bg.style.left = "0px";
    bg.style.zIndex = "99999";
    
    bx = document.createElement("div");
    bxs = bx.style;
    bxs.width = "500px";
    bxs.minHeight = "300px";
    bxs.backgroundColor = "rgb(240,240,240)";
    bxs.borderStyle = "solid";
    bxs.borderColor = "rgb(240,240,240)";
    bxs.boxShadow = "1px 1px 10px rgb(210,210,210)";
    bxs.position = "static";
    bxs.zIndex = "999991";
    bxs.marginLeft = "auto";
    bxs.marginRight = "auto";
    if ((window.innerHeight/2 - 280) < 0) {
        bxs.marginTop = "0px";
    } else {
        bxs.marginTop = (window.innerHeight/2 - 280) + "px";
    }
    bxs.fontFamily = "sans-serif";
    bxs.padding = "15px";

    bxtt = document.createElement("div");
    bxtts = bxtt.style;
    bxtts.fontSize = "28px";
    bxtts.backgroundColor = "rgb(255,0,0)";
    bxtts.color = "rgb(255,255,255)";
    bxtts.width = "500px";
    bxtts.textAlign = "center";
    bxtt.innerHTML = "DANGER - PERIGO - PELIGRO";

    bxtxt = document.createElement("div");
    bxtxts = bxtxt.style;
    bxtxts.fontSize = "19px";
    bxtxts.color = "rgb(0,0,0)";
    bxtxts.marginTop = "10px";
    bxtxt.innerHTML = "This website <span style='color:rgb(255,0,0)'>" + realurl + "</span> was modified to harm your computer and steal your data, this real address is:<br> <center><span style='font-size: 22px;'><strong>" + window.location.host + "</strong></span></center>";
    bxtxt.innerHTML = bxtxt.innerHTML + "<br>Este site <span style='color:rgb(255,0,0)'>" + realurl + "</span> foi modificado para roubar suas informações e danificar seu computador, o endereço real é:<br> <center><span style='font-size: 22px;'><strong>" + window.location.host + "</strong></span></center>";
    bxtxt.innerHTML = bxtxt.innerHTML + "<br>Este sitio <span style='color:rgb(255,0,0)'>" + realurl + "</span> ha sido modificado para robar su información y dañar el ordenador , la dirección real es:<br> <center><span style='font-size: 22px;'><strong>" + window.location.host + "</strong></span></center>";
    bxtxt.innerHTML = bxtxt.innerHTML + "<br><center> <span style='font-size: 12px; color:rgb(255,0,0)'>CLOSING TAB IN 10 SECONDS <br> FECHANDO HABA EM 10 SEGUNDOS <br> CERRANDO LA HABA EN 10 SEGUNDOS</center></span>"
    bxtxt.innerHTML = bxtxt.innerHTML + "<br> <span style='font-size: 16px; color:rgb(100,100,100)'>Protected by PunyFIX Extension</span>"
    bx.appendChild(bxtt);


    bx.appendChild(bxtxt);
    bg.appendChild(bx);
    document.body.appendChild(bg);




    window.addEventListener("resize", function() {
        bg.style.width = window.innerWidth + "px";
        bg.style.height = window.innerHeight + "px";
        if ((window.innerHeight/2 - 280) < 0) {
            bxs.marginTop = "0px";
        } else {
            bxs.marginTop = (window.innerHeight/2 - 280) + "px";
        }
    });



    setTimeout(function() {
        window.close();
    }, 10000);


}
