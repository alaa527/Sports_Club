var myli1=document.getElementById("li1")
var myli2=document.getElementById("li2")
var myli3=document.getElementById("li3")
var myli4=document.getElementById("li4")
var feature=document.getElementById("feature")
myli2.style.cssText="color:#495057; border-left: 0px";
myli3.style.cssText="color:#495057; border-left: 0px";
myli4.style.cssText="color:#495057; border-left: 0px";
myli1.style.cssText="color:#0d6efd; border-left: 3px solid #009cea ; background-color: #f7f8f9;";

myli1.addEventListener("click",function(){
  
  myli2.style.cssText="color:#495057; border-left: 0px";
  myli3.style.cssText="color:#495057; border-left: 0px";
  myli4.style.cssText="color:#495057; border-left: 0px";
  myli1.style.cssText="color:#0d6efd; border-left: 3px solid gray; background-color: #f7f8f9; border-color:#0d6efd;";
  feature.src="./images/sking.avif";
})
myli2.addEventListener("click",function(){ 

  myli1.style.cssText="color:#495057; border-left: 0px";
  myli3.style.cssText="color:#495057; border-left: 0px";
  myli4.style.cssText="color:#495057; border-left: 0px";
  myli2.style.cssText="color:#0d6efd; border-left: 3px solid gray;background-color: #f7f8f9; border-color:#0d6efd;";
 feature.src="./images/tennis.jpg";

})

myli3.addEventListener("click",function(){

  myli2.style.cssText="color:#495057; border-left: 0px";
  myli1.style.cssText="color:#495057; border-left: 0px";
  myli4.style.cssText="color:#495057; border-left: 0px";
  myli3.style.cssText="color:#0d6efd; border-left: 3px solid gray;background-color: #f7f8f9; border-color:#0d6efd;";
  feature.src="./images/basketball.jpg";
})
myli4.addEventListener("click",function(){
  myli1.style.cssText="color:#495057; border-left: 0px";
  myli3.style.cssText="color:#495057; border-left: 0px";
  myli2.style.cssText="color:#495057; border-left: 0px";
  myli4.style.cssText="color:#0d6efd; border-left: 3px solid gray; background-color: #f7f8f9; border-color:#0d6efd;";
 feature.src="./images/volleyball.jpg";

})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,

    loop: true,
centerSlide:'true',
fade:'true',
grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       0: {
            slidesPerView: 1,
      
        },
       520: {
            slidesPerView: 2,
         
        },
        950: {
            slidesPerView: 3,
           
        },
    },


  });

  //Create Popup With The Image
  let ourGallery=document.querySelectorAll(".gallery img")
  ourGallery.forEach(img=>{
    img.addEventListener('click',(e)=>{
      //Create overlay element
      let overlay=document.createElement("div")
      //Add class to overlay
      overlay.className="popup-overlay";
      //Append overlay to the body
      document.body.appendChild(overlay)
      //create the popup box 
      let popupBox=document.createElement("div")
       //Add class to popupbox
      popupBox.className="popup-box"
      //Create the image
      let popupImage=document.createElement("img")

      popupImage.src=img.src;
      //Add image to popup box
      popupBox.appendChild(popupImage)
       //Append popupBox to the body
       document.body.appendChild(popupBox)
       //Create the close span
       let closebtn=document.createElement("span")
        //Create the closebtn text
        let closebtntext=document.createTextNode("X")
        //Append text to the closebtn
        closebtn.appendChild(closebtntext)
        //Add class to close btn
        closebtn.className="close-button"
      //Add closebtn to  popup box
      popupBox.appendChild(closebtn)

    })
  })

  //Close Popup
  document.addEventListener("click",function(e){
    if(e.target.className=="close-button"){
      //Remove the current popup
      e.target.parentNode.remove();
      //Remove Overlay
      document.querySelector(".popup-overlay").remove();
      
    
    }
  })