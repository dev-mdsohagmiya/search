const mainRow = document.querySelector(".main-row")
const form = document.querySelector("form")
const button = document.querySelector("button")
const input = document.querySelector("input")
input.value=""
// button.addEventListener("click",()=>{
//  console.log(input.value.toUpperCase())
//  if(input.value == input.value.toUpperCase()){
//      console.log("uppercase")
//  }
// })

blog_data.forEach((e)=>{
    let card = `
    <div class="col-xl-6 col-lg-6 col-12 blog-items col-width">
    <div class="card col-margin p-2">
     <div class="row">
       <div class="col-xl-5 col-lg-5 col-md-5 col-12">
           <h5 class=" title mt-2"> <small>${e.title}</small></h5>
           <small class="dec ">${e.dec}</small>
       <br>   <a style="color: gray;" href="#">Read more</a>
                
              <div class="mb-3">  <b class="mt-2 d-inline-block ">Writing by:</b> <span>${e.writingBy}</span> <span class="w-n py-2">@${e.writingBy}</span>
              </div>
                                    
        </div>
       <div class="col-xl-7 col-lg-7 col-md-7 col-12 text-center ">
           <img class="img-thumbnail img mt-3" src="${e.img}" alt="">
         <br>
       </div>
   </div>
    </div>
       
    </div>
    
    `
mainRow.insertAdjacentHTML("beforeend",card)

input.addEventListener("input",()=>{
    
    if(input.value == ""){
        mainRow.value = ""
        let card = `
        <div class="col-xl-6 col-lg-6 col-12 blog-items col-width">
        <div class="card col-margin p-2">
         <div class="row">
           <div class="col-xl-5 col-lg-5 col-md-5 col-12">
               <h5 class=" title mt-2"> <small>${e.title}</small></h5>
               <small class="dec ">${e.dec}</small>
           <br>   <a style="color: gray;" href="#">Read more</a>
                    
                  <div class="mb-3">  <b class="mt-2 d-inline-block ">Writing by:</b> <span>${e.writingBy}</span> <span class="w-n py-2">@${e.writingBy}</span>
                  </div>
                                        
            </div>
           <div class="col-xl-7 col-lg-7 col-md-7 col-12 text-center ">
               <img class="img-thumbnail img mt-3" src="${e.img}" alt="">
             <br>
           </div>
       </div>
        </div>
           
        </div>
        
        `
    mainRow.insertAdjacentHTML("beforeend",card)
    }
})

})
form.addEventListener("submit",(e)=>{
 e.preventDefault()
})


button.addEventListener("click",()=>{
    mainRow.innerHTML = ""
    blog_data.forEach((e)=>{
       let eValue  = e.title.toLowerCase()
       let inputValue = input.value.toLowerCase()
      if(eValue.includes(inputValue)){
          console.log(eValue)

          let card1 = `
          <div class="col-xl-6 col-lg-6 col-12 blog-items col-width">
          <div class="card col-margin p-2">
           <div class="row">
             <div class="col-xl-5 col-lg-5 col-md-5 col-12">
                 <h5 class=" title mt-2"> <small>${e.title}</small></h5>
                 <small class="dec ">${e.dec}</small>
             <br>   <a style="color: gray;" href="#">Read more</a>
                      
                    <div class="mb-3">  <b class="mt-2 d-inline-block ">Writing by:</b> <span>${e.writingBy}</span> <span class="w-n py-2">@${e.writingBy}</span>
                    </div>
                                          
              </div>
             <div class="col-xl-7 col-lg-7 col-md-7 col-12 text-center ">
                 <img class="img-thumbnail img mt-3" src="${e.img}" alt="">
               <br>
             </div>
         </div>
          </div>
             
          </div>
          
          `
      mainRow.insertAdjacentHTML("beforeend",card1)
      }
      if(!eValue.includes(inputValue)){
            console.log("title not fount")
      }
    })
})

