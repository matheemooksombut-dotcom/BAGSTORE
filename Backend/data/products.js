module.exports = Array.from({ length: 12 }, (_, index) => {
  const productId = index + 1;
  const colors = [
    ['orange', 'pink'],
    ['rgb(233, 203, 246)', 'rgb(183, 248, 210)'],
    ['green'],
    ['blue'],
    ['black'],
    ['black'],
    ['pink'],
    ['orange'],
    ['blue'],
    ['lightblue'],
    ['pink'],
    ['yellow'],
  ];

  const variants = colors[index].map((color, variantIndex) => ({
    color,
    image:
      productId === 1 && variantIndex === 1
        ? '/item1-pink.jpg'
        : productId === 2 && variantIndex === 1
          ? '/item2-mint.jpg'
          : `/bag${productId}.png`,
  }));

  return {
    productId,
    name: `Product${productId}`,
    description: `BAGSTORE bag model ${productId}`,
    price: 300,
    variants,
    hoverImage: `/showbag${productId}.png`,
    stock: 100,
    isActive: true,
  };
});
