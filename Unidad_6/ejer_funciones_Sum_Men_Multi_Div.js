
    let a = 1
    let b = 2

    function resta(a,b){
        return (a - b)
        }

    function mul(a,b){
        return (a * b)
        }

    function su(a,b){
        return (a + b)
        }

    function div(a,b){
        if (a == 0 && b == 0){
            return console.log("faltal error")
        }
        return (a/b)
    }
    let divi = div(a,b)
    console.log(divi)

    let restas = resta(a,b)
    console.log(restas)

    let resmult  = mul(a,b)
    console.log(resmult)

    let sumas = su(a,b)
    console.log(sumas)