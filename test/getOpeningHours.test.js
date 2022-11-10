const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Não passando argumentos deverá retornar um objeto com as informações de todos os dias da semana.', () => {
        const expected = {
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 },
        };
        expect(getOpeningHours()).toEqual(expected);
    });
    it('Para os argumentos Monday e 09:00-AM, deve retornar uma mensagem informando que está fechado.', () => {
        const expected = 'The zoo is closed';
        expect(getOpeningHours('Monday', '09:00-AM')).toMatch(expected);
    });
    it('Para os argumentos Tuesday e 09:00-AM, deve retornar uma mensagem informando que está aberto.', () => {
        const expected = 'The zoo is open';
        expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch(expected);
    });
    it('Lança um erro caso a string passada não represente um número.', () => {
        expect(() => getOpeningHours('Monday', 'ad:00-AM')).toThrow(new Error('The hour should represent a number'));
    });
    it('Lança um erro caso a abreviação passada não seja AM ou PM.', () => {
        expect(() => getOpeningHours('Monday', '09:00-BM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
    });
    it('Lança um erro caso a hora não esteja entre 0 e 12.', () => {
        expect(() => getOpeningHours('Tuesday', '19:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
    });
    it('Lança um erro caso os minutos passados não estejam entre 0 e 59.', () => {
        expect(() => getOpeningHours('Wednesday', '09:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
    });
    it('Lança um erro caso o dia passado não seja um dia da semana em inglês.', () => {
        expect(() => getOpeningHours('Quarta-feira', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
    });
});
