import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Form } from "react-bootstrap";

function FormComponent() {
  const [formState, setFormState] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("The email field is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or above")
        .required("The password field is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // setFormState(values);
    },
  });
  return (
    <>
      <Container className="mt-24 p-0">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <Form.Text className="text-danger">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger d-flex align-items-center error">
                  <img src="./Dev_Challenge/btn.svg" />
                  {formik.errors.email}
                </div>
              ) : null}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <Form.Text className="text-danger">
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger error">
                  <img src="./Dev_Challenge/btn.svg" />
                  {formik.errors.password}
                </div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            onClick={(values) => setFormState(values)}
            // disabled={formState}
          >
            Sign In
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default FormComponent;
