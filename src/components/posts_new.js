import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  // field.input
  /*
  onChange={field.input.onChange}
  onFocus={field.input.onFocus}
  onBlur={field.input.onBlur}
  {...field.input}
  */
  renderField(field) {
    // es6 destructure
    const { meta } = field;

    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {/* add ternary operation to not display error at pristine condition */}
        <div className='text-help'>
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  // no paren, pass in ref to a function so field can re-render multiple times
  // "label" can be any property name
  // name property communicates with validation errors below
  // onSubmit needs reduc form and code we need to write
  onSubmit(values) {
    // this === component
    // console.log(values);

    // must match one of the routes defined in app
    // only attempt nav only after post has been created
    // callback function created, account for in reducer
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    // passed to comp on behalf of redux form
    const { handleSubmit } = this.props;

    // redux (state and validation) cannot save/make post request
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> {title: 'asdf', categories: '', content: 'asdf'}
  const errors = {};

  // validate the inputs from 'values'
  // if (values.title.length < 3) {
  //   errors.title = 'Title must be at least 3 characters';
  // }
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
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
})(
  connect(null, { createPost })(PostsNew)
);