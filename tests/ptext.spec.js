
import { mount } from '@vue/test-utils'
import PText from '@/components/text.vue'
import axios from 'axios'

// jest.mock('@nuxtjs/axios', () => ({
 
//     get : jest.fn(()=> Promise.resolve({data : "axiosData"}))
// }));


describe('PText', ()=> {
    let wm,editWm,parent

    beforeEach(() =>{

        wm = mount(PText);
        editWm = mount(PText , {
        propsData : {
            editMode : true
        }
        })
        parent = mount({ 
            template : '<div><p-text v-model="parentData"></p-text></div>',
            components : { 'p-text' : PText},
            data(){ 
                return {
                    parentData : "defaultParentData"
                }
            },
            methods : {
                async setData(){
                    const getPromise = axios.get('https://jsonplaceholder.typicode.com/todos/1')
                    await getPromise.then(result => { 
                        this.parentData = result.data;
                    })

                    return getPromise;
                    
                }
            }
        })

        
    });

    test('#test Setup' , ()=> {

        expect(true).toBe(true)
    })

    test('is a vue component', ()=>{


        
        
        expect(wm.isVueInstance()).toBeTruthy();
    })

    test('renders input properly in any cases', ()=> {


        expect(wm.html()).toContain('<input');
    })

    test('has no button in edit mode', ()=> {

        expect(editWm.contains('button')).toBe(false)
    })

    test('has no button in default', ()=> {


        expect(wm.contains('button')).toBe(false)
    })

    test('has button in editview mode', ()=> {
        const wm = mount(PText, {
            propsData : {
                editMode : false
            }
        });

        expect(wm.contains('button')).toBe(true)
    })

    test('input rendered in parent properly', ()=>{

        expect(parent.html()).toContain('<input')
    })

    test('changes input value immediately in edit mode', ()=> {
    
        
        const userInputVal = 'myNameIs';
        var innerInput = parent.find('input');
        
        innerInput.element.value = userInputVal;
        innerInput.trigger('input');

        expect(parent.vm.parentData).toBe(userInputVal);

        
    })

    test('sets default value properly in async', async ()=>{

        axios.get.mockImplementationOnce(()=> Promise.resolve({
            data : "axiosData"
        }))
        
        const result = await parent.vm.setData();


        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/1");
        expect(result).toEqual({data : 'axiosData'});
        expect(parent.vm.parentData).toBe('axiosData');
        expect(parent.find('input').element.value).toBe('axiosData')

    })
})
