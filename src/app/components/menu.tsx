const menuItems = [
  {
    category: "Coffee",
    items: [
      {
        name: "Espresso",
        price: "$3.00",
        description:
          "An intense and aromatic shot of pure coffee artistry, crafted to awaken your senses with bold flavors and a smooth finish.",
      },
      {
        name: "Americano",
        price: "$3.50",
        description:
          "A harmonious blend of rich espresso and hot water, offering a velvety texture and a taste as timeless as its name.",
      },
      {
        name: "Latte",
        price: "$4.50",
        description:
          "A luxurious union of creamy steamed milk and perfectly pulled espresso, delivering a symphony of smoothness in every sip.",
      },
      {
        name: "Cappuccino",
        price: "$4.00",
        description:
          "A classic masterpiece with equal parts robust espresso, velvety milk, and airy froth, crowned with a dusting of cocoa.",
      },
      {
        name: "Macchiato",
        price: "$3.75",
        description:
          "A bold espresso kissed by a delicate touch of frothy milk, creating a striking contrast of flavor and texture.",
      },
      {
        name: "Flat White",
        price: "$4.25",
        description:
          "A sophisticated coffee creation, blending silky microfoam with a rich espresso base, perfect for refined palates.",
      },
    ],
  },
  {
    category: "Matcha",
    items: [
      {
        name: "Matcha Latte",
        price: "$5.00",
        description:
          "A creamy infusion of premium matcha and velvety milk, offering earthy flavors balanced by natural sweetness.",
      },
      {
        name: "Iced Matcha",
        price: "$5.50",
        description:
          "A refreshing treat that pairs the vibrant essence of matcha with chilled milk for a cooling, revitalizing experience.",
      },
      {
        name: "Matcha Affogato",
        price: "$6.00",
        description:
          "An indulgent fusion of bold matcha and decadent ice cream, offering a creamy, dessert-like twist on tradition.",
      },
      {
        name: "Matcha Lemonade",
        price: "$5.75",
        description:
          "A zesty and invigorating blend of bright matcha and tangy lemonade, delivering a burst of vibrant, uplifting flavor.",
      },
      {
        name: "Matcha Smoothie",
        price: "$6.50",
        description:
          "A luscious, nutrient-rich blend of creamy ingredients and matcha, designed to energize and satisfy in equal measure.",
      },
    ],
  },
  {
    category: "Tea",
    items: [
      {
        name: "Chai Latte",
        price: "$4.00",
        description:
          "A soothing elixir of warm spices and frothy steamed milk, offering a comforting embrace with every sip.",
      },
      {
        name: "Earl Grey",
        price: "$3.50",
        description:
          "An elegant blend of black tea infused with fragrant bergamot, evoking a sense of sophistication and serenity.",
      },
      {
        name: "Jasmine Green Tea",
        price: "$3.75",
        description:
          "Delicately floral and naturally sweet, this green tea is a fragrant journey to tranquility in a cup.",
      },
      {
        name: "Peppermint Tea",
        price: "$3.25",
        description:
          "A refreshing herbal infusion that combines cool minty notes with a smooth, calming finish.",
      },
      {
        name: "English Breakfast",
        price: "$3.00",
        description:
          "A robust and full-bodied black tea, perfectly suited to energize your mornings or complement a hearty meal.",
      },
    ],
  },
  {
    category: "Pastries",
    items: [
      {
        name: "Croissant",
        price: "$3.00",
        description:
          "Golden layers of buttery perfection, baked to a crisp, flaky finish that melts in your mouth.",
      },
      {
        name: "Blueberry Muffin",
        price: "$3.50",
        description:
          "A moist and tender muffin bursting with the juiciness of fresh blueberries and a hint of vanilla.",
      },
      {
        name: "Cinnamon Roll",
        price: "$4.00",
        description:
          "Spirals of warm cinnamon and brown sugar, topped with a luscious cream cheese glaze for a decadent treat.",
      },
      {
        name: "Almond Scone",
        price: "$3.75",
        description:
          "A nutty delight with a crumbly texture and a delicate sweetness, perfect for pairing with tea or coffee.",
      },
      {
        name: "Chocolate Croissant",
        price: "$3.50",
        description:
          "A rich, chocolate-filled pastry enveloped in buttery, flaky layers, offering an indulgent escape.",
      },
      {
        name: "Lemon Drizzle Cake",
        price: "$4.25",
        description:
          "A moist, zesty cake with a tangy lemon glaze, striking the perfect balance between sweetness and citrus vibrance.",
      },
    ],
  },
];

function Menu() {
  return (
    <div className="flex justify-center bg-gray-50 text-gray-900">
      <div className="h-[100%] w-[100%] bg-white z-10 py-[32px] flex flex-col items-center space-y-[32px] overflow-auto">
        {/* Header Section */}
        <div className="flex flex-col py-[16px] justify-center text-center">
          <span className="text-black font-serif text-5xl sm:text-6xl tracking-wide">
            Amber & Aroma
          </span>
          <span className="text-gray-700 text-2xl font-mono italic">
            Coffee & Tea
          </span>
        </div>

        {/* Dynamic Menu Sections */}
        {menuItems.map((section) => (
          <div
            key={section.category}
            className="w-[90%] sm:w-[80%] lg:w-[70%] space-y-[24px]"
          >
            {/* Category Header */}
            <div className="flex items-center">
              <hr className="flex-grow border-gray-300" />
              <p className="px-4 text-gray-800 text-xl font-semibold tracking-wider uppercase">
                {section.category}
              </p>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col space-y-[8px] p-6"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 text-lg font-semibold tracking-widest">
                      {item.name}
                    </span>
                    <span className="text-gray-600 text-base">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
