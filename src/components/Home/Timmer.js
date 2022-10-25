import React from 'react'
import moment from 'moment';
import { Col, Row, Statistic } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 250 * 60 * 60 * 24 * 2 + 1000 * 16;
const Timmer = () => {
    const onFinish = () => {
        console.log('finished!');
    };


    return (
        <Row className=" bg-[#062c5e] rounded ">
            <Col className="  text-white py-2 px-5 tracking-[5px] text-lg ">
                <Countdown value={deadline} onFinish={onFinish} />
            </Col>



        </Row>
    )
}

export default Timmer