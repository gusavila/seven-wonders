let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let iceland = document.querySelector('.item:nth-child(1)')
let australia = document.querySelector('.item:nth-child(2)')
let netherland = document.querySelector('.item:nth-child(3)')
let ireland = document.querySelector('.item:nth-child(4)')
let switzerland = document.querySelector('.item:nth-child(5)')
let finland = document.querySelector('.item:nth-child(6)')

// Next button
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

// Previous button
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

// It will display icenland on the screen if click on the 200 pixels iceland image on the position [2] 
iceland.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    if (iceland.offsetWidth == 200 && items[2] == iceland){
        document.querySelector('.slide').appendChild(items[0])
    }
})

// It will display australia on the screen if click on the 200 pixels australia image on the position [2] 
australia.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    if (australia.offsetWidth == 200 && items[2] == australia){
        document.querySelector('.slide').appendChild(items[0])
    }
})

// It will display netherland on the screen if click on the 200 pixels netherland image on the position [2] 
netherland.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    if (netherland.offsetWidth == 200 && items[2] == netherland){
        document.querySelector('.slide').appendChild(items[0])
    }
})

// It will display ireland on the screen if click on the 200 pixels ireland image on the position [2] 
ireland.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    if (ireland.offsetWidth == 200 && items[2] == ireland){
        document.querySelector('.slide').appendChild(items[0])
    }
})

// It will display switzerland on the screen if click on the 200 pixels switzerland image on the position [2] 
switzerland.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    if (switzerland.offsetWidth == 200 && items[2] == switzerland){
        document.querySelector('.slide').appendChild(items[0])
    }
})

// It will display finland on the screen if click on the 200 pixels finland image on the position [2] 
finland.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    if (finland.offsetWidth == 200 && items[2] == finland){
        document.querySelector('.slide').appendChild(items[0])
    }
})