
let userName = prompt ("Kullanıcı adınızı giriniz:")
let myName = document.querySelector ("#myName")

if (userName.length > 0 ) {
        myName.innerHTML =(`${userName}`)
}