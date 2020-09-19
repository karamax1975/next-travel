export default function InfoSearch({country, type, date, adults, child}) {

    const stringAdult = adults < 2 ? 'взрослый' : 'взрослых';
    let stringChild = child ?? 'без детей'
    switch (child) {
        case 1: {
            stringChild = 'ребенок'
            break
        }
        case 2:
        case 3:
        case 4: {
            stringChild = 'ребенка'
            break
        }
        case 5:
        case 6: {
            stringChild = 'детей'
            break
        }
        default: {
            stringChild = 'без детей'
            break
        }
    }


    return (
        <div className="rezult-select">
            <h6>Ваш выбор:</h6>
            <p>страна: <span>{country == null ? 'все страны' : country}</span></p>
            <p>тип тура: <span>{type == null ? 'все туры' : type}</span></p>
            <p>дата тура: <span>{date == '' ? 'открытая дата' : date}</span></p>
            <p>туристы: <span>{adults} {stringAdult}, {child > 0 ? `${child} ${stringChild}` : stringChild}</span></p>
        </div>
    )
}