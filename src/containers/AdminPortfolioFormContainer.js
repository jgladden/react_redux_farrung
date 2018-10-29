import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { mergePortfolioItem } from '../actions';
import AdminPortfolioForm from '../components/AdminPortfolioForm/';
import formUtil from '../utils/formUtil';
import { uniqueId } from '../utils';
import { editPortfolioItemUrl, addPortfolioItemUrl } from '../config';


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
      }
    };
    this.editMode: props.formInitValues ? true : false;
    this.state = {
      status: {},
      fields: formUtil.initFields(this.formFields, props.formInitValues)
    };
  }

  handleChange = e => {
    let fields = formUtil.getUpdatedFields(e, {...this.state.fields});
    this.setState({ fields });
  }

  handleSubmit = e => {
    const {
      mergePortfolioItem
    } = this.props;
    e.preventDefault();
    let validateForm = formUtil.validateForm(
      {...this.state.fields}
    );
    this.setState({fields: validateForm.fields});
    if(validateForm.isValidForm) {
      this.setState({ 
        status: { 
          posting: 1 
        }
      });
      let url = editPortfolioItemUrl;
      let item = validateForm.fieldValues;
      if(!this.editMode) {
        item.id = uniqueId();
        url = addPortfolioItemUrl;
      }
      axios.post(url, item)
        .then(response => {
          let error = response.data.error;
          if(!error) {
            mergePortfolioItem({item});
            let fields = {...this.state.fields};
            if(!this.editMode)
              fields = formUtil.initFields(this.formFields);
            this.setState({
              fields,
              status: {
                success: 1
              }
            });
          } else {
            this.setState({ 
              status: { 
                error 
              }
            });
          }
        })
        .catch(error => {
          this.setState({ 
            status: { 
              error: error.toString() 
            }
          });
        })
    }
  }

  render() {
    const {
      fields,
      status
    } = this.state;
    return (
      <AdminPortfolioForm
        fields={fields}
        handleChange={this.handleChange}
        submitForm={this.handleSubmit}
        status={status}
      />
    );
  }
}

AdminPortfolioFormContainer.propTypes = {
  formInitValues: PropTypes.object,
  mergePortfolioItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps, 
  {
    mergePortfolioItem
  }
)(AdminPortfolioFormContainer);
