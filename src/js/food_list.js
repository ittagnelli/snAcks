export let food_list = [ 
    {
      type: "Pizzetta",
      subtype: "Margherita",
      img: "pizzetta.png",
      price: 1,
      count: 0
    },
    {
      type: "Focaccina",
      subtype: "",
      img: "focaccina.png",
      price: 1,
      count: 0
    },  
    {
      type: "Panino",
      subtype: "Prosciutto Cotto",
      img: "prosciutto.png",
      price: 1,
      count: 0
    },  
    {
      type: "Panino",
      subtype: "Salame",
      img: "salame.png",
      price: 1,
      count: 0
    },  
    {
      type: "Cannolo",
      subtype: "Crema",
      img: "cannolocr.png",
      price: 1,
      count: 0
    },  
    {
      type: "Cannolo",
      subtype: "Cioccolato",
      img: "cannoloci.png",
      price: 1,
      count: 0
    },  
    {
      type: "Croissant",
      subtype: "Cioccolato",
      img: "croissant.png",
      price: 1,
      count: 0
    },  
    {
      type: "Saccottino",
      subtype: "Crema e Cioccolato",
      img: "saccottino.png",
      price: 1,
      count: 0
    },  
    {
      type: "Bombolone",
      subtype: "Crema",
      img: "bombolonecr.png",
      price: 1,
      count: 0
    },  
    {
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