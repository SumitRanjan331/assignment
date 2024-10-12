
import React, { useEffect, useState } from 'react';
import styles from '../styles/productList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetching products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <aside className={styles.filterSidebar}>
        <h3>3425 Items</h3>
        <div className={styles.filterSection}>
          <label><input type="checkbox" /> Customizable</label>
          <label>Ideal For</label>
          <label>Occasion</label>
          <label>Work</label>
          <label>Fabric</label>
          <label>Segment</label>
          <label>Suitable For</label>
          <label>Raw Materials</label>
          <label>Pattern</label>
        </div>
      </aside>

      <div className={styles.productSection}>
      <h1 className={styles.disc}>DISCOVER OUR PRODUCTS</h1>

        <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur.</p>

        <div className={styles.productGrid}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
