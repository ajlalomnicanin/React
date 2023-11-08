import ProductCard from "./ProductCard";

const Class21 = () => {
  const additionalData = [
    {
      brandTitle: "New Brand 1",
      description: "This is another great product!",
      reviews: 4.0,
      reviewsCount: 75,
      socialNetworkLinks: {
        fb: "https://www.facebook.com/newbrand1",
        twitter: "https://twitter.com/newbrand1",
        instagram: "https://www.instagram.com/newbrand1",
      },
      imgs: {
        blue: "new-blue-product.jpg",
        white: "new-white-product.jpg",
        black: "new-black-product.jpg",
      },
      sizes: ["m", "l", "xl"],
      price: 59.99,
    },
    {
      brandTitle: "New Brand 2",
      description: "Introducing our latest product!",
      reviews: 4.8,
      reviewsCount: 120,
      socialNetworkLinks: {
        fb: "https://www.facebook.com/newbrand2",
        twitter: "https://twitter.com/newbrand2",
        instagram: "https://www.instagram.com/newbrand2",
      },
      imgs: {
        blue: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fbeauty%2F&psig=AOvVaw0eJP9vtzw5m5I8oVKmRnFY&ust=1699465606377000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDFuf64soIDFQAAAAAdAAAAABAE",
        white:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fsad-love&psig=AOvVaw0eJP9vtzw5m5I8oVKmRnFY&ust=1699465606377000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDFuf64soIDFQAAAAAdAAAAABAJ",
        black:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-picture&psig=AOvVaw0eJP9vtzw5m5I8oVKmRnFY&ust=1699465606377000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDFuf64soIDFQAAAAAdAAAAABAS",
      },
      sizes: ["s", "m", "l", "xl"],
      price: 69.99,
    },
  ];
  return (
    <div>
      {additionalData.map((item, index) => {
        return <ProductCard key={index} data={item} />;
      })}
    </div>
  );
};
export default Class21;
