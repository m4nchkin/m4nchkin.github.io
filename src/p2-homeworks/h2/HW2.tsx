import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = { _id: number, name: string, priority: FilterType } // need to fix any
export type FilterType = 'all' | AffairPriorityType

// type defaultAffairsPropsType = {
//     _id:number
//     name:string
//     priority:string
// }

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    // need to fix any
    if (filter === 'high') return affairs.filter((el) => el.priority === 'high')
    if (filter === 'middle') return affairs.filter((el) => el.priority === 'middle')
    if (filter === 'low') return affairs.filter((el) => el.priority === 'low')
    return affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    let result = affairs.filter(el => el._id !== _id)
    return result
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
