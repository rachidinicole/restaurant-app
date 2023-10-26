const ingredients = [
  {
    id: 1,
    title: "sugar",
  },
  {
    id: 2,
    title: "oats",
  },
  {
    id: 3,
    title: "cured pork",
  },
  {
    id: 4,
    title: "tomatoes",
  },
];

const recipes = [
  {
    id: 1,
    name: "Pizza",
    discount: "Vegan Pizza",
    price: 90,
    image: require("../../assets/restaurant/pizza1.jpeg"),
    ingredients,
    description:
      "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
    rating: 4.7,
    time: "15 min",
  },
  {
    id: 2,
    name: "DoubleDeker",
    discount: "Bacon & Cheese",
    price: 77,
    image: require("../../assets/restaurant/pizza1.jpeg"),
    ingredients,
    description:
      "Id amet veniam nisi esse ea. Ex est ut cupidatat sint culpa commodo exercitation est magna proident officia laboris. Exercitation laboris ex laborum qui mollit et occaecat deserunt incididunt. Mollit excepteur sunt adipisicing ullamco excepteur non ex proident. Irure laborum enim do fugiat aute amet eu quis amet tempor.",
    rating: 4.7,
    time: "10 min",
  },
  {
    id: 3,
    name: "GingerBread",
    discount: "Pepparoni Pizza",
    price: 570,
    image: require("../../assets/restaurant/pizza1.jpeg"),
    ingredients,
    description:
      "Duis enim eiusmod do tempor aliqua exercitation non sunt duis excepteur eu cillum ad. Laboris sit mollit et qui quis ipsum nisi occaecat sunt et proident voluptate ipsum eiusmod. Non officia ullamco pariatur pariatur consectetur ea. Cupidatat in irure sint reprehenderit fugiat reprehenderit aute. Est minim id adipisicing aliqua ut in deserunt dolore aliquip exercitation Lorem. Fugiat tempor excepteur magna nisi.",
    rating: 4.7,
    time: "12 min",
  },
  {
    id: 4,
    name: "Rissoto",
    discount: "Avacado Pizza",
    price: 67,
    image: require("../../assets/restaurant/pizza1.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 4.7,
    time: "20 min",
  },
  {
    id: 5,
    name: "Arancini",
    discount: "Pepper Topping Pizza",
    price: 56,
    image: require("../../assets/restaurant/pizza1.jpeg"),
    ingredients,
    description:
      "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
    rating: 4.7,
    time: "15 min",
  },
  {
    id: 6,
    name: "Bruschetta",
    discount: "Classic Pizza",
    price: 88,
    image: require("../../assets/restaurant/pizza1.jpeg"),
    ingredients,
    description:
      "Id amet veniam nisi esse ea. Ex est ut cupidatat sint culpa commodo exercitation est magna proident officia laboris. Exercitation laboris ex laborum qui mollit et occaecat deserunt incididunt. Mollit excepteur sunt adipisicing ullamco excepteur non ex proident. Irure laborum enim do fugiat aute amet eu quis amet tempor.",
    rating: 5,
    time: "30 min",
  },
  {
    id: 7,
    name: "Tivolli",
    discount: "Italian Cheese",
    price: 60,
    image: require("../../assets/restaurant/pizza2.jpeg"),
    ingredients,
    description:
      "Duis enim eiusmod do tempor aliqua exercitation non sunt duis excepteur eu cillum ad. Laboris sit mollit et qui quis ipsum nisi occaecat sunt et proident voluptate ipsum eiusmod. Non officia ullamco pariatur pariatur consectetur ea. Cupidatat in irure sint reprehenderit fugiat reprehenderit aute. Est minim id adipisicing aliqua ut in deserunt dolore aliquip exercitation Lorem. Fugiat tempor excepteur magna nisi.",
    rating: 4.0,
    time: "32 min",
  },
  {
    id: 8,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/pizza2.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 9,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/pizza2.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 10,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/pizza2.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 11,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/pizza2.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 12,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/hookah.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 13,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/hookah.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 14,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/hookah.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 15,
    name: "Hoookah",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/hookah.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
  {
    id: 16,
    name: "gelato",
    discount: "Sea Water",
    price: 70,
    image: require("../../assets/restaurant/hookah.jpeg"),
    ingredients,
    description:
      "Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.",
    rating: 3.5,
    time: "20 min",
  },
];

export default recipes;
