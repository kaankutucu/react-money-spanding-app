import React from 'react';
import {useState} from "react";
import {moneyFormat} from "../helper";

function Header({total,money}) {
    return (
        <>

            {total > 0 && money-total !== 0 && (
                <div className="header">Harcayacak <span> {moneyFormat(money-total) } $ </span>paranız kaldı</div>
            )}
            {total === 0 && (
                <div className="header">Harcamak için <span> {moneyFormat(money)} $ </span> paranız var</div>
            )}

            {
                money- total === 0 && (
                    <div className="header">Harcayacak paranız kalmadı !!!!</div>
                )
            }
        </>
    );
}

export default Header;