const products = [
  {
    name: "Apple iPhone XS 64GB Black",
    img:
      "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP21055800D__1.jpg?h=1759541470",
    description: "A completely new design iPhone",
    price: "1298.99",
    brand: "Apple",
    type: "On Sale",
    specs: {
      screenSize: "5.8 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "Not Specified",
      rearCamera: "12 Megapixels",
      frontCamera: "7 Megapixels",
      storage: "64GB",
      color: "Grey",
    },
  },
  {
    name: "Apple iPhone 7 32GB Black",
    img: "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP174323__3.jpg?h=188816055",
    description: "Great iPhone. Great Price.",
    price: "598.99",
    brand: "Apple",
    type: "Most Popular",
    specs: {
      screenSize: "4.7 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "Not Specified",
      rearCamera: "12 Megapixels",
      frontCamera: "7 Megapixels",
      storage: "32GB",
      color: "Black",
    },
  },
  {
    name: "Apple iPhone 11 128GB White",
    img:
      "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP211011__1.jpg?h=3744064013",
    description: "Great iPhone. Great Price.",
    price: "1449.00",
    brand: "Apple",
    type: "New",
    specs: {
      screenSize: "6.1 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "Not Specified",
      rearCamera: "12 Megapixels",
      frontCamera: "12 Megapixels",
      storage: "128GB",
      color: "White",
    },
  },
  {
    name: "Apple iPhone 11 64GB Purple",
    img:
      "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP111004__1.jpg?h=1942959461",
    description: "Great iPhone. Great Price.",
    price: "1349.00",
    brand: "Apple",
    type: "New",
    specs: {
      screenSize: "6.1 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "Not Specified",
      rearCamera: "12 Megapixels",
      frontCamera: "12 Megapixels",
      storage: "64GB",
      color: "Purple",
    },
  },
  {
    name: "Apple iPhone 8 Plus 64GB Space Grey",
    img:
      "https://www.pbtech.co.nz/imgprod/M/P/MPHAPP185640__1.jpg?h=3779351566",
    description: "Great iPhone. Great Price.",
    price: "1049.00",
    brand: "Apple",
    type: "On Sale",
    specs: {
      screenSize: "5.5 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "Not Specified",
      rearCamera: "12 Megapixels",
      frontCamera: "7 Megapixels",
      storage: "64GB",
      color: "Grey",
    },
  },
  {
    name: "Samsung Galaxy A10 (2019)",
    img: "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM21000__1.jpg?h=1212799516",
    description: "Great iPhone. Great Price.",
    price: "247.00",
    brand: "Samsung",
    type: "Most Popular",
    specs: {
      screenSize: "6.2 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "3400mAh",
      rearCamera: "13 Megapixels",
      frontCamera: "5 Megapixels",
      storage: "32GB",
      color: "Black",
    },
  },
  {
    name: "Samsung Galaxy A51 (2020)",
    img: "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM25100__7.jpg?h=2381236962",
    description: "Great iPhone. Great Price.",
    price: "592.00",
    brand: "Samsung",
    type: "New",
    specs: {
      screenSize: "6.5 inches",
      celluarConnectivity: "4G / 4G (Duo SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "4000mAh",
      rearCamera: "48 Megapixels",
      frontCamera: "32 Megapixels",
      storage: "128GB",
      color: "Black",
    },
  },
  {
    name: "Samsung Galaxy S10+ Prism Black",
    img:
      "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM197510__7.jpg?h=2142508784",
    description: "Great iPhone. Great Price.",
    price: "1309.00",
    brand: "Samsung",
    type: "Most Popular",
    specs: {
      screenSize: "6.1 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "3400mAh",
      rearCamera: "16 Megapixels",
      frontCamera: "10 Megapixels",
      storage: "128GB",
      color: "Black",
    },
  },
  {
    name: "Samsung Galaxy A20 (2019)",
    img: "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM22000__5.jpg?h=2789718832",
    description: "Great iPhone. Great Price.",
    price: "338.00",
    brand: "Samsung",
    type: "On Sale",
    specs: {
      screenSize: "6.4 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "4000mAh",
      rearCamera: "13 Megapixels",
      frontCamera: "8 Megapixels",
      storage: "32GB",
      color: "Black",
    },
  },
  {
    name: "Samsung Galaxy A70 (2019)",
    img: "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM27000__3.jpg?h=2328576141",
    description: "Great iPhone. Great Price.",
    price: "583.00",
    brand: "Samsung",
    type: "On Sale",
    specs: {
      screenSize: "6.7 inches",
      celluarConnectivity: "4G (Single SIM)",
      supportNet: "Vodafone, 2degrees, Spark, Skinny",
      battery: "4500mAh",
      rearCamera: "32 Megapixels",
      frontCamera: "32 Megapixels",
      storage: "128GB",
      color: "Black",
    },
  },
];

export default products;