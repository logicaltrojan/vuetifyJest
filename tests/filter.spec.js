import filter from '@/components/filter.js'


describe('Filter', ()=> {

    test("generates filtered object", ()=> {

        let testObjArray = [
            {
                "A" : "1",
                "AA" : "2",
                "AAAA" : "4"
            },
            {
                "A" : "5",
                "AA" : "6",
                "BAAA" : "8"
            }
        ]

        let expectedObject = { 
            "A" : {
                "1" :  0,
                "5" :  0
            },
            "AA" : {
                "2" : 0,
                "6" : 0
            },
            "AAAA" : {
                "4" : 0
            },
            "BAAA" : {
                "8" : 0
            }
         }

        let filterObject =  filter.makeFilter(testObjArray);

        expect(filterObject).toEqual(expectedObject);
        
    })
})
