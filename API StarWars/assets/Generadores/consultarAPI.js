
export default function consultarAPI(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                resolve(data);
            })
            .catch((error) => {
                console.log("Error al consultar la API:", error);
                reject(error);
            });
    });
}



//Este codigo no me funciono, no se que tiene malo. tambien lo probe exportando por separado.
// export default consultarAPI = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url).then(resp => resp.json()).then(data => {
//             console.log(data);
//             resolve(data)
//         })
//     })
// }


