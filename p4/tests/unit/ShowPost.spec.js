import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowPost from '@/components/ShowPost.vue'

describe('ShowPost.vue', () => {
    it('shows a post', () => {

        let post = {
            "id": 1,
            "post_title": "My first post",
            "post_content": "This is my very first post!",
            "post_date": "10/12/2019",
            "post_author": "Andrea"
        }

        const wrapper = shallowMount(ShowPost, {
            propsData: { post },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.text()).to.include(post.post_title)

        let foundPostLink = wrapper.find('[data-test="post-link"]').exists();
        expect(foundPostLink).to.equal(true);
    })
})
