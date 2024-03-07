import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid component testing', () => {

    const category = 'One Punch';

    test('should show the loading message', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...')).toBeTruthy();

    });

    test('should show the items when images are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Any title',
                url: 'https://localhost/any.jpg'
            },
            {
                id: 'DEF',
                title: 'Any title',
                url: 'https://localhost/any2.jpg'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);


    });

})