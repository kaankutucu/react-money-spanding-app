import React from 'react';
import {useState} from "react";

function Header({total,money}) {
    return (
        <>
        <div>
            {total > 0 && (
                <>
                    Harcayacak  {money-total} $ bakiyeniz kalmıştır.
                </>
                || (
                    <>
                        Harcamanız için {money} $ bakiyeniz bulunmaktadır.
                    </>
                )
            )}
        </div>
        </>
    );
}

export default Header;