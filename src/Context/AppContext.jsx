import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextLoan = createContext();

const BaseUrl = "https://api.sfd.interview.ovckd.dev/v1";
const headersAuth = {
    headers: {
        Authorization: "1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b"
    }
}

export default function AppContext({ children }) {
    const [loanDetails, setLoanDetails] = useState();
    const [appInfo, setAppInfo] = useState();
    const [userInfo, setUserInfo] = useState();

    const getAppInfo = async () => {
        await axios.get(`${BaseUrl}/user/applications`, headersAuth)
            .then(res => {
                setAppInfo(res.data);
            })
    }

    const getLoanInfo = async () => {
        await axios.get(`${BaseUrl}/user/applications/1/offers`, headersAuth)
            .then((res) => {
                setLoanDetails(res.data);
            })
    }

    const getUserInfo = async () => {
        await axios.get(`${BaseUrl}/user `, headersAuth)
            .then((res) => {
                setUserInfo(res.data);
            })
    }

    useEffect(() => {
        getUserInfo();
        getAppInfo();
        getLoanInfo();
    }, [])


    return (
        <ContextLoan.Provider value={{ userInfo, appInfo, loanDetails }}>
            {children}
        </ContextLoan.Provider>
    )
}
