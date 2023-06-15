import React from 'react';
import { Form, Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';

import TextField from '../../shared/TextField';

const AnalysisForm = () => {

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (values) => {
    }

    return (
        <Container className='mt-5'>
            <Formik
                initialValues={validValues}
                validationSchema={errorSchema}
                onSubmit={loginHandler}
            >
                {(formik) => (
                    <React.Fragment>
                        <div className='main-form'>
                            <Form>
                                <Row>
                                    <Col xs='12' lg='6'>
                                        <TextField label='First Nation' name='firstNation' type='text' />
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <TextField label='Province' name='province' type='text' />
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <TextField label='Year(s)' name='province' type='text' />
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <TextField label='Revenue Catalog' name='province' type='text' />
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <TextField label='Expenditure' name='province' type='text' />
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <TextField label='Expenditure Catalog' name='province' type='text' />
                                    </Col>
                                </Row>
                                <div className='text-center'>
                                    <Button type='submit' className='px-5 btn custom-btn'>
                                        COMPARE
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </React.Fragment>
                )}
            </Formik>
        </Container>
    )
}

export default AnalysisForm;