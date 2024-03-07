import { getGifs } from '../../src/helpers/getGifs'

describe('getGifs functions testing', () => { 

    test('should return a gif array', async () => { 
        const category = 'One Punch';
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
    
 })