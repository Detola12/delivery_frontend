export interface Categories{
    id: string|number;
    name: string;
    image: string|undefined;
}

export const categories : Categories[] = [
    {
        id: 1, image: '/assets/images/categories/pizza.png', name: "Pizza",
    },
    {
        id: 2, image: '/assets/images/categories/burger.png', name: "Burger"
    },
    {
        id: 3, image: '/assets/images/categories/dessert.png', name: "Dessert"
    },
    {
        id: 4, image: '/assets/images/categories/healthy.png', name: "Healthy"
    },
    {
        id: 5, image: '/assets/images/categories/mexican.png', name: "Mexican"
    },
    {
        id: 6, image: '/assets/images/categories/vegan.png', name: "Vegan"
    }
]

