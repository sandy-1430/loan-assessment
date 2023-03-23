import { useContext, useEffect, useState } from "react";
import { ContextLoan } from "../Context/AppContext";
import uuid from 'react-uuid';

export default function LoanOffer() {
    const { userInfo, appInfo, loanDetails, setLoanDetails } = useContext(ContextLoan);
    const [renderItems, setRenderItems] = useState(false);

    useEffect(() => {
        if (appInfo?.length) {
            let principal = appInfo[0].loan_amount;
            let loanData = loanDetails?.map((loan) => {
                const Interest = parseFloat(loan.interest_rate / 100 / 12);
                const Payments = parseFloat(loan.tenure * 12);
                const x = Math.pow(1 + Interest, Payments);
                const monthly = (principal * x * Interest) / (x - 1);
                const totalPayment = (monthly * Payments).toFixed(2);
                const totalInterset = (monthly * Payments - principal).toFixed(2);

                loan["monthly"] = monthly;
                loan["totalPayment"] = totalPayment;
                loan["totalInterset"] = totalInterset;

                return loan;
            })
            setLoanDetails(loanData);
            setRenderItems(renderItems ? false : true);
        }
    }, [appInfo])

    const sortLoan = (obj) => {
        if (obj) {
            let sortArr = loanDetails.sort((a, b) =>
                a[obj] > b[obj] ? 1 : -1,
            );
            console.log(sortArr);
            setLoanDetails(sortArr);
            setRenderItems(renderItems ? false : true);
        }
    }


    return (
        <div className="loanOffers">
            <div className="d-flex">
                <div className="loan-info">
                    <div className="loan_sort">
                        <select onChange={(e) => sortLoan(e.target.value)}>
                            <option value="">Sort By</option>
                            <option value="interest_rate">Interest By Sort</option>
                            <option value="totalPayment">Total Amt Sort</option>
                        </select>
                    </div>

                    <div className="loan-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bank Logo</th>
                                    <th>Bank Name</th>
                                    <th>Interest Rate</th>
                                    <th>Tenure</th>
                                    <th>Monthly Emi</th>
                                    <th>Total Interest</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loanDetails?.map((loan) => (
                                        <tr key={uuid()}>
                                            <td><img src={loan.bank_logo} /></td>
                                            <td>{loan.bank}</td>
                                            <td>{loan.interest_rate}</td>
                                            <td>{loan.tenure}</td>
                                            <td>{loan.monthly?.toFixed(2)}</td>
                                            <td>{loan.totalInterset}</td>
                                            <td>{loan.totalPayment}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="userInfo">
                    <div className="userDetails">
                        <h3>User Information</h3>

                        <div className="d-flex">
                            <p>Name : &nbsp;</p>
                            <p>{userInfo?.name}</p>
                        </div>
                        <div className="d-flex">
                            <p>Email : &nbsp; </p>
                            <p>{userInfo?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
