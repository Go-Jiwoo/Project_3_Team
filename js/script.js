const content = document.querySelectorAll('.menu');
const subContent = document.querySelectorAll('.board')
const ACTIVE = "active"


content.forEach(function(contents){
    contents.addEventListener("click",function(){

        subContent.forEach(function(subContents){
            subContents.classList.remove(ACTIVE);
        })
        content.forEach(function(contents){
            contents.classList.remove(ACTIVE);
        });
        contents.classList.add(ACTIVE);
    })
    contents.classList.remove(ACTIVE);
})

subContent.forEach(function(subContents){
    subContents.addEventListener("click",function(){
        subContent.forEach(function(subContents){
            subContents.classList.remove(ACTIVE);
        })
        subContents.classList.add(ACTIVE);
    })
})