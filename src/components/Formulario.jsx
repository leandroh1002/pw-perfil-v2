import React from 'react'
import styles from "./Formulario.module.css"

export default function Formulario() {
  return (
      <div className={styles.container}>
    <h2 className={styles.h2Format}>Formulario de Contacto</h2>
    <form id="contactForm">
      <div className={styles.formGroup}>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div className={styles.formGroup}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className={styles.formGroup}>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
  )
}