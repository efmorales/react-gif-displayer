import { GifItem } from "../../src/components/GifItem";
import { screen, render, fireEvent } from "@testing-library/react";


describe('tests for GifItem component', () => { 
    
    const title = "A title";
    const url = "https://localhost/image.jpg";

    test('should match with the snapshot', () => { 

        const {container} = render(<GifItem url={url} title={title} />);

        expect(container).toMatchSnapshot();

     });

     test('should show image with url and alt selected', () => { 
    
            render(<GifItem url={url} title={title} />);

            // screen.debug();
    
            const {src, alt} = screen.getByRole('img');

            expect(src).toBe(url);
            expect(alt).toBe(title);

      })

      test('should show the title in the component', () => { 
        
        render(<GifItem 
            url={url} 
            title={title}
             />);
        expect (screen.getByText(title)).toBeTruthy();
       })
 })