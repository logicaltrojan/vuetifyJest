
import MyButton from '@/components/Mybutton.vue';
import { mount, shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
it("test Init" , () => {
    expect(1).toEqual(1);
})

const localVue= createLocalVue();
localVue.use(VueRouter);


describe("MyButton" , ()=> {
    it('renders good', ()=>{

        const wrapper = mount(MyButton);
        
        expect(wrapper.isVueInstance()).toBe(true);
    }),

    it('has redirect link to another page', ()=> {
        const wrapper = mount(MyButton, {
            stubs : {
                NuxtLink : RouterLinkStub
            }
        });
        console.log(wrapper.html());
        console.log(wrapper.find(RouterLinkStub).html());

        expect(wrapper.find(RouterLinkStub).exists()).toBe(true);

        expect(wrapper.find(RouterLinkStub).props().to).toEqual("/another");
         
    })

    it('emits click event to parent when clicked', ()=>{
        const myClick = jest.fn();
        const wrapper = mount(MyButton, {
            methods : {
                myClick
            }
        });

        wrapper.trigger('click');
        
        expect(myClick).toHaveBeenCalledTimes(1);
    })

})
