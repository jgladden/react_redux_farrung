import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitAddPortfolioItem, submitEditPortfolioItem } from '../actions';
import AdminPortfolioForm from '../components/AdminPortfolioForm/';
import formUtil from '../utils/formUtil';
import { uniqueId } from '../utils';

class AdminPortfolioFormContainer extends Component {
    
  constructor(props) {
    super(props);
    this.formFields = {
      id: {
        tests: []
      },
      type: {
        tests: ['^(?!\s*$|type).+']
      },
      title: {
        tests: ['(.{3,})']
      },
      client: {
        tests: ['^(\s*|(.{3,}))']
      },
      description: {
        tests: ['(.{15,})'] 
      },
      link: {
        tests: ['^(\s*|https?:.*)$'] 
      },
      display: {
        tests: []
      },
      rating: {
        tests: ['^([0-9]+)$']
      },
      day: {
        tests: ['^([0-9]+)$']
      },
      month: {
        tests: ['^([0-9]+)$']
      },
      year: {
        tests: ['^([0-9]+)$']
      },
      imagename: {
        tests: ['(.{2,})']
      },
      slidenum: {
        tests: ['^([0-9]+)$']
      },
      date: {
        test: []
      }
    };
    this.editMode = props.formInitValues ? true : false;
    this.state = {
      fields: formUtil.initFields(this.formFields, props.formInitValues)
    };
  }

  handleChange = e => {
    let fields = formUtil.getUpdatedFields(e, {...this.state.fields});
    this.setState({ fields });
  }

  handleSubmit = e => {
    e.preventDefault();
    let validateForm = formUtil.validateForm(
      {...this.state.fields}
    );

    if(this.editMode) {
      if(validateForm.isValidForm)
        this.props.submitEditPortfolioItem(validateForm.fieldValues);
      this.setState({fields: validateForm.fields});
    }

    if(!this.editMode) {
      if(validateForm.isValidForm) {
        validateForm.fieldValues.id = uniqueId();
        this.props.submitAddPortfolioItem(validateForm.fieldValues);
        this.setState({
          fields: formUtil.initFields(this.formFields)
        });
      } else {
        this.setState({fields: validateForm.fields});
      }
    }
  }

  render() {
    return (
      <AdminPortfolioForm
        fields={this.state.fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        portfolio={this.props.portfolio}
      />
    );
  }
}

AdminPortfolioFormContainer.propTypes = {
  formInitValues: PropTypes.object,
  portfolio: PropTypes.object.isRequired,
  submitAddPortfolioItem: PropTypes.func.isRequired,
  submitEditPortfolioItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps, 
  {
    submitAddPortfolioItem,
    submitEditPortfolioItem
  }
)(AdminPortfolioFormContainer);
