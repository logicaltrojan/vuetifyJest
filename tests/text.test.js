
import { mount } from '@vue/test-utils'
import myText from '@/components/Mytext.vue'


describe('myText', ()=> {
    test('is a vue component', ()=>{
        const wrapper = mount(myText);
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    test('contains text field ', ()=> {
        const wp = mount(myText);
        expect(wp.html()).toContain('<input')
    })

    test('contains button', ()=> {
        const wp = mount(myText);
        expect(wp.html()).toContain('<button')
    })

    test('renders prop correctly', ()=>{
        const wp = mount(myText);
        const testData = "hello2325"
        wp.setProps({textData : testData});
        

        expect(wp.vm.childData).toBe(testData);

        
     
    })

})