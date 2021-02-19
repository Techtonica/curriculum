const invert = require('../jasmine-pair-activity.js');

describe('An object', () => {
    let sample = { 'a': 1, 'b': 2, 'c': 1 };

    it("{ 'a': 1, 'b': 2, 'c': 1 } should invert to { '1': 'c', '2': 'b' }", () => {
        expect(invert(sample)).toEqual({ '1': 'c', '2': 'b' });
    });

    it("{} should invert to {}", () => {
        let nothing = {};
        expect(invert(nothing)).toEqual({});
    });

    it("{'a': 1, 'b': 1, 'c': 1}", () => {
        let sample2 = { 'a': 1, 'b': 1, 'c': 1 };
        expect(invert(sample2)).toEqual({ 1: 'c' });
    });

});
