import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../src/components/ProductCard';
import {  product2 } from './products';
import { ProductImage } from '../src/components/ProductImage';





describe('ProductImage', () => {
    
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductImage img={product2.img} />
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    }) ;

    test('debe de mostrar el componente correctamente', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2 }>

             {   () => (<ProductImage />)
}
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    }) ;




}

)