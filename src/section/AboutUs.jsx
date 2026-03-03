import style from "./AboutUs.module.css";
import { brands } from "../data/brands";
import { families } from "../data/families";

export default function AboutUs() {
  return (
    <section id="aboutUs" className={style.home} >
      <div className={style.slogan}>
        <h1>A Propos De Nous</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          adipisci facere dolorem nam in quasi neque quibusdam at accusantium
          excepturi, fuga harum ducimus quod error dicta odio! Architecto et
          reiciendis officia enim animi fuga quibusdam, quasi dolorum corrupti,
          aperiam cupiditate, ab neque velit voluptas odit molestiae. Culpa nemo
          optio suscipit.
        </p>
      </div>

      <div className={style.news}>
              <div>
                <h1>Nos marques</h1>
                <div className={style.grid}>
                  {brands.map((brand) => (
                    <div key={brand.id} className={style.card}>
                      <img src={brand.image} alt={brand.name} />
                      <h3> {brand.name} </h3>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1>Nos families</h1>
                <div className={style.grid}>
                  {families.map((famil) => (
                    <div key={famil.id} className={style.card}>
                      <img src={famil.image} alt={famil.name} />
                      <h3> {famil.name} </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </section>
      )}