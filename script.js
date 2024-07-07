const textarea = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const output = document.querySelector(".output");

btn.addEventListener("click",()=>{
    if(textarea.value === ""){
        output.innerHTML = "Please enter some text";
    }else{
        const val = textarea.value;
        let count = 0;
        for(let i=0;i<val.length;i++){
            if(val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u"  ||  val[i] === "A" || val[i] === "E" || val[i] === "I" || val[i] === "O" || val[i] === "U"){
                count++;
            }
        }
        output.innerHTML = `The number of vowels are ${count}`;
    }    
});