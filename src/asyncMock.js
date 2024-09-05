
export const productosasync = [
    {
        title: "REMERON JERSEY ESTAMPADO BOSTON",
        description: {
          color: ["gris", "gris"],
          waist: ["L"],
          brand: "none",
          cloth: "ALGODÓN JERSEY PEINADO"
        },
        price: 12999,
        image: "https://static.wixstatic.com/media/74fb45_8a459b45e4064aaa820490fbcbccb148~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/74fb45_8a459b45e4064aaa820490fbcbccb148~mv2.jpg",
        category: "Ropa de Mujer",
        sexo: "mujer",
        stock: [0],
      },
      {
        title: "REMERA CALIFORNIA",
        description: {
          color: ["negro"],
          waist: ["M"],
          brand: "none",
          cloth: ""
        },
        price: 12999,
        image: "https://static.wixstatic.com/media/74fb45_b976a761c2c141e2842b7b600b764112~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_b976a761c2c141e2842b7b600b764112~mv2.png",
        category: "Ropa de Mujer",
        sexo: "mujer",
        stock: [0],
      },
      {
        title: "REMERA LOS ANGELES",
        description: {
          color: ["Lila"],
          waist: ["L"],
          brand: "none",
          cloth: ""
        },
        price: 12999,
        image: "https://static.wixstatic.com/media/74fb45_0aea95fb625a404592b224f3498bd4d4~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_0aea95fb625a404592b224f3498bd4d4~mv2.png",
        category: "Ropa de Mujer",
        sexo: "mujer",
        stock: [0],
      },
      {
        title: "REMERA CHICAGO",
        description: {
          color: ["lila", "blanco"],
          waist: ["L"],
          brand: "none",
          cloth: ""
        },
        price: 10999,
        image: "https://static.wixstatic.com/media/74fb45_cdb97a2f358a425ab2c644d558ec05b9~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_cdb97a2f358a425ab2c644d558ec05b9~mv2.png",
        category: "Ropa de Mujer",
        sexo: "mujer",
        stock: [0],
      },
      {
        title: "REMERA PRINCESA",
        description: {
          color: ["Rojo"],
          waist: ["L"],
          brand: "none",
          cloth: ""
        },
        price: 10999,
        image: "https://static.wixstatic.com/media/74fb45_abffa405b2444be69d61dd107ed24a6d~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/74fb45_abffa405b2444be69d61dd107ed24a6d~mv2.jpg",
        category: "Ropa de Mujer",
        sexo: "mujer",
        stock: [0],
      },
      {
        title: "REMERA OVER LISO",
        description: {
          color: ["Negro"],
          waist: ["S", "M", "L", "XL"],
          brand: "ADAMA IND",
          cloth: "ALGODÓN JERSEY PEINADO"
        },
        price: 10000,
        image: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/over_liso_negro_2_1716475174.jpg?itok=_oYnrhov",
        category: "Ropa de Hombre",
        sexo: "Hombre",
        stock: [0],
      },
      {
        title: "REMERA LISA",
        description: {
          color: ["Marron"],
          waist: ["S", "M", "L", "XL"],
          brand: "none",
          cloth: ""
        },
        price: 9500,
        image: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/lisa_choco_2_1715017569.jpg?itok=_Ke-T2NO",
        category: "Ropa de Hombre",
        sexo: "hombre",
        stock: [0],
      },
      {
        title: "REMERA OVER BROOKLYN",
        description: {
          color: ["Blanco"],
          waist: ["XL"],
          brand: "none",
          cloth: ""
        },
        price: 14000,
        image: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/brooklyn_blanco_1718986603.jpeg?itok=x60hz7LA",
        category: "Ropa de Hombre",
        sexo: "hombre",
        stock: [0],
      },
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



// {
//     nombre : "",
//     color: "",
//     talle : "",
//     precio : "",
//     key : "",
//     src : "",
//     categoria : "",
//     sexo : "",
//     stock : [0] ,
// },