import React from 'react';
import '../widget/widgetLg.css';

export const WidgetLarge = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>
            {type}</button>;
    };

    return (
        <div className="table-responsive">
            <div className="container py-2">
                <span className="h5 fw-bold p-2">Latest transactions</span>
            </div>
            <table className="table caption-top">
                <tr className="">
                    <th className="col">Customer</th>
                    <th className="col">Date</th>
                    <th className="col">Amount</th>
                    <th className="col">Status</th>
                </tr>
                <tr className="">
                    <td className="d-flex align-item-center">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            width="40px"
                            height="40px"
                            className="rounded-circle me-2"
                        />
                        <span className="text-center">Susan Carol</span>
                    </td>
                    <td className="fw-normal">2 Jun 2021</td>
                    <td className="fw-normal">$122.00</td>
                    <td className="fw-normal">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="">
                    <td className="d-flex align-item-center">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            width="40px"
                            height="40px"
                            className="rounded-circle me-2"
                        />
                        <span className="text-center">Allan Jerry</span>
                    </td>
                    <td className="fw-normal">2 Jun 2021</td>
                    <td className="fw-normal">$122.00</td>
                    <td className="fw-normal">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="">
                    <td className="d-flex align-item-center">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            width="40px"
                            height="40px"
                            className="rounded-circle me-2"
                        />
                        <span className="text-center text-md-center">Susan Carol</span>
                    </td>
                    <td className="fw-normal">2 Jun 2021</td>
                    <td className="fw-normal">$122.00</td>
                    <td className="fw-normal">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="">
                    <td className="d-flex align-item-center">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            width="40px"
                            height="40px"
                            className="rounded-circle me-2"
                        />
                        <span className="text-center">Susan Carol</span>
                    </td>
                    <td className="fw-normal">2 Jun 2021</td>
                    <td className="fw-normal">$122.00</td>
                    <td className="fw-normal">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="">
                    <td className="d-flex align-item-center">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            width="40px"
                            height="40px"
                            className="rounded-circle me-2"
                        />
                        <span className="text-center">Allan Jerry</span>
                    </td>
                    <td className="fw-normal">2 Jun 2021</td>
                    <td className="fw-normal">$122.00</td>
                    <td className="fw-normal">
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
