exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products;
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale) {
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale === filter.onSale; 
                });
            }
            if(avgRating && [1, 2, 3, 4, 5].includes(avgRating)){
                
                filteredProducts = filteredProducts.filter((product) => {
                    let productreviews = db.reviews.filter((review) => {
                        review.productId === product.id
                    })  
                    let productAvgRating = productreviews.reduce((acc, curr) => acc.rating + curr.rating) / productreviews.length;

                    return productAvgRating >= avgRating
                });
            }
        }
        return filteredProducts
    },
    product: (parent, {id}, {db}) => {
        return db.products.find((product) => product.id === id);
    },
    categories: (parent, args, { db }) => { return db.categories },
    category: (parent, { id }, { db }) => {
        return db.categories.find((category) => category.id === id);
    },
    hello: (parent, args, context) =>  { return "sup" }

};