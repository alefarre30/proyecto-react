import ProductItem from "./ProductItem";

const ListProducts = ({listProducts, addProductToCart}) => {
    return (<section className="offers container">
        <h2 className="title">Latest <span>Offers</span></h2>
        <div className="offers__products">
            {listProducts.map(product => (
                <ProductItem 
                    key={product.id}
                    product={product}
                    addProductToCart={addProductToCart}
                />
            ))}
        </div>
    </section>);
}

export default ListProducts;