var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (other) {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    };
    Complex.prototype.subtract = function (other) {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    };
    Complex.prototype.calculateModule = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        return "Complex: real=" + this.real + ", imaginary=" + this.imaginary;
    };
    return Complex;
}());
var complex1 = new Complex(1, 2);
var complex2 = new Complex(3, 4);
var additionResult = complex1.add(complex2);
console.log("Wynik dodawania: " + additionResult);
var subtractionResult = additionResult.subtract(complex1);
console.log("Wynik odejmowania: " + subtractionResult);
var module = subtractionResult.calculateModule();
console.log("Modu\u0142: " + module);
