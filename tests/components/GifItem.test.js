import { GifItem } from "../../src/components/GifItem";
import { screen, render, fireEvent } from "@testing-library/react";


describe('tests for GifItem component', () => { 
    
    test('should match with the snapshot', () => { 

        const {container} = render(<GifItem id="1" url="https://localhost/image.jpg" title="A title" />)
        
        expect(container).toMatchSnapshot()



     })
 })