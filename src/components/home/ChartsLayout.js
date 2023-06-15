import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from "react-apexcharts";

const ChartsLayout = () => {

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    };

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ];

    const donutOptions = {};

    const donutSeries = [44, 55, 41, 17, 15];

    return (
        <Container className='mt-5'>
            <Row>
                <Col xs='12' lg='6'>
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                    />
                </Col>
                <Col xs='12' lg='6'>
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                    />
                </Col>
                <Col xs='12' lg='6'>
                    <Chart
                        options={donutOptions}
                        series={donutSeries}
                        type="donut"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default ChartsLayout;
