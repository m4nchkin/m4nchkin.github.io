import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const buttonColorSet = (filter:FilterType) => {
        return s.button + (props.filter === filter ? '' + s.buttonOpacity: '')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={buttonColorSet('all')}>All</button>
            <button onClick={setHigh} className={buttonColorSet('high')}>High</button>
            <button onClick={setMiddle} className={buttonColorSet('middle')}>Middle</button>
            <button onClick={setLow} className={buttonColorSet('low')}>Low</button>
        </div>
    )
}

export default Affairs
