import { screen, render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('tests in <GifExpertApp />', () => {

    test('should render <GifExpertApp /> correctly', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    });

    test ('should have a form', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('form')).toBeTruthy();
    });

    test('should have an empty textbox', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('textbox').value).toBe('');

    });

});

