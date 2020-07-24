import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required(),
    description: Yup.string()
        .required(),
    videoId: Yup.string()
        .required()
});

const renderInput = (name, label, values, errors, touched, handleChange, handleBlur) => {
    return (
        <Form.Field
            id={name}
            control={Input}
            label={label}
            placeholder={label}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && errors[name] && {
                content: errors[name],
            }}
        />
    )
}

const StreamForm = ({ onSubmit, initialValues }) => {

    const { title, description, videoId } = initialValues;

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            title: title || '',
            description: description || '',
            videoId: videoId || ''
        },
        validationSchema: ValidationSchema,
        onSubmit: onSubmit
    });

    return (
        <Form noValidate onSubmit={handleSubmit}>
            {renderInput("title", "Enter Title", values, errors, touched, handleChange, handleBlur)}
            {renderInput("description", "Enter Description", values, errors, touched, handleChange, handleBlur)}
            {renderInput("videoId", "Enter YT video ID", values, errors, touched, handleChange, handleBlur)}
            <Form.Field
                control={Button}
                content='Submit'
                disabled={isSubmitting}
            />
        </Form>
    );
}

export default StreamForm;
