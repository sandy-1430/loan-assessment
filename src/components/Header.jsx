import { useContext } from "react";
import { ContextLoan } from "../Context/AppContext";

export default function Header() {
    const { userInfo } = useContext(ContextLoan);
    return (
        <header>
            <div className='d-flex just-btn align-center'>
                <div className="logo">
                    Loan EMI
                </div>
                <div className='profile d-flex align-center'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M95 306 c-101 -44 -125 -178 -46 -257 65 -65 157 -65 222 0 124 124
-15 327 -176 257z m103 -48 c15 -15 15 -61 0 -76 -15 -15 -61 -15 -76 0 -15
15 -15 61 0 76 7 7 24 12 38 12 14 0 31 -5 38 -12z m23 -128 c11 -6 19 -21 19
-36 0 -19 -8 -28 -37 -41 -33 -13 -43 -14 -78 -2 -46 16 -60 53 -29 76 21 16
97 17 125 3z"/>
                        </g>
                    </svg>
                    <span>{userInfo?.name}</span>
                </div>
            </div>
        </header>
    )
}
