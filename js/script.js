const searchButton = document.querySelector('.user-actions__search')
const searchBlock = document.querySelector('.search-block')
const searchContent = document.querySelector('.search-block__content')
const body = document.body

searchButton.addEventListener("click", () => {
    searchBlock.classList.add('search-block--active')
    body.classList.add('scroll--none')
})

searchBlock.addEventListener("click", () => {
    searchBlock.classList.remove('search-block--active')
    body.classList.remove('scroll--none')

    if (e.target === searchBlock) {
        searchBlock.classList.remove('search-block--active')
        body.classList.remove('scroll--none')
    }
})

searchContent.addEventListener("click", (e) => {
    e.stopPropagation()
})


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".product-card__info-button")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-target")

            document.querySelectorAll(".content").forEach(div => {
                div.classList.remove("active")
            })
            document.getElementById(id).classList.add("active")

            buttons.forEach(btn => btn.classList.remove("product-card__info-button-active"))
            button.classList.add("product-card__info-button-active")
        })
    })
})


document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.querySelector('.my-account__form-image')
    const passwordInput = document.querySelector('#password')
    const toggleIconOff = document.getElementById("togglePassword")

    if (toggleIcon && passwordInput) {
        toggleIcon.addEventListener('click', function () {
            const isPassword = passwordInput.type === 'password'
            passwordInput.type = isPassword ? 'text' : 'password'
            toggleIcon.src = isPassword ? "../images/icons/hide-off.svg" : "images/icons/hide.svg"
        })
    }
});

