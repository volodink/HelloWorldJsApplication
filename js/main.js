console.log("Hello, world!");

B = document.getElementById("application")

let input_a = document.createElement("input");
input_a.setAttribute("id", "input_a");
B.append(input_a);

let input_b = document.createElement("input");
input_b.setAttribute("id", "input_b");
B.append(input_b);

let result_button = document.createElement("button");
result_button.innerText = "Get result";
result_button.onclick = () => {
    // alert("Click!!!");
    let in_a = document.getElementById("input_a").value;
    let in_b = document.getElementById("input_b").value;
    console.log(parseFloat(in_a) + parseFloat(in_b));
    let res = document.getElementById("result")
    res.innerText = parseFloat(in_a) + parseFloat(in_b);
}
B.append(result_button);

let result_ti = document.createElement("h3");
result_ti.setAttribute("id", "result")
result_ti.innerText = "Нет значения";
B.append(result_ti);