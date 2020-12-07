
export let initialState = {
    cost: 0,
    cont: 0,
    period: 0,
    perc: 0,
    dep: 0,
  };

const SET_COST = 'SET_COST';
const SET_CONT = 'SET_CONT';
const SET_PERIOD = 'SET_PERIOD';
const SET_PERC = 'SET_PERC';
const SET_DEP = 'SET_DEP';
const SAVE_DATA = 'SAVE_DATA';
const REMOVE_DATA = 'REMOVE_DATA'

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case(SAVE_DATA):{
            localStorage.setItem('state', JSON.stringify(state))
            return state }
        case(REMOVE_DATA):{
            localStorage.removeItem('state')
            let stateCopy = {...state, cost: 0, cont: 0, period: 0, perc: 0}
            return stateCopy }            
        case(SET_COST):{
            let stateCopy = {...state, cost: action.data};
            if (stateCopy.dep) {
                stateCopy.cont = Math.round(stateCopy.cost*stateCopy.dep/100)
            }
            return stateCopy}
        case(SET_CONT):{
            let stateCopy = {...state, cont: action.data};
            return stateCopy}
        case(SET_PERIOD):{
            let stateCopy = {...state, period: action.data};
            return stateCopy}
        case(SET_PERC):{
            let stateCopy = {...state, perc: action.data};
            return stateCopy}
        case(SET_DEP):{
                let stateCopy = {...state};
                if (action.data !== stateCopy.dep) {
                    stateCopy.dep = action.data
                    stateCopy.cont = Math.round(stateCopy.cost*stateCopy.dep/100)
                } else {
                    stateCopy.dep = 0
                }
                return stateCopy}
        default:
            if (localStorage['state']) {
                return JSON.parse(localStorage.getItem('state'))
            } else {
            return state; }
    }
}

export const setCost = (data) => ({ type: SET_COST, data});
export const setCont = (data) => ({ type: SET_CONT, data});
export const setPeriod = (data) => ({ type: SET_PERIOD, data});
export const setPerc = (data) => ({ type: SET_PERC, data});
export const setDep = (data) => ({ type: SET_DEP, data});
export const saveData = () => ({ type: SAVE_DATA});
export const removeData = () => ({ type: REMOVE_DATA});




export default reducer;