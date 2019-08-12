
/** PRODUCTS DOSENT HAVE A DATE, SO RETURN THE SAME OBJECT */

export const sortByRecent = (products) => {
    return products
} 

export const sortByLowestPrice = (products) => (
    products.slice().sort((a, b) => a.cost - b.cost )
)


export const sortByHighestPrice = (products) => (
    products.slice().sort((a, b) => (a.cost -  b.cost) * -1 )
)