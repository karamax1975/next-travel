import React from "react";
import getArrayParameter from "../../inc/getArrayParameter";

export default class InputTypeTour extends React.Component {
  state = {
    arrayType: [], // список 
    dropDown:false, // выпадающий список on/of
    value:'', // значение инпута
    find:'',
  };
  elemRef = React.createRef();

  componentDidMount() {
    getArrayParameter(this.props.type).then((data) => {
      this.setState({
        arrayType: data,
      });
    });
    document.body.addEventListener('click',(e)=> this.onClickOutside(e))
  }

  onClickOutside=(e)=>{ // при клике не в открытый DropDown - он закрывается
    if(this.elemRef.current!==null){
        if(!this.elemRef.current.contains(e.target)){
          this.dropDown();
        }
    }
  }


  filterArray=(arr, value)=>{
    const residue = [];
    const find = [];
    arr.forEach((item, index) =>{ 
      if (item.toLowerCase().indexOf(value.toLowerCase()) === 0){
        find.push(item);
      }
      else {
        residue.push(item);
      }
    })
    this.setState({arrayType:[...find, ...residue]});
    this.setState({find:find[0]});
  }

  dropDown=()=>{ // открытие / закрытие выпадающего списка
    this.setState({dropDown:!this.state.dropDown})
  }

  dataInput=(e)=>{ // получение ввода в инпуте
    this.setState({value:e.target.value});
    this.filterArray(this.state.arrayType, e.target.value);
  }
  getDataInput=(e)=>{ /// подтверждение выбора в инпуте
    e.preventDefault();

    /// если не найдено соответствующего вводу - выводится пустое значение
    if(this.state.find){
      this.props.getUserSelect(this.state.find);
    }
    else{
      this.props.getUserSelect(this.props.name);
    }
    this.dropDown();
  }

  UserSelect=(select)=>{ /// передает наверх выбор юзера
    this.props.getUserSelect(select);
    this.dropDown();
    
  }

  render() {
    

    // формирую список
 
    const dropDownItem = this.state.arrayType.map((item, index) => {
      return (
        <div
          className='dropDown-item'
          key={index}
          onClick={() => this.UserSelect(item)}
          >{item}
        </div>
      );
    });

    if (!this.state.dropDown) {
      return (
        <div className="input-wrapper">
          <div className="input" 
            onClick={this.dropDown}
          >
            <span>{this.props.name}</span>
            <div className="input_icon">
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 1L4.5 5L8 1" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      );
    } 
    else {

      return (
        <div className="input-wrapper" ref={this.elemRef}>
          <form className="input" onSubmit={(e)=>this.getDataInput(e)}>
            <input type="text" placeholder="Тип тура" autoFocus 
              onChange={(e)=>this.dataInput(e)}
            />
            <div className="input_icon" onClick={this.dropDown}>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 5L4.5 1L8 5" strokeLinecap="round" />
              </svg>
            </div>
          </form>
          <div className="list-dropDown">
            {dropDownItem}
          </div>
        </div>
      );
    }
  }
}
