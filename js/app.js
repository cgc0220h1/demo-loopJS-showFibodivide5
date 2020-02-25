function fibonacci() {
    let n = 0;
    let n1 = 1;
    let fibo = 0;
    let display = '';
    let index = 0;
    let num = +document.getElementById('num-input').value;
    while (index < num) {
        n = n1;
        n1 = fibo;
        fibo = n + n1;
        if (fibo % 5 === 0) {
            display = fibo;
            break;
        }
        index++;
    }
    document.getElementById('displayNums').innerHTML = display;
}