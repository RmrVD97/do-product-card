import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../src/components/ProductCard';
import { product1 } from './products';


const { act } = renderer;

describe('ProductCard', () => {
    
    test('debe de mostrar el componente correctamente ', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {() => (
                        <h1>Hola </h1>
                )}
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    }) ;

    test('debe de mostrar el componente correctamente ', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                ({ increaseBy,count }) => (
                      <>  <h1>Hola </h1>
                        <span>{count}</span>
                        <button onClick={() =>increaseBy(1)}></button>
                </>)
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();        
                
        expect(tree).toMatchSnapshot();
        console.log((tree as any).children[2]);
                act(() => {
                    (tree as any).children[3].props.onClick();
                })

        
        tree = wrapper.toJSON();
                
        expect((tree as any).children[2].children[0]).toBe('1');

    }) ;

    



}

)