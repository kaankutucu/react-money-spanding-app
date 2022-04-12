import React from 'react';
import {useState} from "react";

function Header({total,money}) {
    return (
        <>
        <div>
            {total > 0 && money-total !== 0 && (
                <div>Harcayacak {money-total} $ paranız kaldı</div>
            )}
            {total === 0 && (
                <div>Harcamak için {money} $ paranız var</div>
            )}

            {
                money- total === 0 && (
                    <div>Harcayacak paranız kalmadı !!!!</div>
                )
            }

        </div>
        </>
    );
}

export default Header;