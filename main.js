// Thay đổi nội dung búc thư ở đây
var letterContent =" Chúc mừng sinh nhật em bé iu của cún. Giờ hơn tui 1 tuổi rùi, lại phải lớn lên rùiiii ❤. Anh chúc em tuổi mới có nhiều trải nghiệm thật mới cùng anhhhh, tuổi 20 rực rỡ nha bây biiiii 💌"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardSinhNhat").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardSinhNhat = document.querySelector(".cardSinhNhat")

cardSinhNhat.addEventListener("click", () => {
    cardSinhNhat.classList.toggle("open")

    if(cardSinhNhat.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})