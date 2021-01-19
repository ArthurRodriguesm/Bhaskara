start = function(){
    
    let numA = document.querySelector("#a")
    let numB = document.querySelector("#b")
    let numC = document.querySelector("#c")

    let res = document.querySelector("#result")
    let formula = document.querySelector("#formula")
    
    res.innerHTML = ''
    
    formula.innerHTML = ''
    
    if(numA.value == 0 || numB.value == 0 || numC.value == 0){
        
        res.innerHTML = "Preencha todas as informações!"

    }else{
       
        let a = Number(numA.value)
        let b = Number(numB.value)
        let c = Number(numC.value)
        
        let squadOfB = b**2
        let tot = -4 * a * c
        let delta = squadOfB - 4 * a * c
        let sqrtDelta = Math.sqrt(delta)

        if(delta < 0){
            
            res.innerHTML = "Delta negativo!<br>"
            res.innerHTML += `▲ = ${delta}`

        }else{

            let x1 = (-b + sqrtDelta) / 2*a
            let x2 = (-b - sqrtDelta) / 2*a

            res.innerHTML += `<br>▲ = ${delta}<br>`
            res.innerHTML += `x' = ${x1.toFixed(2)}<br>`
            res.innerHTML += `x'' = ${x2.toFixed(2)}`   

            formula.innerHTML = '<h2>Fórmula</h2>'

        if(b < 0 || c < 0){
            
            formula.innerHTML += `▲ = (${b})² - 4 x ${a} x (${c})<br>`
            formula.innerHTML += `▲ = ${squadOfB} + ${tot} <br>`
            formula.innerHTML += `▲ = ${delta}<br>`
            formula.innerHTML += `<p></p>`

        }else{

            formula.innerHTML += `▲ = ${b}² - 4 x ${a} x ${c}<br>`
            
        }
            if(b < 0){

                formula.innerHTML += `x = -(${b}) ± √${delta}<br>`
                formula.innerHTML += '<hr>'
                formula.innerHTML += `2 x ${a}<br>`
                formula.innerHTML += `<p></p>`
                formula.innerHTML += `x' = -(${b}) + ${sqrtDelta.toFixed(2)}`
                formula.innerHTML += '<hr>'
                formula.innerHTML += `2 x ${a}<br>`
                formula.innerHTML += "<hr>"
                formula.innerHTML += `x'' = -(${b}) - ${sqrtDelta.toFixed(2)}`
                formula.innerHTML += '<hr>'
                formula.innerHTML += `2 x ${a}<br>`

            }else{

                formula.innerHTML += `x = -${b} ± √${delta}<br>`
                formula.innerHTML += '<hr>'
                formula.innerHTML += `2 x ${a}<br>`
                formula.innerHTML += `<p></p>`
                formula.innerHTML += `x' = -${b} + ${sqrtDelta.toFixed(2)}`
                formula.innerHTML += '<hr>'
                formula.innerHTML += `2 x ${a}<br>`
                formula.innerHTML += `<p></p>`
                formula.innerHTML += `x'' = -${b} - ${sqrtDelta.toFixed(2)}`
                formula.innerHTML += '<hr>'
                formula.innerHTML += `2 x ${a}<br>`

            }   
            
        }

    }
    
}