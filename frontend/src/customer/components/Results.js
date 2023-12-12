import React from 'react';
import { Table } from 'react-bootstrap';

const Results = () => {
    return (
        <div>
            <h2>Results</h2>
            {/* Add your result content here, e.g., a table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        {/* Add more rows as needed */}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Results;
