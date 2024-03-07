import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('tests with useFetchGifs hook', () => { 
    
    test ('should return the initial state', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));

        const { images, isLoading } = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toBe(true);


    });

    test('should return an array of images and isLoading in false', async () => {
        const { result  } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        // console.log(images, isLoading)

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });


 })