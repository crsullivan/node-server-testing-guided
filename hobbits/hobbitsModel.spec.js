const db = require('../data/dbConfig.js');

const { insert } = require('./hobbitsModel.js')
    
    describe('insert()', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('should insert a hobbit', async function() {
            // add a hobbit
            await insert({name: 'Sam'});
            // check if it was inserted into DB
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(1);
         
        })
        it('should insert the provided hobbit', async function() {
            // add a hobbit
            await insert({name: 'Sam'});
            await insert({name: 'Frodo'});

            // check if it was inserted into DB
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
            expect(hobbits[0].name).toBe('Sam')
            expect(hobbits[1].name).toBe('Frodo')

        })
        it('should return provided hobbit', async function() {
            let hobbit = await insert({ name: 'Sam'});
            expect(hobbit.name).toBe('Sam');
            expect(hobbit.id).toBeDefined();

            hobbit = await insert({ name: "gaffer" })
            expect(hobbit.name).toBe('gaffer');
            expect(hobbit.id).toBeDefined();

        })
    })


