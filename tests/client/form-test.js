/* eslint-disable no-unused-expressions*/
import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Form from '../../public/components/form';

const form = TestUtils.renderIntoDocument(<Form />);

describe('Form Tests', () => {
  describe('First test to make sure system works', () => {
    it('should return 1 + 1 = 2', () => {
      const test = 1 + 1;
      expect(test).to.equal(2);
    });
  });

  describe('Testing the form component', () => {
    it('should render the form component', () => {
      const formElement = TestUtils.scryRenderedDOMComponentsWithClass(
        form, 'form'
      );

      expect(formElement).to.not.be.empty;
    });

    it('should have two input fields', () => {
      const inputs = TestUtils.scryRenderedDOMComponentsWithTag(
        form, 'input'
      );
      expect(inputs).to.have.length.of.at.least(2);
    });

    it('should have task name input and update state when input is typed', () => {
      const inputs = TestUtils.scryRenderedDOMComponentsWithTag(
        form, 'input'
      );
      let nameInput;
      for (const input of inputs) {
        if (input.getAttribute('id') === 'task-name') {
          nameInput = input;
          break;
        }
      }
      expect(nameInput).to.exist;
      // simulate typing in the input field and check if changes state
      const taskName = 'My Task Name';
      TestUtils.Simulate.change(nameInput, { target: { value: taskName } });
      expect(form.state.taskName).to.equal(taskName);
    });

    it('should have task date input and update state when input is typed', () => {
      const inputs = TestUtils.scryRenderedDOMComponentsWithTag(
        form, 'input'
      );
      let dateInput;
      for (const input of inputs) {
        if (input.getAttribute('id') === 'task-date') {
          dateInput = input;
          break;
        }
      }
      expect(dateInput).to.exist;
      // simulate typing in the input field and check if changes state
      const taskDate = '"2016-07-09"';
      TestUtils.Simulate.change(dateInput, { target: { value: taskDate } });
      expect(form.state.taskDate).to.equal(taskDate);
    });
  });
});
