function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    
    let current = start;
    const step = end > start ? 1 : -1;
    
    const timer = setInterval(function() {
        current += step;
        obj.innerHTML = current;
        
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const target = document.getElementById('number').getAttribute('data-target');
// animateValue('number', 600, parseInt(target), 1000);



    window.addEventListener("scroll",function(){
    if(window.scrollY>450){
        animateValue('number', 600, parseInt(target), 1000);
    }
})


$(document).ready(function(){



    
    $(".section li").click(function(){
        let a = $(this).index();
        console.log(a);
        $(".Page:nth-of-type(4) .section .board").eq(a).css("display","block");
        $(".Page:nth-of-type(4) .section .board").eq(a).siblings(".board").css("display","none");
        $(".section li").css({"font-weight":"200","opacity":"0.8"});
        $(this).css({"font-weight":"600","opacity":"1"});
    });
});