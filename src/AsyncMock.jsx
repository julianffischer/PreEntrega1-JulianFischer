const products = [
    {
        id : "1",
        image : "",
        category : "headphones",
        name : "Airpod pro",
        description : "with better technology for better sound",
        stock : "12",
        price : "$430",
        image : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/auriculares-airpods-running-apple-1572351815.jpg?crop=1xw:0.8700906344410876xh;center,top&resize=1200:*',
    },

    {
        id : "2",
        category : "computer",
        name : "Mackbook",
        description : "with the best chip M14",
        stock : "10",
        price : "$1500",
        image : 'https://www.apple.com/v/macbook-pro-13/p/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg?202304050831',
    },

    {
        id : "3",
        category : "headphones",
        name : "Airpod's Max",
        description : "With surround sound and better insulation",
        stock : "4",
        price : "$320",
        image : 'https://9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg?quality=82&strip=all&w=1600',

    },

    {
        id : "4",
        category : "tablet",
        name : "I pad Pro ",
        description : "with the best chip M14",
        stock : "11",
        price : "$500",
        image : 'https://helios-i.mashable.com/imagery/articles/02LzeN0Gys7mF5JV40vB0UP/hero-image.fill.size_1248x702.v1671117189.jpg',
    },

    {
        id : "5",
        category : "watch",
        name : "Smart Watch Pro",
        description : "new design and better performance",
        stock : "7",
        price : "$300",
        image : 'https://helios-i.mashable.com/imagery/articles/029ljXN4PBR7rSDnwc1mY3a/hero-image.fill.size_1248x702.v1662733792.png',
    },
    
    {
        id : "6",
        category : "watch",
        name : "Smart Watch 2022",
        description : "Comfortable and flexible for a better experience",
        stock : "8",
        price : "$200",
        image : 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020.jpg.landing-big_2x.jpg',
    },
    {
        id : "7",
        category : "phone",
        name : "Ihone 14 pro",
        description : "improvements in the operating system and better design",
        stock : "17",
        price : "$1500",
        image : 'https://phantom-marca.unidadeditorial.es/b70c42e5e2a041bff35364997a97a3da/crop/90x0/1232x762/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/07/16625765758492.jpg',
    },
]
export const GetProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
      const filteredProducts = products.filter((product) => {
        return product.category === category;
      });
  
      if (filteredProducts.length > 0) {
        const mappedProducts = filteredProducts.map((product) => {
          return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
          };
        });
  
        resolve(mappedProducts);
      } else {
        reject("No se encontraron productos para la categoría especificada");
      }
    });
  };


export const GetProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500);
    }) 
}
