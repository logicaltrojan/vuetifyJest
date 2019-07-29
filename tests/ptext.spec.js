
import { mount } from '@vue/test-utils'
import PText from '@/components/text.vue'

import axios from 'axios'

jest.mock(axios, () => ({
    get() {
        return Promise.resolve('AxiosResult')
    }
}));


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
                    await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
                        this.parentData = 'axiosDatafromServer'
                    )
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

    test('sets default value properly in async', ()=>{

    })
})
