const enhancer = require('./enhancer.js');
// test away!
describe("game unit tests", () => {

    it("repaire", () => {

        expect(enhancer.repair({name: "Tanveer", durability: 0, enhancement: 12 })).toEqual({name: "Tanveer", durability: 100, enhancement: 12 })

        expect(enhancer.repair({name: "Naveed", durability: 10, enhancement: 15 })).toEqual({name: "Naveed", durability: 100, enhancement: 15 })

        expect(enhancer.repair({name: "Waqas", durability: 50, enhancement: 20 })).toEqual({name: "Waqas", durability: 100, enhancement: 20 })

        expect(enhancer.repair({name: "Aleem", durability: 90, enhancement: 17 })).toEqual({name: "Aleem", durability: 100, enhancement: 17 })

        expect(enhancer.repair({name: "Kashif", durability: 100, enhancement: 9 })).toEqual({name: "Kashif", durability: 100, enhancement: 9 })
    
    })


    it("succeed", () => {

        expect(enhancer.succeed({name: "Amjad", durability: 7, enhancement: 10 })).toEqual({name: "Amjad", durability: 7, enhancement: 11 })

        expect(enhancer.succeed({name: "Basit", durability: 63, enhancement: 15 })).toEqual({name: "Basit", durability: 63, enhancement: 16 })

        expect(enhancer.succeed({name: "Sohail", durability: 55, enhancement: -1 })).toEqual({name: "Sohail", durability: 55, enhancement: 0 })

        expect(enhancer.succeed({name: "Atif", durability: 80, enhancement: 21 })).toEqual({name: "Atif", durability: 80, enhancement: 20 })

        expect(enhancer.succeed({name: "Qaiser", durability: 45, enhancement: 20 })).toEqual({name: "Qaiser", durability: 45, enhancement: 20 })
    
    
        
    })

    it("fail", () => {

        expect(enhancer.fail({name: "Afzal", durability: 7, enhancement: 10 })).toEqual({name: "Afzal", durability: 2, enhancement: 10})

        expect(enhancer.fail({name: "Jamshaid", durability: 3, enhancement: 3 })).toEqual({name: "Jamshaid", durability: 0, enhancement: 3})

        expect(enhancer.fail({name: "Saqib", durability: 50, enhancement: 15 })).toEqual({name: "Saqib", durability: 40, enhancement: 15})

        expect(enhancer.fail({name: "Naeem", durability: 7, enhancement: 15 })).toEqual({name: "Naeem", durability: 0, enhancement: 15})

        expect(enhancer.fail({name: "Bilal", durability: 45, enhancement: 20 })).toEqual({name: "Bilal", durability: 35, enhancement: 19})

    })


    it("get", () => {

        expect(enhancer.get({name: "Jamil", durability: 7, enhancement: 0 })).toEqual({name: "Jamil", durability: 7, enhancement: 0})

        expect(enhancer.get({name: "Hassan", durability: 12, enhancement: 19 })).toEqual({name: "[+19]Hassan", durability: 12, enhancement: 19})

    })

})
