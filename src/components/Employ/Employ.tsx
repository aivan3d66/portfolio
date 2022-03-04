import style from './Employ.module.scss';

export const Employ = () => {
  return (
    <section className={style.employContainer}>
      <h2>Looking for remote work</h2>
      <div className={style.employWrapper}>
        <button>Hire me</button>
      </div>
    </section>
  )
}
