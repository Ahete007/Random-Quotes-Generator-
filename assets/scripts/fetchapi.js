window.addEventListener('DOMContentLoaded', ()=>{
    const innerQuotesDiv=document.querySelectorAll('div')[2]
    const article=innerQuotesDiv.firstElementChild
    const authorName=article.nextElementSibling

    function changeQuotes(quotes) {
       // console.log(quotes)
        let index = generateRandomIndex(quotes.length)
        innerQuotesDiv.classList.add('inner')
        article.textContent = quotes[index].text
        if (!quotes[index].author) {
            authorName.textContent = 'Anonymous'
        } else {
            authorName.textContent = quotes[index].author
        }
    }
    

    const request= fetchData('https://type.fit/api/quotes');
    //console.log(request)

    document.querySelector('button').addEventListener('click',()=>{
           request.then(changeQuotes);
    })
})

function generateRandomIndex(length){
   // console.log(length)
    return (Math.floor(Math.random()*length))
}

function fetchData(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            //console.log(data)
            return data
        })
}




//old code

// const button=document.querySelector('button')
// const innerQuotesDiv=document.querySelectorAll('div')[2]
// const article=innerQuotesDiv.firstElementChild
// const authorName=article.nextElementSibling
// let quotes;
// // console.log(button)
// // console.dir(innerQuotesDiv)
//  //console.log(article)
//  //console.log(authorName)

//  quotes=window.addEventListener('load',fetchApi)
// function generateRandomIndex(length){

//   console.log(length)
//   return (Math.floor(Math.random()*length))
// }

// function fetchApi(){

//    let d=fetch('https://type.fit/api/quotes')
//     .then(response=>{
//         return response.json()
//     })
//     .then(data=>{
//         console.log(data)
//         return data
//     })
//     console.log(d)
//     return d
// }




// function changeQuotes(){
     
//     console.log(quotes)
//     let index=generateRandomIndex(quotes.length)
//     innerQuotesDiv.classList.add('inner')
//     article.textContent=quotes[index].text 
//     if(!quotes[index].author)
//    {
//        authorName.textContent='Anonymous'  
//    }
//    else{
//     authorName.textContent=quotes[index].author  
//    }

// }
//   button.addEventListener('click',()=>{
      
//          changeQuotes()
//   })
