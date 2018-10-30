import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPortfolioItem, addPortfolioItem } from 'actions';
import formUtil from 'utils/formUtil';
import { uniqueId } from 'utils';
import PortfolioForm from 'components/Admin/PortfolioForm';

class PortfolioFormContainer extends Component {
    
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
    this.setState({fields: validateForm.fields});
    if(validateForm.isValidForm) {
      this.props.editPortfolioItem(validateForm.fieldValues);
    };      
  }

  getFormStatus = () => {
    const { 
      value: id 
    } = this.state.fields.id;
    const {
      edit,
      add
    } = this.props.portfolio;
    let fs = this.editMode ? edit : add;
    if(!fs || id !== fs.id)  
      fs = {};
    return fs;
  }

  render() {
    return (
      <PortfolioForm
        fields={this.state.fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        formStatus={this.getFormStatus()}
      />
    );
  }
}

PortfolioFormContainer.propTypes = {
  formInitValues: PropTypes.object,
  editPortfolioItem: PropTypes.func.isRequired,
  addPortfolioItem: PropTypes.func
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps, 
  {
    editPortfolioItem,
    addPortfolioItem
  }
)(PortfolioFormContainer);
