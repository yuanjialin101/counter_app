let backward = document.querySelector('.backward')
let forward = document.querySelector('.forward')
let number = document.querySelector('.number')


let count = 0

backward.addEventListener('click',()=>{
   if(count <= 0){
    count = 0 
    number.textContent = count
    alert(`you have reached count number ${count}`)
    return count
   }
   count = count - 1
   number.textContent = count
}

)
forward.addEventListener('click',()=>{
    count = count + 1
    number.textContent = count
   
}



)

console.log(number)