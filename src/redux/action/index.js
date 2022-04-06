//ADD ITEM TO CART
export const addCart = (product) => {
    return{
        type : 'ADDITEM',
        payload : product

    }
}

// FOR DELETE ITWEM FROM TYHE CARD

export const deLCart = (product) => {
    return{
        type : 'DELTEM', 
        payload : product
    }
}