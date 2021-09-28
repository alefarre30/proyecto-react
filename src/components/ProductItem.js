const ProductItem = ({product, addProductToCart}) => {
    return (
        <div className="offers__product">
            <div className="offers__product--img">
                <img src={process.env.PUBLIC_URL + "/products/" + product.image} alt={product.name} />
            </div>
            <div className="offers__product--content">
                <p className="product__title">{product.name}</p>
                <p className="product__price">${product.priceNew} <span>${product.priceOld}</span></p>
                <a 
                    href="javascript:void(0);" 
                    className="btn btn-orange" 
                    onClick={() => addProductToCart(product)}>Add to Cart</a>
            </div>
        </div>
    );
}

export default ProductItem;