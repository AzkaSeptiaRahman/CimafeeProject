// Style
import style from '../style/CardPlace.module.css'

export default function CardPlace({ data, getSelected, popup }) {
    const { name, hour } = data
    const image = data.images[0]
    return (
        <div className={style.card}>
            <div className={style.thumb_card} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={style.content_card}>
                <h1 className={style.content_title}>{name}</h1>
                <span className={style.content_hour}>{hour}</span>
                {!popup ? (
                    <button onClick={() => getSelected(data)} className={style.button_card}>Lihat Lebih Lanjut</button>
                ) : null}
            </div>
        </div >
    )
}