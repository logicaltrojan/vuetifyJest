import { mount } from '@vue/test-utils'
import Counter from '../components/Counter.vue'

describe('Counter.vue', () => {
    test('Setup correctly', () => {
        expect(true).toBe(true)
    })
    test('default value 0 is contained', () => {
        const wrapper = mount(Counter)
        expect(wrapper.text()).toContain('Counter: 0')
        
        
    })
    test('contains button', () => {
        const wrapper = mount(Counter)
        expect(wrapper.contains('button')).toBeTruthy();
    })

    test('increase value when button is clicked', () => {
        const wrapper = mount(Counter);
        const button = wrapper.find('button')
        expect(wrapper.vm.counter).toBe(0);
        expect(wrapper.html()).toContain('<div>Counter: 0</div>');
        button.trigger('click');
        expect(wrapper.vm.counter).toBe(1);
        expect(wrapper.html()).toContain('<div>Counter: 1</div>');
    })
})