import reducer, { setCost, setCont, initialState, setPeriod, setPerc, setDep } from './reducer'

it ('cost should be updated', () => {
    let newCost = 10000000
    let action = setCost(newCost)
    let newState = reducer(initialState, action)

    expect (newState.cost).toBe(newCost)
}) 

it ('cont should be updated', () => {
    let newCont = 3000000
    let action = setCont(newCont)
    let newState = reducer(initialState, action)

    expect (newState.cont).toBe(newCont)
}) 

it ('period should be updated', () => {
    let newPeriod = 10
    let action = setPeriod(newPeriod)
    let newState = reducer(initialState, action)

    expect (newState.period).toBe(newPeriod)
}) 

it ('perc should be updated', () => {
    let newPerc = 10
    let action = setPerc(newPerc)
    let newState = reducer(initialState, action)

    expect (newState.perc).toBe(newPerc)
}) 

it ('cont should be updated correctly in dependence of dep value', () => {
    let newCost = 10000000
    let newCont = 5000000
    let newDep = 20
    let action = setCost(newCost)
    let newState = reducer(initialState, action)
    action = setCont(newCont)
    newState = reducer(newState, action)
    action = setDep(newDep)
    newState = reducer(newState, action)

    expect (newState.cont).toBe(2000000)
}) 

it ('dep should be updated correctly', () => {
    let newCost = 10000000
    let newCont = 5000000
    let newDep = 10
    let action = setCost(newCost)
    let newState = reducer(initialState, action)
    action = setCont(newCont)
    newState = reducer(newState, action)
    action = setDep(newDep)
    newState = reducer(newState, action)
    newState = reducer(newState, action)

    expect (newState.dep).toBe(0)
}) 
