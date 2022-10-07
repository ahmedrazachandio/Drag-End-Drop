console.log("this is drag and drop utility")
const imgBox = document.getElementsByClassName("imgBox");
const whiteBox = document.getElementsByClassName("whiteBox");

imgBox.addEventListener('dragstart', ()=>{
    console.log('DragStart has been triggered ');
})
imgBox.addEventListener('dragend', ()=>{
    console.log('DragEnd has been triggered ');
})