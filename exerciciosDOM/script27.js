
// function addContact(){
//     let contactSection = document.getElementById('contacts-list')

//     const h3 = document.createElement('h3')
//     h3.innerText = "Contato"

//     const ul = document.createElement('ul')
    
//     const nameLi = document.createElement('li')
//     nameLi.innerText = "Nome: "
//     const nameInput = document.createElement('input')
//     nameInput.type = 'text'
//     nameInput.name = 'fullname'
//     nameLi.appendChild(nameInput)
//     ul.appendChild(nameLi)
//     ul.appendChild(document.createElement('br'))

//     const phoneLi = document.createElement('li')
//     phoneLi.innerText = "Telefone: "
//     const phoneInput = document.createElement('input')
//     nameInput.type = 'text'
//     nameInput.name = 'fullphone'
//     phoneLi.appendChild(phoneInput)
//     ul.appendChild(phoneLi)
//     ul.appendChild(document.createElement('br'))

//     const emailLi = document.createElement('li')
//     emailLi.innerText = 'Email: '
//     const emailInput = document.createElement('input')
//     emailInput.type = 'text'
//     emailInput.name = 'fullemail'
//     emailLi.appendChild(emailInput)
//     ul.appendChild(emailLi)
//     ul.appendChild(document.createElement('br'))

//     contactSection.append(h3, ul)
// }

// function removeContact() {
//     const contactSection = document.getElementById('contacts-list')

//     const titles = document.getElementsByTagName('h3')
//     const contacts = document.getElementsByTagName('ul')

//     contactSection.removeChild(titles[titles.length - 1])
//     contactSection.removeChild(contacts[contacts.length - 1])
// }



function addContact(){
    const sectionContacts = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contatos"

    const ul = document.createElement('ul')
    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    ul.appendChild(nameLi)
    nameLi.appendChild(nameInput)
    ul.appendChild(document.createElement('br'))

    const emailLi = document.createElement('li')
    emailLi.innerText = "Email: "
    const emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.name = 'fullemail'
    ul.appendChild(emailLi)
    emailLi.appendChild(emailInput)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'fullphone'
    ul.appendChild(phoneLi)
    phoneLi.appendChild(phoneInput)
    ul.appendChild(document.createElement('br'))

    sectionContacts.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}






















