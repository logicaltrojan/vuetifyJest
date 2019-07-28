
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
        const testData = "hello2132312"
        const wp = mount(myText, { 
            propsData : {
                textData : testData
            }
        });
        
        expect(wp.vm.childData).toBe(testData);
        expect(wp.html()).toMatchSnapshot();
    })

    test('input makes diffrent', () => {
        var parent = mount({
            template : '<div><my-text :textData="parentData" @confirm="meme"></my-text></div>',
            data(){ 
                return {
                 parentData : "testData23"
                }
            },
            methods : {
                meme(val){
                    this.parentData = val;
                }
            },
            components : { 'my-text' : myText}
        })

        expect(parent.find('input')).toBeTruthy();
        var innerInputComponent = parent.find('input')
        const changTestData = 'changedInput'
        innerInputComponent.element.value = changTestData;
        innerInputComponent.trigger('input');

        parent.find('button').trigger('click');
        expect(parent.vm.parentData).toBe(changTestData);

        
    })

})