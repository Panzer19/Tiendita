
export const productosasync = [

];




export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            resolve(productos)

        }, 3000);
    })
}

export const getCategories = () => {

    return new Promise((resolve,reject)=>{
        setTimeout(()=> {

            resolve(productos.categoria)

        }, 1000);
    })

}
