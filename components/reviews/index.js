import ButtonLink from '../buttons/buttonLink'
export default function Reviews({titleSection}) {



  return (
    <section className="Reviews">
      <div className="container">
        <div className="row">
          <div className="col multiple-title">
            <h5 className="section-title">{titleSection}</h5>
            <ButtonLink link={''} name={'Оставить отзыв'} classN={'red'}/>
          </div>
        </div>
      </div>
    </section>
  )
}