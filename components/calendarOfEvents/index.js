import TitleFilter from '../filters/titleFilter'

export default function CalendarOfEvents({ titleSection }) {

  return (
    <section className="CalendarOfEvents">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="multiple-Title">
              <h5 className="section-title">{titleSection}</h5>
              <TitleFilter/>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}