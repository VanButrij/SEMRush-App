import React from 'react'
import { connect } from 'react-redux'

const Outputs = (props) => {
    let numberWithSpaces = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let body = props.cost - props.cont
    let c = props.perc/1200
    let payment = Math.round(body*(c+ c/((1 + c)**(props.period*12) - 1)))
    let income = Math.round(5 * payment/3)
    let overpay = Math.round(payment*props.period*12-props.cost+Number(props.cont))

    

    return (
        <div className='container outputs-container'>
            <div>
                <small>Ежемесячный платёж</small>
                <b>{payment ? numberWithSpaces(payment) : 0}</b>
            </div>
            <div>
                <small>Необходимый доход</small>
                <b>{income ? numberWithSpaces(income) : 0}</b>
            </div>
            <div>
                <small>Переплата</small>
                <b>{overpay ? numberWithSpaces(overpay) : 0}</b>
            </div>
            <div>
                <small>Тело кредита</small>
                <b>{body ? numberWithSpaces(body) : 0}</b>
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

export default connect (mapStateToProps, { })(Outputs);