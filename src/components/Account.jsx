import React from 'react'

function Account() {

    return (

        <div className="d-flex justify-content-center">
            <div className="card p-3 mb-3">
                <h4 className="text-center">YOUR BALANCE</h4>
                <h1 className="text-center">$260.00</h1>
                <div className="d-flex justify-content-around">
                    <div className='mx-4'>
                        <h4 className="text-success">INCOME</h4>
                        <p className="text-success">$500.00</p>
                    </div>
                    <div className='mx-4'>
                        <h4 className="text-danger ">EXPENSE</h4>
                        <p className="text-danger">$-240.00</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Account
