import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={style.contact}>
      <h2>Contactez-nous !</h2>
      <div className={style.continer}>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.8030526814077!2d-8.00795137568775!3d31.666607574147392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe94fa76e367d%3A0xffa2fc64d032c749!2zQ09TTU9TIFRFQ0hOT0xPR0lFIPCfh7Lwn4emIE1BUlJBS0VDSA!5e0!3m2!1sar!2sma!4v1771328825412!5m2!1sar!2sma"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className={style.form}>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Email" required/>
            <textarea type="text" placeholder="Message" required rows="5"/>
            <button type="submit">Envoyer</button>
        </form>

      </div>
    </section>
  );
}
