
let qrText = document.querySelector('#qrText');
let imgBox = document.querySelector('#imgBox');
let qrImg = document.querySelector('#qrImg');
let btn = document.querySelector('button')

btn.addEventListener("click", createQR)

function createQR(){

    if(qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.placeholder = "Please enter something!!"

        qrText.classList.add("error");
        setInterval(()=> {
            qrText.classList.remove("error")
        }, 1000);
    }
}