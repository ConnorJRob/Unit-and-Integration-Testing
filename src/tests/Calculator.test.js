import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should total 5 when 1 and 4 are added together', () => {
    //establish running-total variable to check later
    const runningTotal = container.find('#running-total');

    //use the .find enzyme function to locate the number 1 key and assign it to button1 
    const button1 = container.find('#number1');
    //use the .simulate method to simulate a click of the number1 button
    button1.simulate('click');

    //use the .find enzyme function to locate the + key and assign it to add_button
    const add_button = container.find('#operator_add');
    //use the .simulate method to simulate a click of the + button
    add_button.simulate('click');

    //use the .find enzyme function to locate the number 4 key and assign it to button4 
    const button4 = container.find('#number4');
    //use the .simulate method to simulate a click of the number4 button
    button4.simulate('click');

    //currently, 4 is the number last added but the calculator doesn't know what is going to happen next, the running total isn't adjusted
      //until another operator is clicked, so the = button is 'clicked' again which causes 4 to be added to the running total, equalling 5
    const equals_button = container.find('#operator-equals');
    equals_button.simulate('click');

    expect(runningTotal.text()).toEqual('5');
  })

  it('should total 3 when 4 is subtracted from 7', () => {
    //establish running-total variable to check later
    const runningTotal = container.find('#running-total');

    //use the .find enzyme function to locate the number 7 key and assign it to button7
    const button7 = container.find('#number7');
    //use the .simulate method to simulate a click of the number7 button
    button7.simulate('click');

    //use the .find enzyme function to locate the - key and assign it to subtract_button
    const subtract_button = container.find('#operator-subtract');
    //use the .simulate method to simulate a click of the - button
    subtract_button.simulate('click');
    
    //use the .find enzyme function to locate the number 4 key and assign it to button4 
    const button4 = container.find('#number4');
    //use the .simulate method to simulate a click of the number4 button
    button4.simulate('click');

    //currently, 4 is the number last added but calculator doesn't know what is going to happen next, the running total isn't adjusted
      //until another operator is clicked, so the = button is 'clicked' again which causes 4 to be subracted from the running total, equalling 3
    const equals_button = container.find('#operator-equals');
    equals_button.simulate('click');

    expect(runningTotal.text()).toEqual('3');
  })

  it('should total 15 when 3 is multiplied by 5', () => {
    //establish running-total variable to check later
    const runningTotal = container.find('#running-total');

    //use the .find enzyme function to locate the number3 key and assign it to button3
    const button3 = container.find('#number3');
    //use the .simulate method to simulate a click of the number3 button
    button3.simulate('click');

    //use the .find enzyme function to locate the x key and assign it to multiply_button
    const multiply_button = container.find('#operator-multiply');
    //use the .simulate method to simulate a click of the x button
    multiply_button.simulate('click');

    //use the .find enzyme function to locate the number 5 key and assign it to button5
    const button5 = container.find('#number5');
    //use the .simulate method to simulate a click of the number4 button
    button5.simulate('click');

    //currently, 5 is the chosen number and the calculator doesn't know what is going to happen next, the running total isn't adjusted
      //until another operator is clicked, so the = button is 'clicked' again which causes 5 to be multiplied by the running total, equalling 15
    const equals_button = container.find('#operator-equals');
    equals_button.simulate('click');

    expect(runningTotal.text()).toEqual('15');
})

  it('should total 3 when 21 is divided by 7', () => {
    //establish runningTotal variable to check later
    const runningTotal = container.find('#running-total');

    //use the .find enzyme function to locate the number2 key and assign it to button2
    const button2 = container.find('#number2');
    //use the .simulate method to simulate a click of the number2 button
    button2.simulate('click');

    //use the .find enzyme function to locate the number1 key and assign it to button1
    const button1 = container.find('#number1');
    //use the .simulate method to simulate a click of the number1 button - thus having typed in 21
    button1.simulate('click');

    //use the .find enzyme function to locate the / key and assign it to divide_button
    const divide_button = container.find('#operator-divide');
    //use the .simulate method to simulate a click of the / button
    divide_button.simulate('click');

    //use the .find enzyme function to locate the number7 key and assign it to button7
    const button7 = container.find('#number7');
    //use the .simulate method to simulate a click of the number7 button
    button7.simulate('click');

    //currently, 7 is the chosen number and the calculator doesn't know what is going to happen next, the running total isn't adjusted
      //until another operator is clicked, so the = button is 'clicked' again which causes the running total to be divided by 7, equalling 3
    const equals_button = container.find('#operator-equals');
    equals_button.simulate('click');

    expect(runningTotal.text()).toEqual('3');
})

  it('should concantenate multiple number button clicks', () => {
    //establish runningTotal variable to check later
    const runningTotal = container.find('#running-total');

    //use the .find enzyme function to locate the number1 key and assign it to button1
    const button1 = container.find('#number1');
    //use the .simulate method to simulate a click of the number1 button
    button1.simulate('click');

    //use the .find enzyme function to locate the number2 key and assign it to button2
    const button2 = container.find('#number2');
    //use the .simulate method to simulate a click of the number2 button - thus having typed in 12 so far
    button2.simulate('click');

    //use the .find enzyme function to locate the number3 key and assign it to button3
    const button3 = container.find('#number3');
    //use the .simulate method to simulate a click of the number3 button - thus having typed in 123 so far
    button3.simulate('click');

    const equals_button = container.find('#operator-equals');
    equals_button.simulate('click');

    expect(runningTotal.text()).toEqual('123');
})
 
    it('should chain multiple operators together', () => {
      //establish runningTotal variable to check later
      const runningTotal = container.find('#running-total');

      //use the .find enzyme function to locate the number1 key and assign it to button1
      const button1 = container.find('#number1');
      //use the .simulate method to simulate a click of the number1 button
      button1.simulate('click');

      //use the .find enzyme function to locate the + key and assign it to add_button
      const add_button = container.find('#operator_add');
      //use the .simulate method to simulate a click of the + button
      add_button.simulate('click');

      //use the .find enzyme function to locate the number2 key and assign it to button2
      const button2 = container.find('#number2');
      //use the .simulate method to simulate a click of the number2 button, our running total should now be 3
      button2.simulate('click');

      //use the .find enzyme function to locate the - key and assign it to subtract_button
      const subtract_button = container.find('#operator-subtract');
      //use the .simulate method to simulate a click of the - button
      subtract_button.simulate('click');

      //use the .simulate method to simulate a click of the number1 button (3-1 = 2, which is our new running total)
      button1.simulate('click');

      //use the .find enzyme function to locate the x key and assign it to multiply_button
      const multiply_button = container.find('#operator-multiply');
      //use the .simulate method to simulate a click of the x button
      multiply_button.simulate('click');

      //use the .find enzyme function to locate the number5 key and assign it to button5
      const button5 = container.find('#number5');
      //use the .simulate method to simulate a click of the number5 button - thus multplying the running total of 2 by 5 equalling 10
      button5.simulate('click');

      //use the .find enzyme function to locate the / key and assign it to divide_button
      const divide_button = container.find('#operator-divide');
      //use the .simulate method to simulate a click of the / button
      divide_button.simulate('click');

      //use the .simulate method to simulate a click of the number2 button (10 / 2 = 5, which is our new running total)
      button2.simulate('click');

      const equals_button = container.find('#operator-equals');
      equals_button.simulate('click');
      expect(runningTotal.text()).toEqual('5');
  })

  it('clear the running total without affecting the calculation', () => {
    //establish runningTotal variable to check later
    const runningTotal = container.find('#running-total');

    //use the .find enzyme function to locate the number2 key and assign it to button9
    const button9 = container.find('#number9');
    //use the .simulate method to simulate a click of the number9 button
    button9.simulate('click');

    //use the .find enzyme function to locate the + key and assign it to add_button
    const add_button = container.find('#operator_add');
    //use the .simulate method to simulate a click of the + button
    add_button.simulate('click');

    //use the .find enzyme function to locate the number8 key and assign it to button8
    const button8 = container.find('#number8');
    //use the .simulate method to simulate a click of the number8 button
    button8.simulate('click');

    //use the .find enzyme function to locate the - key and assign it to subtract_button
    const subtract_button = container.find('#operator-subtract');
    //use the .simulate method to simulate a click of the - button
    subtract_button.simulate('click');

    //use the .find enzyme function to locate the number6 key and assign it to button6
    const button6 = container.find('#number6');
    //use the .simulate method to simulate a click of the number6 button
    button6.simulate('click');

    //use the .find enzyme function to locate the / key and assign it to clear_button
    const clear_button = container.find('#clear');
    //use the .simulate method to simulate a click of the / button, the previous number and operators are 'forgotten' so we're back to 9+8 with a running total of 17
    clear_button.simulate('click');

    //use the .simulate method to simulate a click of the - button which will be followed by the number the user 'meant' to select
    subtract_button.simulate('click');

    //use the .find enzyme function to locate the number6 key and assign it to button7
    const button7 = container.find('#number7');
    //use the .simulate method to simulate a click of the number6 button
    button7.simulate('click');

    //click the equals button, subtracting 7 from 10 and equalling 10
    const equals_button = container.find('#operator-equals');
    equals_button.simulate('click');

    expect(runningTotal.text()).toEqual('10');
})

})

