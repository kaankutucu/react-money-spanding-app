import React from 'react';
import {useState} from "react";

function Header({money}) {
    return (
        <div>Harcamanız için {money} $ bakiyeniz bulunmaktadır.</div>
    );
}

export default Header;