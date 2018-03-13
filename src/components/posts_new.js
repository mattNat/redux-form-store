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
  renderTitleField(field) {
    return (
      <div>
          <input
            type='text'
            {...field.input}
          />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          name='title'
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

// wire up like connect helper
export default reduxForm({
  // name of the form
  form: 'PostsNewForm'
})(PostsNew);