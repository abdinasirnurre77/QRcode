let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");



function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://quickchart.io/qr?text=https%3A%2F%2Fexample.com%2Fpage%3Fparam1%3Dvalue1%26param2%3Dvalue2" + qrText.value;
        imgBox.classList.add("show-img");


    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000)
    }

}





























// let imgBox = document.getElementById("imgBox");
// let qrImage = document.getElementById("qrImage");
// let qrText = document.getElementById("qrText");

// function generateQR() {
//     if (qrText.value.trim().length > 0) {

//         qrImage.src =
//             "https://quickchart.io/qr?size=200&text=" +
//             encodeURIComponent(qrText.value);

//         imgBox.classList.add("show-img");
//         imgBox.classList.remove("error");

//     } else {
//         imgBox.classList.add("error");
//         setTimeout(() => {
//             imgBox.classList.remove("error");
//         }, 1000);
//     }
// }
