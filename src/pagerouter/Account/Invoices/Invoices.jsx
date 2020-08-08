
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import $ from 'jquery';
import DataTables from 'datatables.net-responsive-bs4';


const list = [
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' },
    { name: 'Invoice', order_id: "1354161", url: 'https://www.neopets.com' }
];


class Invoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $(document).ready(function () {
            //$('#Table').DataTable();
        });
    }


    render() {
        return <React.Fragment>
            <div className="account-card invoices">
                <h3>Invoices</h3>
                <table id="Table">
                    <thead>
                        <th></th>
                    </thead>
                </table>
            </div></React.Fragment>
    }
}

export default withRouter(Invoices);