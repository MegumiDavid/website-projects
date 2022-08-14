const boxes = document.querySelectorAll('.box')
const features = document.querySelectorAll('.wrapper')
const cta = document.querySelector('.cta')
const footer = document.querySelector('.footer')

const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        entry.target.classList.remove('appear')
        observer.unobserve(entry.target)
        console.log(entry.target)
    })},
    {
        root: null,
        threshold: .2,
    }
)


boxes.forEach( box => {
    observer.observe(box)
})
features.forEach( feature => {
    observer.observe(feature)
})

observer.observe(cta)
observer.observe(footer)


const formBtn = document.querySelector('.form__submit')
const formInput = document.querySelector('.form__input')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputEmail = document.querySelector('.form__input').value
    const inputValid = validateEmail(inputEmail)
    
    if (!inputEmail) {
        formInput.style.border = '1.5px solid red'
    }
    else if (!inputValid) {
        formInput.style.border = '1.5px solid red'
    } else {
        formInput.style.border = '2px solid green'
    }

})

function validateEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return regex.test(email)
}