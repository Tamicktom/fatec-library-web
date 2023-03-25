//* Libraries imports
import { getAllByRole, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

//* Components imports
import Card from '../src/components/common/Card/Card';
import CpfInput from 'pnpm/components/common/Inputs/CpfInput';

describe('Verify if card exist', () => {
  it('Verify if card exist', () => {
    render(<Card />)

    const card = screen.getByRole("alert");

    expect(card).toBeTruthy();
  })
})

describe('Test the CPF input', () => {
  it(`Verify if theres isn't an alert input`, () => {
    render(<CpfInput
      setCpf={() => { }}
      setErrors={() => { }}
    />)

    let input: any;
    try {
      input = screen.getByRole("alert");
    } catch (error) {
      console.log(error)
    }

    expect(input).toBeFalsy();
  })
})