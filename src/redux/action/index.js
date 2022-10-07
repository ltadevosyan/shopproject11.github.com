// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Del Item From Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}