const enhancer = require('./enhancer.js');
// test away!
describe("enhancement unit tests", () => {

    beforeEach(() => {

        enhancer.items  [
                            {name: "Weapon1", durability: 0, enhancement: 12 },
                            {name: "Weapon2", durability: 10, enhancement: 15 },
                            {name: "Weapon3", durability: 50, enhancement: 20 },
                            {name: "Weapon4", durability: 90, enhancement: 17 },
                            {name: "Weapon5", durability: 100, enhancement: "test"}
        ]
    })

    it("repaire", () => {

        expect(enhancer.repair(enhancer.items[0])).toEqual({...enhancer.items[0], durability: 100})

        expect(enhancer.repair(enhancer.items[1])).toEqual({...enhancer.items[1], durability: 100})

        expect(enhancer.repair(enhancer.items[2])).toEqual({...enhancer.items[2], durability: 100})

        expect(enhancer.repair(enhancer.items[3])).toEqual({...enhancer.items[3], durability: 100})

        expect(enhancer.repair(enhancer.items[4])).toEqual({...enhancer.items[4], durability: 100})

       
    
    })


    it("succeed", () => {

        expect(enhancer.succeed(enhancer.items[0])).toEqual({...enhancer.items[0], enhancement: 13})

        expect(enhancer.succeed(enhancer.items[1])).toEqual({...enhancer.items[1], enhancement: 16})

        expect(enhancer.succeed(enhancer.items[2])).toEqual({...enhancer.items[2], enhancement: 20})

        expect(enhancer.succeed(enhancer.items[3])).toEqual({...enhancer.items[3], enhancement: 18})

        expect(() => enhancer.succeed((enhancer.items[4])).toThrow())
        
    })

    it("fail", () => {

         expect(enhancer.fail(enhancer.items[0])).toEqual({...enhancer.items[0], durability: 0})

         expect(enhancer.fail(enhancer.items[1])).toEqual({...enhancer.items[1], durability: 0})

         expect(enhancer.fail(enhancer.items[2])).toEqual({...enhancer.items[2], durability: 40, enhancement: 19})

         expect(enhancer.fail(enhancer.items[3])).toEqual({...enhancer.items[3], durability: 80, enhancement: 16})

         expect(()=> enhancer.fail(enhancer.items[4])).toThrow()
         
    })


    it("get", () => {

        expect(enhancer.get(enhancer.items[0])).toEqual({...enhancer.items[0], name: "[+12]Weapon1"})

        expect(enhancer.get(enhancer.items[1])).toEqual({...enhancer.items[1], name: "[+15]Weapon2"})

    })

})
