import React, { useEffect } from "react";

import Logo from '../assets/img/imgTeste.svg'

import { Button } from './styles';

export default function ServerButton({
    selected,
    isHome,
    hasNotifications,
    mentions
}){
    return(
        <>
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            ClassName={selected ? 'active': ''}
        >
            {isHome && <img src={Logo} alt="imagem"/>}
        </Button>
        </>
    )
} 