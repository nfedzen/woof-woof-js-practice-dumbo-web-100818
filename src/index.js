document.addEventListener('DOMContentLoaded', () => {
  getDogs()
})

const getDogs = () => {
  fetch('http://localhost:3000/pups')
  .then(response => response.json())
  .then(dogs => dogs.forEach(dog => {
    renderDog(dog)
  }))
}

const renderDog = (dog) => {
  const dogBar = document.querySelector('#dog-bar')

  const dogSpan = document.createElement('span')
  dogSpan.innerText = dog.name

  dogSpan.addEventListener("click", () => {
    showDogDetails(dog)
  })

  dogBar.append(dogSpan)
}

const showDogDetails = (dog) =>{
  const dogInfo = document.querySelector('#dog-info')

  const dogImg = document.createElement('img')
  dogImg.src = dog.image

  const dogName = document.createElement('h2')
  dogName.innerText = dog.name

  const dogBtn = document.createElement('button')
  if(dog.isGoodDog) {
    dogBtn.innerText = "Good Dog!"
  }else {
    dogBtn.innerText = "Bad Dog!"
  }

  dogBtn.addEventListener('click', () => {
    changeDogStatus(dogBtn, dog)
  })

  dogInfo.append(dogImg, dogName, dogBtn)

}

const changeDogStatus = (dogBtn, dog) => {
  let newStatus = dog.isGoodDog
  if(dogBtn.innerText === 'Good Dog!'){
    dogBtn.innerText = 'Bad Dog!'
    newStatus = false
  } else {
    dogBtn.innerText = "Good Dog!"
    newStatus = true
  }

  fetch(`http://localhost:3000/pups${dog.id}`,{
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: json.stringify({
      isGoodDog: newStatus
    })
  })
  .then(res => res.json())
  .then(updatedDog => console.log(updatedDog))
}