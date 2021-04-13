import { multiply } from '../../math/index.js'; // math-utils
import { definePrime } from '../../math/index.js'; // math-utils

// Символ x ДЛЯ ВРЕМЕННОГО ОТКЛЮЧЕНИЯ ТЕСТОВ. Просто написать вначале!

describe("test multiply", () => {
    it('multiply 1 * 0 to equal 0', () => {
        const result = multiply(1, 0)        
        expect(result).toBe(0);
    }),
    it('multiply 1 * 1 to equal 1', () => {
        const result = multiply(1, 1)        
        expect(result).toBe(1);
    });
});

describe("test definePrime", () => {
    it('determines whether a number is prime or not', () => {
        const primeNum = 7;
        expect(definePrime(primeNum)).toBe(`Число ${primeNum} - простое число`);
        const compositeNum = 8
        expect(definePrime(compositeNum)).toBe(`Число ${compositeNum} - составное число`);        
    }),
    it('check parameters of function definePrime', () => {
        const veryBigNum = 1001;
        expect(definePrime(veryBigNum)).toBe(`Данные неверны`);
        const verySmallNum = 0;
        expect(definePrime(verySmallNum)).toBe(`Данные неверны`);
        const not_a_Num = '0';
        expect(definePrime(not_a_Num)).toBe(`Используйте только числовые значения!`);
    });
})