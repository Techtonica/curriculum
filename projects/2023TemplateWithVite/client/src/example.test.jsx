
import React from 'react';
import {describe, expect, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import Student from './components/Student';
import MyForm from './components/Form';

test("Show full name of a student", () =>{
  const testName = {firstname: "Michelle", lastname: "Glausser"};
  const studentElement = render(<Student student={testName} />)
  const studentFullName = studentElement.getByText("Michelle Glausser");
  expect(studentFullName).toBeDefined();
})

test("Show the form is rendering", () =>{
  const formElement = render(<MyForm />);
  const signUpForm = formElement.getByTestId('eventForm');
  expect(signUpForm).toBeDefined();
})

/* 
describe('event signup form', () => {
  it('renders a form', () => {
    render(<EventSignUpForm />);

    const signUpForm = screen.getByTestId('event-form');
    expect(signUpForm).toBeInTheDocument();
  });
});


test('test that MyNavBar renders', () => {
//     const navbarElement = render(<MyNavBar/>);
//     const navbarId = navbarElement.getByTestId('navbar');
//     expect(navbarId).toBeDefined();
//   });



*/