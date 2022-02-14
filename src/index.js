// write your code here
let globalPumpkin;
let globalIngredients;

let pumpkinTitle = document.querySelector('.title')
let pumpkinPic = document.querySelector('.detail-image')
let displayIngredients = document.querySelector('.ingredients-list')
let spiceBlendTitleInput = document.querySelector('#spiceblend-title')
let updateForm = document.querySelector('#update-form')
let ingredientForm = document.querySelector('#ingredient-form')

ingredientForm.addEventListener('submit', event => {
    event.preventDefault()
    // console.log('new new')
    // let ingredientName = document.querySelector('#ingredient-name').value  / this works too
    let ingredientName = event.target.name.value
    // console.log(ingredientName)
    let li = document.createElement("li")
    li.textContent = ingredientName
    displayIngredients.append(li)
})

updateForm.addEventListener('submit', event => {
    event.preventDefault()
    // console.log('submit')
    let updateObj = {
        title: spiceBlendTitleInput.value
    }
    updateSpice(updateObj)
    pumpkinTitle.textContent = updateObj.title
})

function renderIngredient(ingredientObj) {
    let li = document.createElement("li")
    li.textContent = ingredientObj.name
    displayIngredients.append(li)
}

function firstSpice () {
    pumpkinPic.src = globalPumpkin.image
    pumpkinTitle.textContent = globalPumpkin.title 
    globalPumpkin.ingredients.forEach(ingredient => {
        renderIngredient(ingredient)
    })
    spiceBlendTitleInput.value = globalPumpkin.title
}

//fetch functions
function updateSpice (updateObj) {
        fetch('http://localhost:3000/spiceblends/1', {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateObj),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
}

fetch ('http://localhost:3000/spiceblends/1')
.then(resp => resp.json())
.then(spice1data => {
    console.log(spice1data)
    globalPumpkin = spice1data;
    firstSpice()
})





// fetch ('http://localhost:3000/spiceblends/1/ingredients')
// .then(resp => resp.json())
// .then(pumpIngredients => {
//     console.log(pumpIngredients)
//     globalIngredients = pumpIngredients;
// })
// function addIngredients () {
//     let displayIngredients = document.querySelector('.ingredients-list')
//     let ingredientsList = document.createElement('li')
    
