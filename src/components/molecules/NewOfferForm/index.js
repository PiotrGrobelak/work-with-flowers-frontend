import React from 'react';
import styled from 'styled-components';
import { Formik, ErrorMessage, Field, FieldArray } from 'formik';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import Message from 'components/molecules/Message';

const StyledOfferForm = styled.form`
  height: 700px;
  width: 800px;
  border: 1px solid black;
`;

const StyledFeildForm = styled.p``;

const NewOfferForm = () => (
  <Formik
    initialValues={{
      title: '',
      companyName: '',
      city: '',
      about: '',
      description: '',
      friends: ['jared', 'ian', 'brent'],
    }}
    onSubmit={(values) => console.log(values)}
  >
    {({ values, handleChange, handleBlur, handleSubmit }) => {
      return (
        <StyledOfferForm onSubmit={handleSubmit}>
          <StyledFeildForm>
            <Label htmlFor="title">Nazwa Oferty</Label>
            <Input
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="title">{(msg) => <Message message={msg} />}</ErrorMessage>
          </StyledFeildForm>
          <StyledFeildForm>
            <Label htmlFor="companyName">Twoje Firma</Label>
            <Input
              id="companyName"
              type="text"
              name="companyName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="comapnyName">{(msg) => <Message message={msg} />}</ErrorMessage>
          </StyledFeildForm>
          <StyledFeildForm>
            <Label htmlFor="city">Twoje Firma</Label>
            <Input id="city" type="text" name="city" onChange={handleChange} onBlur={handleBlur} />
            <ErrorMessage name="city">{(msg) => <Message message={msg} />}</ErrorMessage>
          </StyledFeildForm>
          <StyledFeildForm>
            <Label htmlFor="about">Napisz kilka słów o twojej firmie</Label>
            <Input
              id="about"
              type="text"
              name="about"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="about">{(msg) => <Message message={msg} />}</ErrorMessage>
          </StyledFeildForm>
          <StyledFeildForm>
            <Label htmlFor="description">Opis stanowiska</Label>
            <Input
              id="description"
              type="text"
              name="description"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="description">{(msg) => <Message message={msg} />}</ErrorMessage>
          </StyledFeildForm>
          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index}>
                      <Field
                        name={`friends.${index}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <button type="button" onClick={() => arrayHelpers.remove(index)}>
                        -
                      </button>
                      <button type="button" onClick={() => arrayHelpers.insert(index, '')}>
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add a friend
                  </button>
                )}
              </div>
            )}
          />
          <Button type="submit">Submit</Button>
        </StyledOfferForm>
      );
    }}
  </Formik>
);

export default NewOfferForm;
