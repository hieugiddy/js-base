function highlight([first,...strings],...values){
    return values.reduce((html,currValue) =>[
        ...html,`<span>${currValue}</span>`,strings.shift()
    ],[first]).join('');
}

let a="F8";
let b="Javascript"

let html = highlight`Hoc lap trinh ${b} tai ${a}!`;
console.log(html);