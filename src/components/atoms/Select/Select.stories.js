import React from 'react';
import SelectIcon from 'assets/icons/select.svg';
import Select from './Select';

export default { title: 'Select' };

export const primarySelect = () => (
  <Select icon={SelectIcon} id="role" name="role" value="">
    <option value="" disabled hidden>
      Kandydat/Pracodawaca
    </option>
    <option value="employee">Kandydat</option>
    <option value="employer">Pracodawaca</option>
  </Select>
);
