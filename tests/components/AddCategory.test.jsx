import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('AddCategory component testing', () => {

    test('should change the input', () => {

        const input = 'Demon Slayer';

        render(<AddCategory onNewCategory={() => {}} />);

        const inputElement = screen.getByRole('textbox');

        // can use fireEvent.change or fireEvent.input interchangeably

        fireEvent.input(inputElement, { target: { value: input } });

        expect(inputElement.value).toBe(input);
        // console.log(screen.debug());
    })
})
