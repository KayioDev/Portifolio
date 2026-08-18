import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyNum, setCopyNumber] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("kaioliam.business@outlook.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function copyNumber() {
    navigator.clipboard.writeText("11951424881");
    setCopyNumber(true);

    setTimeout(() => {
      setCopyNumber(false);
    }, 2000);
  }

  return (
    <section className="Contact">
      <div className="Contact__content">
        <div className="Contact__intro">
          <p className="Contact__eyebrow">Contato</p>
          <h2>Vamos conversar</h2>
        </div>

        <div className="Contact__actions">
          <a
            className="Contact__link"
            href="https://github.com/KayioDev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <button className="Contact__button" onClick={copyEmail} type="button">
            {copied ? "Email copiado" : "kaioliam.business@outlook.com"}
          </button>

          <button className="Contact__button" onClick={copyNumber} type="button">
            {copyNum ? "Número copiado" : "+55 (11) 95142-4881"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;