import React, { useEffect } from "react";
import "../styles.css";
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

function ReservationPage() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      number: "",
      date: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      number: Yup.number("Must be a number type").required(
        "Number is required"
      ),
      date: Yup.date("Must be a date").required("Date is required"),
      comment: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      submit(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (response) {
      if (Math.random() > 0.5) {
        onOpen(
          "success",
          `Thank you, ${formik.values.firstName}! Your message has been sent.`
        );
        formik.resetForm(); // Reset form on success
      } else {
        onOpen(
          "error",
          response.message || "Something went wrong. Please try again."
        );
      }
      response.type = null;
    }
  }, [response]);

  return (
    <ChakraProvider>
      <div className="reservationpage">
        <div className="form_card">
          <div className="form_container">
          <VStack w={["100vw", "50vw"]} p={32} alignItems={"flex-start"}>              <Heading as="h1">Make Reservation</Heading>
              <Box p={6} rounded="md" w="100%">
                <form onSubmit={formik.handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl
                      isInvalid={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    >
                      <FormLabel
                        htmlFor="firstName"
                        fontSize={["smaller", "md", "lg"]}
                        mt={[2, 4]}
                      >
                        First Name
                      </FormLabel>
                      <Input
                        id="firstName"
                        name="firstName"
                        {...formik.getFieldProps("firstName")}
                      />
                      <FormErrorMessage>
                        {formik.errors.firstName}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={formik.touched.number && formik.errors.number}
                    >
                      <FormLabel
                        htmlFor="number"
                        fontSize={["sm", "md", "lg"]}
                        mt={[2, 4]}
                      >
                        Phone Number
                      </FormLabel>
                      <Input
                        id="number"
                        name="number"
                        {...formik.getFieldProps("number")}
                      />
                      <FormErrorMessage>
                        {formik.errors.number}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={formik.touched.date && formik.errors.date}
                    >
                      <FormLabel
                        htmlFor="date"
                        fontSize={["sm", "md", "lg"]}
                        mt={[2, 4]}
                      >
                        Date
                      </FormLabel>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        {...formik.getFieldProps("date")}
                      />
                      <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={
                        formik.touched.comment && formik.errors.comment
                      }
                    >
                      <FormLabel
                        htmlFor="comment"
                        fontSize={["sm", "md", "lg"]}
                        mt={[2, 4]}
                      >
                        Note
                      </FormLabel>
                      <Input
                        id="comment"
                        name="comment"
                        {...formik.getFieldProps("comment")}
                      />
                      <FormErrorMessage>
                        {formik.errors.comment}
                      </FormErrorMessage>
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="purple"
                      width="full"
                      isLoading={isLoading}
                    >
                      Submit
                    </Button>
                  </VStack>
                </form>
              </Box>
            </VStack>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
export default ReservationPage;
