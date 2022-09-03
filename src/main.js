export default class  App {

    elevarCubo (numero){

        let resultado = numero**3;
        
        return resultado;
    }

    convertirFahrenheit (numero){

        let resultado = (numero) * (1.8) + (32)

        return resultado;
    }

    calcularPrecioTerreno(numeroAncho, numeroAlto, numeroCostoMetro){

        let resultado = (numeroAncho) * (numeroAlto) * (numeroCostoMetro);

        return resultado;
    }

}

let app = new App();

console.log(app.elevarCubo(3));

console.log(app.convertirFahrenheit(18));

let r = (app.calcularPrecioTerreno(10, 20, 5000));
console.log(r);