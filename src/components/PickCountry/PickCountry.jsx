import React from "react"
import styles from "./PickCountry.module.css"
import { FormControl, NativeSelect } from '@material-ui/core';

const PickCountry = () => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="">Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default PickCountry