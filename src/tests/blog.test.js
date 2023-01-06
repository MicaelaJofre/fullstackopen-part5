import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from '../components/Blog'


describe('Blog', () => {
    test('renders content', () => {
        const blog = {
            title: 'Test title',
            author: 'Michael',
        }

        const component = render(
            <Blog blog={blog} />
        )

        expect(component.container).toHaveTextContent(
            'Test title'
        )
    })
})