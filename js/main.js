console.log("Hello, world!");

_root_ = document.getElementById("application")
console.log(_root_);

for (let i = 0; i < 10; i++) {
    let doge_img = document.createElement("img")
    doge_img.setAttribute("src", "img/doge.jpg")
    console.log(doge_img);

    _root_.append(doge_img)
}
// console.log(i);

