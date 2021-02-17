import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus"

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.innerText).toBe('Hello world!')
    })

    test('after creation span should`t be null', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test('after creation <input> should`t be displayed', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root

        expect(() => {let input = root.findByType('input')}).toThrow()
    })

    test('after creation span should contains correct status', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('Hello world!')
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('Hello world!')
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='Hello world!' updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMod()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})