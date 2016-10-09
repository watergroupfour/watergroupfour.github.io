window.onload = function(){
    
    var barmap = document.getElementById("barmap"),
    inv = document.getElementById("inv"),
    investigation = document.getElementById("investigation"),
    map = document.getElementById("map");

    barmap.addEventListener("click", openMap);

    function openMap(){
        barmap.removeEventListener("click", openMap);
        inv.addEventListener("click", openInv);
        investigation.style.display = "none";
        map.style.display = "block";
        barmap.style.borderTop = "3px solid #33cc33"
        inv.style.borderTop = "none";
    }

    function openInv(){
        inv.removeEventListener("click", openInv);
        barmap.addEventListener("click", openMap);
        map.style.display = "none";
        investigation.style.display = "block";
        barmap.style.borderTop = "none"
        inv.style.borderTop = "3px solid #33cc33";
    }
    
};