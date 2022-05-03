export let food_list = [ 
    {
      id: 1,
      type: "Pizzetta",
      subtype: "Rossa",
      img: "pizzetta.png",
      price: 1,
      count: 0
    },
    {
      id: 2,
      type: "Focaccina",
      subtype: "",
      img: "focaccina.png",
      price: 1,
      count: 0
    },  
    {
      id: 3,
      type: "Panino",
      subtype: "Prosciutto Cotto",
      img: "prosciutto.png",
      price: 1,
      count: 0
    },  
    {
      id: 4,
      type: "Panino",
      subtype: "Salame",
      img: "salame.png",
      price: 1,
      count: 0
    },  
    {
      id: 5,
      type: "Cannolo",
      subtype: "Crema",
      img: "cannolocr.png",
      price: 1,
      count: 0
    },  
    {
      id: 6,
      type: "Cannolo",
      subtype: "Cioccolato",
      img: "cannoloci.png",
      price: 1,
      count: 0
    },  
    {
      id: 7,
      type: "Croissant",
      subtype: "Cioccolato",
      img: "croissant.png",
      price: 1,
      count: 0
    },  
    {
      id: 8,
      type: "Saccottino",
      subtype: "Crema e Cioccolato",
      img: "saccottino.png",
      price: 1,
      count: 0
    },  
    {
      id: 9,
      type: "Bombolone",
      subtype: "Crema",
      img: "bombolonecr.png",
      price: 1,
      count: 0
    },  
    {
      id: 10,
      type: "Bombolone",
      subtype: "Cioccolato",
      img: "bomboloneci.png",
      price: 1,
      count: 0
    },  
  ];

  export function resert_food_count() {
      food_list.forEach(food => {
          food.count = 0;
      });
  }

  export function update_food_list() {
    food_list = [...food_list];
  }