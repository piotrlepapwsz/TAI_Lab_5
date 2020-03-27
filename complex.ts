class Complex {
    private readonly real: number;
    private readonly imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }

    subtract(other: Complex): Complex {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }

    calculateModule(): number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }

    toString(): string {
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