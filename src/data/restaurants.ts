export interface Restaurant{
    id: string|number,
    name: string,
    categories: string,
    rating: number|null,
    deliveryTime: string|null,
    deliveryPrice: string|null,
    image: string|undefined,
}

export const restaurants : Restaurant[] = [
    {
        id: 1,
        name: "Tastee Fried Chicken",
        categories: "Burger, Shawarma",
        rating: 4.6,
        deliveryTime: "10 - 15 min",
        deliveryPrice: "$1.69 Delivery",
        image: "/assets/images/restaurants/restaurant1.jpg",
    },
    {
        id: 2,
        name: "Pizza Palace",
        categories: "Pizza, Italian",
        rating: 4.8,
        deliveryTime: "20 - 25 min",
        deliveryPrice: "$2.49 Delivery",
        image: "/assets/images/restaurants/restaurant2.jpg",
    },
    {
        id: 3,
        name: "Sushi Express",
        categories: "Sushi, Japanese",
        rating: 4.4,
        deliveryTime: "15 - 20 min",
        deliveryPrice: "Free Delivery",
        image: "/assets/images/restaurants/restaurant4.jpg",
    },
    {
        id: 4,
        name: "Taco Town",
        categories: "Mexican, Tacos",
        image: "/assets/images/restaurants/restaurant6.jpg",
        rating: 4.3,
        deliveryTime: "25-35 min",
        deliveryPrice: "$2.49"
    },
    {
        id: 5,
        name: "Pasta Palace",
        categories: "Italian, Pasta",
        image: "/assets/images/restaurants/restaurant5.jpg",
        rating: 4.5,
        deliveryTime: "30-40 min",
        deliveryPrice: "$3.99"
    },
];

