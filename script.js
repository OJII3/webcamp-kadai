window.onload = () => {
    let username = prompt('Your name?') || '名無し';
    document.getElementById('name').innerHTML = username;
    
    let rand = ~~(Math.random()*5);
    const array = ['凶', '吉', '小吉', '中吉', '大吉'];
    document.getElementById('result').innerHTML = array[rand];
};