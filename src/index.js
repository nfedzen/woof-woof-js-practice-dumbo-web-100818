const dogBar = document.querySelector('#dog-bar')

fetch('http://localhost:3000/pups')
  .then(response => response.json())
  .then(dogs => dogs.forEach(dog => {
    renderDog(dog)
  }))

  const renderDog = (dog) =>{
    const dogSpan = document.createElement('span')

    dogSpan.addEventListener('click', () =>{
      showDogDetails(dog)
    })

    dogSpan.innerText = dog.name

    dogBar.append(dogSpan)
  }

  const showDogDetails = (dog) =>{
    const dogInfo = document.querySelector('#dog-info')

    const dogImg = document.createElement('img')
    const dogName = document.createElement('h2')
    const dogButton = document.createElement('button')

    dogImg.src = dog.image
    dogName.innerText = dog.name 
    
    if(dog.isGoodBoy){
      dogButton.innerText = "Good Boy!"
    } else {
      dogButton.innerText = "Bad Boy!"
    }

    dogInfo.append(dogName, dogImg, dogButton)
  }