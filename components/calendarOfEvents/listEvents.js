import ItemEvent from './itemEvent';
import ButtonMore from '../buttons/buttonsMore'

export default function ListEvents({ data, actionButton }) {



  return (
    <>
      <div className="row listEvents">
        {data.map(item => {
          return (
            <ItemEvent dataItem={item} key={item._id} />
          )
        })
        }
      </div>
      <ButtonMore callBack={actionButton} classN="borderRed" name="Загрузить еще" />
    </>

  )
}