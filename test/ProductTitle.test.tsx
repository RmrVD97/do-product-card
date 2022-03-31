import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../src/components/ProductCard';
import { ProductTitle } from '../src/components/ProductTitle';
import { product1 } from './products';




describe('ProductTitle', () => {
    
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    }) ;

    test('debe de mostrar el componente correctamente', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1 }>

             {   () => (<ProductTitle />)
}
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    }) ;




}

)