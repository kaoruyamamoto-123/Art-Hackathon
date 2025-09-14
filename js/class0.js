class c0{
    x = Math.random()*window.innerWidth*0.9;
    y = window.innerHeight/2;
    w = window.innerWidth*0.05;
    h = this.w;
    alpha = 0;
    constructor(count,время){
        let div_ = document.createElement('div');
        div_.className = 'personaj';
        div_.setAttribute('id','id'+count);
        if(время>0){
            this.timerID = setTimeout(function(){
                delete obj[div_.getAttribute('id')];
                div_.remove();
            },время);
        }        
        div_.setAttribute('onclick','f_click(event)');
        scene1.appendChild(div_);
        this.picture = div_;
    }
    f0(){
        this.picture.style.transform = 'rotate(' + (-this.alpha) + 'deg)';
        this.picture.style.width = this.w + 'px';
        this.picture.style.height = this.h + 'px';
        this.picture.style.left = this.x - (this.w/2) + 'px';
        this.picture.style.top = this.y - (this.h/2) + 'px';
    }
    f1(){}
    идти_в(x,y){
        this.x = x;
        this.y = y;
    }
    вперед(шаг){
        let dx = шаг*Math.sin(this.alpha*Math.PI/180);
        let dy = шаг*Math.cos(this.alpha*Math.PI/180);
        this.x += dx;
        this.y += dy;
    }
    повернуться_к(obj2){
        this.alpha = Math.atan2(obj2.x-this.x,obj2.y-this.y)*180/Math.PI;
    }
    удалить_объект(){
        clearTimeout(this.timerID);
        delete obj[this.picture.getAttribute('id')];
        this.picture.remove();
    }
}