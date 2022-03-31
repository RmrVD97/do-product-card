# TSDX React User Guide

``` 
  <ProductCard 
                            key={ product.id }
                            product={ product }
                           
                            initialValues={{
                                count:4,
                                maxCount:10,
                            }}
                        >

                            { 
                                ({reset,increaseBy,count}) => (
                                     <> 
                                    <ProductImage />
                                    <ProductTitle  />
                                    <ProductButtons  />

                            

                                    </>  
                                )
                            }
                            


                        </ProductCard>

                      ```