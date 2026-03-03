import style from "./Products.module.css";

import { products } from "../data/products";
import Product from "../components/Product";

export default function Products() {
  return (
    <section id="products">
      <h2>Nos Produits</h2>

      <div className={style.grid}>
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
