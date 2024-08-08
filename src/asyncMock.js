
const productos = [

    {
        nombre : "REMERON JERSEY ESTAMPADO BOSTON",
        color : ["gris", "lila"],
        talle : "L",
        precio : "$12.999",
        key : 0 ,
        src : "https://static.wixstatic.com/media/74fb45_8a459b45e4064aaa820490fbcbccb148~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/74fb45_8a459b45e4064aaa820490fbcbccb148~mv2.jpg",
    },

    {
        nombre : "REMERON JERSEY Los Angeles",
        color : "lila",
        talle : "L",
        precio : "$12.999",
        talle : "L",
        key : 1 ,
        src : "https://static.wixstatic.com/media/74fb45_0aea95fb625a404592b224f3498bd4d4~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_0aea95fb625a404592b224f3498bd4d4~mv2.png",
    },

    {
        nombre : "Remeron California",
        color : "negro",
        talle : "M",
        precio : "$12.999",
        key : 2 ,
        src : "https://static.wixstatic.com/media/74fb45_b976a761c2c141e2842b7b600b764112~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_b976a761c2c141e2842b7b600b764112~mv2.png",
    },

    {
        nombre : "Remeron Los Angeles",
        color : "Lila",
        talle : "L",
        precio : "12.999",
        key : 2 ,
        src : "https://static.wixstatic.com/media/74fb45_0aea95fb625a404592b224f3498bd4d4~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_0aea95fb625a404592b224f3498bd4d4~mv2.png",
    },

    {
        nombre : "Remera Chicago",
        color : ["lila","blanco"],
        talle : "L",
        precio : "10.999",
        key : 2 ,
        src : "https://static.wixstatic.com/media/74fb45_cdb97a2f358a425ab2c644d558ec05b9~mv2.png/v1/fill/w_500,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/74fb45_cdb97a2f358a425ab2c644d558ec05b9~mv2.png",
    },

    {
        nombre : "Remera Princesa",
        color: "Rojo",
        talle : "L",
        precio : "10.999",
        key : 2 ,
        src : "https://static.wixstatic.com/media/74fb45_abffa405b2444be69d61dd107ed24a6d~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/74fb45_abffa405b2444be69d61dd107ed24a6d~mv2.jpg",
    },

]



export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            resolve(productos)

        }, 3000);
    })
}