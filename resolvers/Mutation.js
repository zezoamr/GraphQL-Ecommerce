exports.Mutation = {
    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((category) => category.id !== id)
        db.products = db.products.map((product) => {
            if(product.category === id){
                return {
                    ...product,
                    categoryId: null,
                };
            }
            else return product
        })
        return true
    },
    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter((product) => product.id !== id)
        db.reviews = db.reviews.filter((review) => review.productId !== id)
        return true
    },
    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter((review) => review.id !== id)
        return true
    },
}