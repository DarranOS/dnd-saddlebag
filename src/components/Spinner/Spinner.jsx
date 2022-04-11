import s from './Spinner.module.scss'

function Spinner() {
  return (
    <div className={s.root}>
      <div className={s.spinner}></div>
    </div>
  )
}

export default Spinner
