let count = 1

class Animal{

    constructor(animalName, species, diet, habitat){
        this.info = {
            id: count,
            animalName,
            species,
            diet,
            habitat,
        }
    }

    getDescription(animalName, species, diet, habitat){
        return`The ${animalName} is a type of ${species}. It has a ${diet} diet and lives in a ${habitat} habitat.`
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('clicked')
    let obj = {}
    obj= {...getInfo()}
    const animal = new Animal(obj.animalName, obj.species, obj.diet, obj.habitats)
    buildCard(animal.info, animal.getDescription)
    count++
})

const getInfo =()=>{
    const animalName = document.getElementById('animalName').value
    const species = document.getElementById('species').value
    const diet = document.querySelector('input[name="diet"]:checked').value

    const habitat = document.querySelectorAll('input[name="habitat"]')
    let habitats = []

    habitat.forEach(h => {
        h.checked ? habitats = [...habitats, h.value] : null
    })


    return{animalName, species, diet, habitats}
}

const buildCard=(obj, func)=>{
    const row = document.getElementById('cardRow')

    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    const cardBody = document.createElement('section')
    cardBody.classList.add('card-body')

    const animalName = document.createElement('h2')
    animalName.classList.add('card-title', 'text-capitalize')
    animalName.innerText = obj.animalName

    const species = document.createElement('p')
    species.classList.add('card-text', 'text-capitalize')
    species.innerText = `Species: ${obj.species}`

    const diet = document.createElement('p')
    diet.classList.add('card-text')
    diet.innerText = `Diet: ${obj.diet}`

    const description = document.createElement('p')
    description.classList.add('card-text', 'fst-italic')
    description.innerText = func(obj.animalName, obj.species, obj.diet, obj.habitat)
    // description.innerHTML = `<span>${func(obj.animalName, obj.species, obj.diet, obj.habitat)}`

    cardBody.appendChild(animalName)
    cardBody.appendChild(species)
    cardBody.appendChild(diet)
    cardBody.appendChild(description)

    card.appendChild(cardBody)
    column.appendChild(card)
    row.appendChild(column)
}