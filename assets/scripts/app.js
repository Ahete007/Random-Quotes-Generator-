const button=document.querySelector('button')
const innerQuotesDiv=document.querySelectorAll('div')[2]
const article=innerQuotesDiv.firstElementChild
const authorName=article.nextElementSibling
// console.log(button)
// console.dir(innerQuotesDiv)
 //console.log(article)
 //console.log(authorName)


function generateRandomIndex(length){

  console.log(length)
  return (Math.floor(Math.random()*length))
}

button.addEventListener('click',()=>{

    console.log('clicked')
    let quotes=[
        {
            'id':1,
            'author':'Tyne Daly',
            'quoteContent':'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.'
        },

        {
            'id':2,
            'author':'John Kenneth Galbraith',
            'quoteContent':'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all.'
        },

        {
            'id':3,
            'author':'Life',
            'quoteContent':'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we\'ve got.'

        },

        {
            'id':4,
            'author':' William W. Purkey',
            'quoteContent':'You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt, Sing like there\'s nobody listening And live like it\'s heaven on earth.'
        }
            
    ]
    let index=generateRandomIndex(quotes.length)
    innerQuotesDiv.classList.add('inner')
    article.textContent=quotes[index].quoteContent
    authorName.textContent=quotes[index].author
    
    

})