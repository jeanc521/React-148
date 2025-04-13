import style from './Footer.module.css'

export function Footer() {
  return (
    <footer className={style.footercss}>
      <a target="_blank" href="https://github.com/jeanc521" rel="noreferrer">
        <img width="30px" height="auto" src="./assets/images/github (1).png" alt="Github Jean" />
      </a>
    </footer>
  )
}
