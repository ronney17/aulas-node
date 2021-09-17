function demorada(params) {
    const atualMais = new Date().getTime() + 5000;
    while (new Date().getTime() <= atualMais);
    const d = 8+4;
    return d
}

const a = 2+7;
const b = 5;

setTimeout(function(){
    const d = demorada();
    console.log(d);
}, 500)

const e = a+b;
console.log(e);