"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(other) {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }
    subtract(other) {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }
    calculateModule() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        return `Complex: real=${this.real}, imaginary=${this.imaginary}`;
    }
}
const complex1 = new Complex(1, 2);
const complex2 = new Complex(3, 4);
const additionResult = complex1.add(complex2);
console.log(`Wynik dodawania: ${additionResult}`);
const subtractionResult = additionResult.subtract(complex1);
console.log(`Wynik odejmowania: ${subtractionResult}`);
const module = subtractionResult.calculateModule();
console.log(`Moduł: ${module}`);
