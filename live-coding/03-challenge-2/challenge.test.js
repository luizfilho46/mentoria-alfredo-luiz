describe('challenge 2 setup test', () => {
    it('challenge 2 unit test', () => {
        const data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    })
})