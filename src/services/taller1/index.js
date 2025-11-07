
export function convertidorTemp(celsius) {
    return celsius * (9/5) + 32;
}

export function resolvedor(a,b,c, signo) {

    if(signo == true){
        return (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    }else{
            return (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    }
}


export function mejorParidad(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


export function peorParidad(num) {
    function caso1(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso2(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso3(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso4(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso5(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso6(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso7(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso8(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso9(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    function caso10(n) {
        function paridad() {
            if(n % 2 == 0) { return "Par"; }
            else { return "Impar"; }
        }
        return paridad();
    }
    switch(num) {
        case 1: return caso1(num);
        case 2: return caso2(num);
        case 3: return caso3(num);
        case 4: return caso4(num);
        case 5: return caso5(num);
        case 6: return caso6(num);
        case 7: return caso7(num);
        case 8: return caso8(num);
        case 9: return caso9(num);
        case 10: return caso10(num);
        default: return undefined;
    }
}
