import { reverseStr } from '../../str/index.js'; // str-utils
import { concatAndUpperTwoStr } from '../../str/index.js'; // str-utils

describe("test reverseStr", () => {
    it('check function reverseStr', () => {
        const result1 = reverseStr('JavaScript');
        const result2 = reverseStr('J');        
        expect(result1).toBe('tpircSavaJ');
        expect(result2).toBe('J');        
    });
    it('check function reverseStr (empty string)', () => {
        const result = reverseStr('');
        expect(result).toBe('Передана пустая строка!');
    });    
});

describe("test concatAndUpperTwoStr", () => {
    it('check function concatAndUpperTwoStr', () => {
        const result1 = concatAndUpperTwoStr('one', 'two');
        const result2 = concatAndUpperTwoStr('o', 't');        
        expect(result1).toBe('One Two');
        expect(result2).toBe('O T');        
    });
    it('check function concatAndUpperTwoStr (empty string or non-complete arguments)', () => {
        const result1 = concatAndUpperTwoStr();
        const result2 = concatAndUpperTwoStr('s');
        const result3 = concatAndUpperTwoStr(undefined, 's');                
        expect(result1).toBe('Необходимо ввести ОБЕ строки!');
        expect(result2).toBe('Необходимо ввести ОБЕ строки!');
        expect(result3).toBe('Необходимо ввести ОБЕ строки!');                
    });    
})