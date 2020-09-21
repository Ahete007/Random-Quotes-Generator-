const button=document.querySelector('button')
const innerQuotesDiv=document.querySelectorAll('div')[2]
const article=innerQuotesDiv.firstElementChild
const authorName=article.nextElementSibling
let quotes;

function generateRandomIndex(length){

    //console.log(length)
    return (Math.floor(Math.random()*length))
  }

  window.addEventListener('load',()=>{
   
    let xhr=new XMLHttpRequest()
    xhr.open('GET','https://type.fit/api/quotes')
    xhr.onload=function(){

       quotes=JSON.parse(xhr.response)
        //console.log(quotes)
        
    }
    
    xhr.onerror=function(){

      console.log(xhr.response)
      console.log(xhr.status)
      alert('something went wrong')
  }
  xhr.send() 

  })

  button.addEventListener('click',()=>{

    //console.log('clicked')
    
    let index=generateRandomIndex(quotes.length)
    innerQuotesDiv.classList.add('inner')
    article.textContent=quotes[index].text 
    if(!quotes[index].author)
   {
       authorName.textContent='Anonymous'  
   }
   else{
    authorName.textContent=quotes[index].author  
   }

   
    

})