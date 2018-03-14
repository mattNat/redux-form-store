import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // field.input
  /*
  onChange={field.input.onChange}
  onFocus={field.input.onFocus}
  onBlur={field.input.onBlur}
  {...field.input}
  */
  renderField(field) {
    return (
      <div className='form-group'>
          <label>{field.label}</label>
          <input
            className='form-control'
            type='text'
            {...field.input}
          />
      </div>
    )
  }

  // no paren, pass in ref to a function so field can re-render multiple times
  // "label" can be any property name
  render() {
    return (
      <form>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> {title: 'asdf', categories: '', content: 'asdf'}
  const errors = {};

  // validate the inputs from 'values'
  if (values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  }
  if (!values.title) {
    error.title = 'Enter a title';
  }
  if (!values.categories) {
    error.categories = 'Enter some categories';
  }
  if (!values.content) {
    error.content = 'Enter some content please';
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  return errors;
}

// wire up like connect helper
export default reduxForm({
  validate,
  // name of the form
  form: 'PostsNewForm'
})(PostsNew);