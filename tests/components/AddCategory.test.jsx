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

    test('should call onNewCategory if the input has a value', () => {
            
            const input = 'Anya';
    
            const onNewCategory = jest.fn();
    
            render(<AddCategory onNewCategory={onNewCategory} />);
    
            const inputElement = screen.getByRole('textbox');
            const form = screen.getByRole('form');
    
            fireEvent.input(inputElement, { target: { value: input } });
            fireEvent.submit(form);

            expect (inputElement.value).toBe('');
    
            expect(onNewCategory).toHaveBeenCalled();
            expect(onNewCategory).toHaveBeenCalledTimes(1);
            expect(onNewCategory).toHaveBeenCalledWith(input);
        });

        test ('should not call onNewCategory if the input is empty or is submitted with <= 1 characters', () => {

            const onNewCategory = jest.fn();
            const input = 'A';
    
            render(<AddCategory onNewCategory={onNewCategory} />);

            const inputElement = screen.getByRole('textbox');
    
            const form = screen.getByRole('form');

            fireEvent.input(inputElement, { target: { value: input } });
            fireEvent.submit(form);
    
            expect(onNewCategory).not.toHaveBeenCalled();
            
        });

})