// var count
// document.write("Bat dau vong lap")
// document.write("</br>")
// for (count = 0; count < 10; count++) {
//     document.write("So hien tai = ", count)
//     document.write("</br>")
// }
// document.write("Stop loop")
// let count = []
// for (i = 0; i <= 10; i++) {
//     count.push(i)
// }
// document.write("In ra mang </br>")
// for (i in count) {
//     document.write(i + "</br>")
// }
// for (i = 0; i <= 10; i++) {
//     document.write(count[i] + "</br>")

// }
//*****************Bai toan ve tam giac can */
// var myHeight = prompt(" Nhap chieu cao tam giac ban muon ve")
// for (var i = 1; i < myHeight; i++) {
//     for (var n = myHeight + 1 - i; n >= 1; n--) {
//         document.write('+')
//     }
//     for (var e = 1; e <= 2 * i - 1; e++) {
//         document.write('*')
//     }
//     document.write('</br>')
// }
//*************Bai toan liet ke so nguyen to */
let n = prompt("Nhap gia tri n ")
let i
let j
let flag = 1
for (i = 2; i <= n; i++) {
    for (j = 2; j <= i - 1; j++) {
        if (i % j == 0) { flag = 0 }
    }
    if (flag = 1) {
        document.write("So" + i + "la so nguyen to" + "</br>")
    }

}