const storeItems = [
  {
    id: 1,
    imageUrl: "images/book.jpg",
    name: "Book",
    count: 10,
    size: { width: 15, height: 20 },
    weight: "0.5kg",
    price: 10.99,
    comments: [
      {
        id: 1,
        productId: 1,
        description: "Great read, highly recommended!",
        date: new Date("2023-01-15T00:00:00Z"),
      },
      {
        id: 2,
        productId: 1,
        description: "The story was engaging and well-written.",
        date: new Date("2023-02-10T00:00:00Z"),
      },
    ],
  },
  {
    id: 2,
    imageUrl: "images/computer.jpg",
    name: "Computer",
    count: 5,
    size: { width: 50, height: 30 },
    weight: "5kg",
    price: 1110,
    comments: [
      {
        id: 3,
        productId: 2,
        description: "Excellent performance for gaming and work.",
        date: new Date("2023-03-01T00:00:00Z"),
      },
      {
        id: 4,
        productId: 2,
        description: "A bit expensive, but worth it.",
        date: new Date("2023-03-20T00:00:00Z"),
      },
    ],
  },
  {
    id: 3,
    imageUrl: "images/banana.jpg",
    name: "Banana",
    count: 100,
    size: { width: 2, height: 10 },
    weight: "0.2kg",
    price: 1.05,
    comments: [],
  },
  {
    id: 4,
    imageUrl: "images/car.jpg",
    name: "Car",
    count: 1,
    size: { width: 200, height: 150 },
    weight: "1500kg",
    price: 12000,
    comments: [
      {
        id: 7,
        productId: 4,
        description: "Smooth ride and great fuel efficiency.",
        date: new Date("2023-05-12T00:00:00Z"),
      },
      {
        id: 8,
        productId: 4,
        description: "Loved the design and comfort.",
        date: new Date("2023-05-20T00:00:00Z"),
      },
    ],
  },
  {
    id: 5,
    imageUrl: "images/laptop.jpg",
    name: "Laptop",
    count: 8,
    size: { width: 35, height: 25 },
    weight: "2kg",
    price: 1210,
    comments: [
      {
        id: 9,
        productId: 5,
        description: "Portable and powerful. Perfect for work.",
        date: new Date("2023-06-08T00:00:00Z"),
      },
      {
        id: 10,
        productId: 5,
        description: "Battery life could be better, but overall great laptop.",
        date: new Date("2023-06-15T00:00:00Z"),
      },
    ],
  },
];

export default storeItems;
