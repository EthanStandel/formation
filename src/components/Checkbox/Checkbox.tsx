import React from 'react';
import { AbstractCheckbox } from './AbstractCheckbox';
import './_checkbox.scss';

export class Checkbox extends AbstractCheckbox {
  render() {
    return (
      <label className={this.getClasses()} style={this.props.style}>
        <input
          type={'checkbox'}
          id={this.props.id}
          name={this.props.name}
          checked={this.props.checked}
          disabled={this.props.disabled}
          required={this.props.required}
          className={'checkbox'}
          onChange={this.props.onChange}
          ref={this.props.ref}
        />
        <span className={'checkbox-overlay'} />
        <span className={'checkbox-label'}>{this.getLabel()}</span>
      </label>
    );
  }
}
