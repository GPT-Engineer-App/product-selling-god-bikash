const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg text-center">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;