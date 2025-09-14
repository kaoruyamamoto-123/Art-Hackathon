function f_creat_obj(класс,время,имена_классов,x,y,s){
    eval("obj['id'+count] = new "+класс+"(count,"+время+");");
    for(let name of имена_классов) obj['id'+count].picture.classList.add(name);
    if (x!=0) obj['id'+count].x = x;
    if (y!=0) obj['id'+count].y = y; 
    if (typeof(s.dw)!='undefined') obj['id'+count].w *= s.dw;
    if (typeof(s.dh)!='undefined') obj['id'+count].h *= s.dh;
    if (typeof(s.alpha)!='undefined') obj['id'+count].alpha = s.alpha
    if (typeof(s.сместить)!='undefined') obj['id'+count].вперед(s.сместить);
    if (typeof(s.txt)!='undefined') obj['id'+count].picture.innerHTML = s.txt;
    if (typeof(s.музыка)!='undefined') playsound(s.музыка);
    if (typeof(s.color)!='undefined') obj['id'+count].picture.style.color = s.color;
    count++;    
}

function playsound(src){
    var audio = new Audio(src);
    audio.play();
    audio.onended = function(){this.remove()};
 }

//получение GET-переменных
var strGET = window.location.search.replace( '?', '').split('&').reduce(
    function(p,e){
        var a = e.split('=');
        p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
    },
    {}
);
/* console.log( let level = strGET['level']); */