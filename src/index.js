

document.addEventListener('DOMContentLoaded', () => {
    let t = [];
    let tValogatott = [];
    for(let i = 0; i< 20; i++){
        t.push(Math.round(Math.random()*30+1));
    }
    tValogatott = t.filter(e => (e%5)==0);
    console.log(tValogatott);
    document.getElementById('oszthatoGomb').addEventListener('click', () =>{
        
        tValogatott = t.filter(e => (e%5)==0);
        console.log(tValogatott);
    });
});

