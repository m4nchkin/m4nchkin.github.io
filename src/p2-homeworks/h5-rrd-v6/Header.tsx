import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './pages/style.module.css'

type LinksPropsType = {
    collapsed: boolean
    onClick: () => void
}

function Header() {

    const [collapsed, setCollapsed] = useState(false)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }


    const Links = (props: LinksPropsType) => {
        return <div className={s.dropdown}>
            LINKS
            <div className={s.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR}> pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR}> junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}> junior-plus</NavLink>
            </div>
    </div>
    }

    return (

        <div>
            <Links collapsed={collapsed} onClick={onClickHandler}/>
        </div>
    )
}

export default Header
