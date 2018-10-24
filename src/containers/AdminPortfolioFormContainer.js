import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitAddPortfolioItem, submitEditPortfolioItem } from '../actions';
import AdminPortfolioForm from '../components/AdminPortfolioForm/';
import formUtil from '../utils/formUtil';

class AdminPortfolioFormContainer extends Component {
    
  constructor(props) {
    super(props);
    this.formFields = {
      type: {
        tests: ['^(?!\s*$|type).+']
      },
      title: {
        tests: ['(.{5,})']
      },
      client: {
        tests: ['(.{5,})']
      },
      description: {
        tests: ['(.{15,})'] 
      },
      link: {
        tests: ['^(\s*|https?:\/\/www\..*)$'] 
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
      image1: {
        tests: ['^(\s*|^[\/:\.a-zA-Z0-9]+(.jpg|.png))$'] 
      }
    };
    this.editMode = props.formInitValues ? true : false;
    this.state = {
      fields: formUtil.initFields(this.formFields, props.formInitValues),
      imageCount: 1
    };
  }

  addImage = e => {
    if(e) e.preventDefault();
    const imageCount = this.state.imageCount + 1;
    const name = `image${imageCount}`;
    let fields = {...this.state.fields};
    let tests = this.state.fields.image1.tests;
    fields[name] = {tests, value: '', errors: []};
    this.setState({imageCount, fields});
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
        this.props.submitAddPortfolioItem(validateForm.fieldValues);
        this.setState({
          fields: formUtil.initFields(this.formFields),
          imageCount: 1
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
        addImage={this.addImage}
        imageCount={this.state.imageCount}
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
