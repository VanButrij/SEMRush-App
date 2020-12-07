import React from 'react'
import { setCost, setCont, setPeriod, setPerc, setDep, saveData, removeData } from '../Store/reducer'
import { connect } from 'react-redux'

const Inputs = (props) => {
    

    const onCostChange = (e) => {
        props.setCost(e.currentTarget.value)
    }
    const onContChange = (e) => {
        props.setCont(e.currentTarget.value)
    }
    const onPeriodChange = (e) => {
        props.setPeriod(e.currentTarget.value)
    }
    const onPercChange = (e) => {
        props.setPerc(e.currentTarget.value)
    }

    const saveData = () => {
        props.saveData()
    }

    const removeData = () => {
        props.removeData()
    }

    const onButtonClick = (e) => {
        props.setDep(e.target.value)
    }
    return (
        <div className='container inputs-container'>
            <div className="form-group">
                <label>Стоимость недвижимости</label>
                <input value={props.cost} min="1" max="10" type="number" onChange={onCostChange} className="form-control"   placeholder="Введите стоимость"/>
            </div>
            <div className="form-group">
                <label>Первоначальный взнос</label>
                <input value={props.cont} min="1" max="10" type="number" onChange={onContChange} readOnly={props.dep || false} className="form-control"   placeholder="Введите размер взноса"/>
                <div className="pt-2 buts-container">
                    <button type="button" onClick={onButtonClick} value='10' className="btn btn-primary btn-sm">10%</button>
                    <button type="button" onClick={onButtonClick} value='15' className="btn btn-primary btn-sm">15%</button>
                    <button type="button" onClick={onButtonClick} value='20' className="btn btn-primary btn-sm">20%</button>
                    <button type="button" onClick={onButtonClick} value='25' className="btn btn-primary btn-sm">25%</button>
                    <button type="button" onClick={onButtonClick} value='30' className="btn btn-primary btn-sm">30%</button>
                </div>
            </div>
            <div className="form-group">
                <label>Срок кредита</label>
                <input value={props.period} onChange={onPeriodChange} min="1" max="10" type="number" className="form-control"   placeholder="Введите срок кредита"/>
            </div>
            <div className="form-group">
                <label>Процентная ставка</label>
                <input value={props.perc} onChange={onPercChange} min="1" max="10" type="number" className="form-control"   placeholder="Введите процентную ставку"/>
            </div>
            <div className="mng-buts-container">
                <button type="button" onClick={saveData} className="btn btn-success ">Save</button>
                <button type="button" onClick={removeData} className="btn btn-danger">Clear</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cost: state.cost,
        cont: state.cont,
        period: state.period,
        perc: state.perc,
        dep: state.dep,
    }
}

export default connect (mapStateToProps, { setCost, setCont, setPeriod, setPerc, setDep, saveData, removeData })(Inputs);