import React from 'react'
import styles from './About.module.css'
import interest from "../icons/interest.svg"
import Image from 'next/image'


export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
            className={styles.iconStyle} 
            src={interest}
            alt="asd"
            width={64}
            height={64}
        />
      </div>
      <article>
      <div className={styles.content}>
    <p>
      Me llamo Leandro Herrera, egresado del Bootcamp Henry. Actualmente estoy <strong> finalizando mis estudios universitarios</strong>, aprendiendo diferentes arquitecturas de desarrollo así como metodologías ágiles para trabajo en equipo.</p>
    <p>
      Algunos de mis éxitos incluyen <strong> formar parte del Staff del bootcamp Henry como Teaching Asistant</strong>. Entre las tareas se incluyen  <strong>coordinar la integración de estudiantes</strong> en el grupo de estudio y <strong>proponer ideas para la mejora </strong> de los procesos del Bootcamp.
    </p>
  </div>
      </article>
    </div>
  )
}
