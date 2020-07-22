import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from "react-bootstrap";

const ValidationSchema = Yup.object().shape({
    term: Yup.string()
        .required("Term field is required")
});

const FormikSearchBar = ({ onSubmit }) => {
    const onFormSubmit = (values, { setSubmitting }) => {
        onSubmit(values.term, setSubmitting);
    };

    return (
        <Formik
            initialValues={{ term: '' }}
            onSubmit={onFormSubmit}
            validationSchema={ValidationSchema}
        >
            {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => {
                return (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Image Search Formik</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter term"
                                name={"term"}
                                value={values.term}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.term && !errors.term}
                                isInvalid={!!errors.term}
                            />
                            <Form.Text className="text-muted">
                                Search images using Formik
                            </Form.Text>
                        </Form.Group>
                        <Form.Control.Feedback type="invalid">
                            {errors.term}
                        </Form.Control.Feedback>
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    )
};

export default FormikSearchBar;
