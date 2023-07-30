exports.Category = {
    products: ({id :categoryId}, {filter}, {db}) => {
        let categoryProducts  =  db.products.filter((product) => id === product.categoryId);
        if(filter){
            if(filter.onSale){
                categoryProducts = categoryProducts.filter((product) => product.onSale === filter.onSale);
            }
            if(avgRating && [1, 2, 3, 4, 5].includes(avgRating)){
                
                categoryProducts = categoryProducts.filter((product) => {
                    let productreviews = db.reviews.filter((review) => {
                        review.productId === product.id
                    })  
                    let productAvgRating = productreviews.reduce((acc, curr) => acc.rating + curr.rating) / productreviews.length;

                    return productAvgRating >= avgRating
                });
            }
        }
        return categoryProducts
    },
}