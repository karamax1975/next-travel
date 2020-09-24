import { useEffect, useState, useRef } from "react"


export default function StringInput({ list, type, placeholder, getValue }) {

    const [listLi, setListLi] = useState(list);
    const [listOn, setListOn] = useState(false);
    const [placeholderInput, setPlaceholderInput] = useState(placeholder);
    const [valueInput, setValueInput] = useState('');
    const [selected, setSelected] = useState(false);
    const [find, setFind] = useState('')
    const formRef = useRef();

    useEffect(() => {
        setListLi(list)
    }, [list])

    useEffect(() => { // по умолчанию устанавливаю клик на боди
        document.body.addEventListener('click', onClickOutside)
        return () => { // при выключении компонента очищается слушатель
            document.body.removeEventListener('click', onClickOutside)
        }
    }, [])

    useEffect(() => { // если placeholder изменился (меняется в родительском компоненте)
        setPlaceholderInput(placeholder); // меняю плейсхолдер
        setListOn(false) // закрываю выпадающую панель
    }, [placeholder])
    // -----------------------------------------------------------------
    function openList() {
        setListOn(!listOn);
    }
    function onClickOutside(e) { // при клике не в открытый DropDown - он закрывается
        if (!formRef.current.contains(e.target)) {
            setListOn(false);
        }
    }
    // передаю введенный текст в главный компонент
    function getSubmitInput(e) {
        e.preventDefault();
        find ? getValue(find) : getValue(null)
        // getValue(find); // передаю введенные данные в родительский компонент
        setListOn(false) // закрываю выпадающую панель
        setValueInput('') // очищаю value input
    }
    // получаю введенный текст
    function getValueInput(e) {
        setValueInput(e.target.value)
        filterArray(listLi, e.target.value)
    }
    // вызов внешней функции
    function selectedItem(item) {
        getValue(item); // передаю данные в родительский компонент
        setSelected(true)  // меняется класс у формы
        setListOn(false) // закрываю выпадающую панель
    }
    // поиск в введенного в списке
    function filterArray(arr, value) {
        const residue = [];
        const find = [];
        arr.forEach(item => {
            if (item[type].toLowerCase().indexOf(value.toLowerCase()) === 0) {
                find.push(item);
            }
            else {
                residue.push(item);
            }
        })
        if (find.length > 0) {
            setListLi([...find, ...residue]);
            setFind(find[0][type])
        }
    }
    // --------------------------------------------------------------



    const dropDownItem = listLi.map(item => {
        return (
            <div className='dropDown-item'
                autoFocus
                key={item._id}
                onClick={() => selectedItem(item)}>
                {item[type]}
            </div>
        );
    });
    // иконка в плейсхолдере - ^
    const iconOn = (
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
            <path d="M1 5L4.5 1L8 5" strokeLinecap="round" />
        </svg>
    )
    // иконка в плейсхолдере  - v   
    const iconOf = (
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
            <path d="M1 1L4.5 5L8 1" strokeLinecap="round" />
        </svg>
    )

    return (
        <div className="stringInput" ref={formRef}>
            <form className={selected ? "input selected" : "input"}
                onClick={openList}
                onSubmit={(e) => getSubmitInput(e)}
            >
                <input type="text"
                    placeholder={placeholderInput}
                    onChange={(e) => getValueInput(e)}
                    value={valueInput}
                />
                <div className="input_icon">
                    {/* если открыта выпадайка, меняется иконка */}
                    {listOn ? iconOn : iconOf}
                </div>
            </form>
            {/* если открыта выпадайка, рендерится выпадайка. */}
            {listOn ? <div className="list-dropDown">
                {dropDownItem}
            </div> : ''}
        </div>

    )
}