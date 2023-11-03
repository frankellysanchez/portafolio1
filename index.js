const project = document.getElementById("Project");
const AboutMe = document.getElementById("AboutMe");
const btnMenu = document.getElementById("btnMenu");
const navBtn = document.getElementById("navBtn");
const btnClose =document.getElementById("btnClose");
const modalApp = document.getElementById("modalApp");
const elements = document.querySelectorAll('.element');


document.addEventListener("DOMContentLoaded", () =>{
    const typingText =document.getElementById("typingText");

let text = "Enthusiastic Junior Frontend Developer"
let indexText = 0
    function typeText () {
        if(indexText < text.length) {
            typingText.textContent += text.charAt(indexText);
            indexText++ 
            setTimeout(typeText, 70);
        }
    }
    typeText()
})

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7, 
};

const observer = new IntersectionObserver(handleIntersect, options);

elements.forEach(element => {
  observer.observe(element);
});

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
}




AboutMe.addEventListener("click", () =>{
    const mainCotainer = document.getElementById("mainCotainer");
    mainCotainer.scrollIntoView({ behavior: 'smooth'});
});
project.addEventListener("click", () =>{
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.scrollIntoView({behavior:"smooth"});
});




function showBtnMenu(){
    if(window.innerWidth <= 600){
        navBtn.classList.add("hidden")
        btnMenu.classList.remove("hidden");
    }else if(window.innerWidth >= 601){
        navBtn.classList.remove("hidden")
        btnMenu.classList.add("hidden")
    }
}
window.addEventListener('load', showBtnMenu);
window.addEventListener('resize', showBtnMenu);


// function showModalMenu(){
    
// }

let modalVisible = false;
btnMenu.addEventListener("click", () =>{
    const modalContainer =  document.getElementById("modalContainer");
    if(modalVisible){
        modalContainer.innerHTML = ""
    }else {
        let div = document.createElement("div");
        let ul = document.createElement("ul");
        let img = document.createElement("img");
        let items = ["About me", "Project"]

        items.forEach((itemText, index) =>{
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.id = `Link${index}`
            a.textContent = itemText;
            li.classList.add("font-semibold", "text-xl", "py-6");
            li.appendChild(a)
            ul.appendChild(li)
        });
        img.src = "/imagenes/1689564132637.jpeg"
        //img.style.borderRadius = "100%"
        img.alt = "avatar"
        img.classList.add("m-0", "w-32", "h-32", "rounded-full")
        ul.classList.add("text-white", "flex", "items-center", "flex-col")
        div.classList.add("h-screen","text-white","absolute","bg-[#222222]","w-full", "h-screen","z-30","flex","items-center","justify-start","flex-col","pt-20");
        div.appendChild(img)
        div.appendChild(ul)
        modalContainer.appendChild(div);
    }

    modalVisible = !modalVisible
});

const movieBtn = document.querySelectorAll(".card")
const SectionContainer = document.getElementById("projectContainer");
movieBtn.forEach((element, index) =>{
    element.id=`item${index}`
    element.addEventListener("click", function(){
        if(element.id === "item0" || element.id === "item1"){
            const SectionContainer = document.getElementById("projectContainer");
            SectionContainer.classList.add("h-[2000px]")
            btnClose.classList.remove("hidden");
            modalApp.classList.remove("hidden");
            modalMovieApp();
        }else if (element.id === "item2" || element.id === "item3") {
            console.log("this is fotis app")
        }
    });
});


btnClose.addEventListener("click", ()=>{
    SectionContainer.classList.remove("h-[2000px]")
    btnClose.classList.add("hidden");
    modalApp.classList.add("hidden");
});



//here is the content html of the modalMovieApp.
function modalMovieApp(){
    
    const dynamicHTML = `
  <div  class="w-full h-auto  bg-[#2C3654] z-40  text-white rounded-3xl  absolute top-0 mr-5 drop-shadow-xl">
        <h1 class=" text-3xl text-center font-bold my-4">Movie App</h1>
        <div class=" grid grid-cols-1 w-full h-full relative m-auto pb-[320px]">

            <div class="m-auto flex justify-center  border-b border-black my-5 py-5">
                    <div class="max-w-sm mx-5">
                        <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Hero</h3>
                        <p class="text-xl font-normal">In the hero section, I've added an infinite carousel to showcase our products using Tailwind CSS keyframes. I've optimized the scroll behavior for a smoother experience when clicking the 'Get Print from Gallery' button, making the user experience more engaging and user-friendly
                        </p>
                    </div>
                    <div class=" py-3 w-96 h-96">
                        <img src="/imagenes/hero.png" class="showImage w-full h-full rounded-3xl drop-shadow-lg max-h-[600px] max-w-5xl cursor-pointer">
                    </div>
            </div>


            <div class="m-auto flex justify-center my-5">
                <div class=" py-3 px-2 w-96 h-96">
                    <img src="/imagenes/mobilheros.jpg" class=" showImage w-full h-full rounded-3xl drop-shadow-lg max-h-[600px] max-w-5xl cursor-pointer">
                </div>
                <div class="max-w-sm px-2 mx-5">
                    <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Responsive Mobile</h3>
                    <p class="text-xl font-normal">In this feature, I enhanced the page's responsiveness by introducing a menu button and a dropdown menu, thereby improving the user experience. These functions and events were implemented using JavaScript, resulting in a more user-friendly design to engage a wider audience.
                    </p>
                </div>
            </div>
            <div class="m-auto flex justify-center my-5">
                <div class="max-w-sm px-2 mx-5">
                    <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Blog Section</h3>
                    <p class="text-xl font-normal">In this feature, I developed an entire section of informative static blogs for FontisAI. This section was initially built using Next.js and later migrated to the platform. I further customized and enriched it with various functionalities and events, enhancing its overall performance and user experience.
                    </p>
                </div>
                <div class=" py-3 px-2 w-96 h-96">
                    <img  src="/imagenes/Screenshot 2023-09-29 162447.png" class="showImage w-full h-full rounded-3xl drop-shadow-lg max-h-[600px] max-w-5xl cursor-pointer">
                </div>
            </div>

            <div class="m-auto flex justify-center my-5">
                <div class=" py-3 px-2 w-96 h-96">
                    <img  src="/imagenes/skeleton.jpg" class="showImage w-full h-full rounded-3xl drop-shadow-lg max-h-[600px] max-w-5xl cursor-pointer">
                </div>
                <div class="max-w-sm px-2 mx-5">
                    <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Skeleton Loader</h3>
                    <p class="text-xl font-normal">In this feature, I enhanced the loading experience by refining the skeleton loader. Previously, there was a slight delay before content appeared, leaving the interface empty while images loaded. This improvement ensures a smoother and more visually appealing transition during loading.
                    </p>
                </div>

                <div class="absolute bottom-1 py-5"> 
                <p class="text-center py-2 ">Webside Link</P>
                    <a href="https://fontis.ai/" target="_blank">
                        <img src="/imagenes/fontisai_logo.png" class="w-[300px] h-[50px]transform transition-transform hover:scale-110 ease-in-out duration-300" blank=""> 
                    </a> 
                </div>
        </div>
  </div>
  `;

    modalApp.innerHTML = dynamicHTML
    const showImage = document.querySelectorAll(".showImage");
    //const container = document.getElementById("container");
  showImage.forEach((img, index) => {
    img.addEventListener("click", () => {
      if (img.classList.contains("expanded")) {
       // container.classList.remove("blur-lg");
        img.classList.remove("expanded");
        img.classList.remove("absolute");
        img.classList.remove("z-50");
        img.classList.remove("top-auto");
        img.classList.remove("right-[119px]");
      } else {
        showImage.forEach((otherImg) => {
          otherImg.classList.remove("expanded");
          otherImg.classList.remove("absolute");
          otherImg.classList.remove("z-50");
          otherImg.classList.remove("top-auto");
          otherImg.classList.remove("right-[119px]");
        });
        //container.classList.add("blur-lg")
        img.classList.add("top-auto")
        img.classList.add("expanded");
        img.classList.add("absolute");
        img.classList.add("z-50");
        img.classList.add("right-[119px]");
      }
    });
  });
    
    return modalApp
}