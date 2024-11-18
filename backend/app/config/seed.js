import { productSchema as Product } from "../models/product.model.js";
import { userSchema as User } from "../models/user.model.js";

const seed = async () => {
    try {
        const userCount = await User.countDocuments({});
        if (userCount === 0) {
            const user = new User({
                name: "admin",
                email: "admin@gmail.com",
                password: "admin",
            });
            await user.save();
        }
        const productCount = await Product.countDocuments({});
        if (productCount === 0) {
            await Product.insertMany([
                {
                    _id: "673b5e487244d2b43e9b0258",
                    name: "Ethereal Yacht",
                    description:
                        "A luxury yacht with state-of-the-art amenities and a lavish interior.",
                    image: "https://images.unsplash.com/photo-1579272656391-b9b486fef402",
                    rating: 4.8,
                    price: 50000000,
                    brand: "AquaLux",
                    category: "Yachts",
                    countInStock: 5,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0259",
                    name: "Luxe Haven Villa",
                    description:
                        "An opulent villa featuring 8 bedrooms, a private pool, and panoramic ocean views.",
                    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                    rating: 5.0,
                    price: 15000000,
                    brand: "Elite Properties",
                    category: "Real Estate",
                    countInStock: 2,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0260",
                    name: "Regal Timepiece",
                    description:
                        "A handcrafted Swiss watch encrusted with diamonds.",
                    image: "https://images.unsplash.com/photo-1649357584808-333476473dce",
                    rating: 4.9,
                    price: 250000,
                    brand: "Geneva Crown",
                    category: "Watches",
                    countInStock: 20,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0261",
                    name: "Prestige Jet",
                    description:
                        "A private jet offering unparalleled luxury and convenience for elite travelers.",
                    image: "https://images.unsplash.com/photo-1692210154575-3727a1849df0",
                    rating: 4.7,
                    price: 35000000,
                    brand: "SkyMaster",
                    category: "Aviation",
                    countInStock: 1,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0262",
                    name: "Imperial Sedan",
                    description:
                        "A high-performance luxury car with a sleek design and advanced features.",
                    image: "https://images.unsplash.com/photo-1635974065083-03656b42d9cb",
                    rating: 4.6,
                    price: 200000,
                    brand: "Road Luxe",
                    category: "Automobiles",
                    countInStock: 8,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0263",
                    name: "Luxury Penthouse",
                    description:
                        "A premium penthouse with a stunning cityscape view and top-tier furnishings.",
                    image: "https://images.unsplash.com/photo-1711426793036-cc10917d34a9",
                    rating: 4.9,
                    price: 10000000,
                    brand: "Skyline Estates",
                    category: "Real Estate",
                    countInStock: 3,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0264",
                    name: "Majestic Superyacht",
                    description:
                        "A massive superyacht with multiple decks and unparalleled luxury features.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Koru_Superyacht.jpg/800px-Koru_Superyacht.jpg",
                    rating: 5.0,
                    price: 75000000,
                    brand: "Ocean Monarch",
                    category: "Yachts",
                    countInStock: 1,
                    __v: 0,
                },
                {
                    _id: "673b5e487244d2b43e9b0265",
                    name: "Exclusive Art Deco Necklace",
                    description:
                        "A one-of-a-kind diamond and emerald necklace designed for royalty.",
                    image: "https://images.unsplash.com/photo-1474585628895-4579822e21a8",
                    rating: 4.8,
                    price: 500000,
                    brand: "Regal Jewels",
                    category: "Jewelry",
                    countInStock: 10,
                    __v: 0,
                },
            ]);
        }
        console.log("[MONGO] seeded the database");
    } catch (error) {
        console.error(error);
    }
};

export default seed;
