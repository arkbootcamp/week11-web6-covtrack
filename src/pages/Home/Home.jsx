import React from "react"
import styles from "./Home.module.css"
import imageHeader from "../../images/head.png"
import Typography from '@material-ui/core/Typography';
import PickCountry from '../../components/PickCountry/PickCountry'
// import {Link} from "react-router-dom"

class Home extends React.Component {
  state = {
    name: "Bagus Tri Harjanto"
  }

  componentDidMount() {
    console.log("Component did mount is running")
  }

  render() {
    // untuk pengecekan data masuk atau tidak menggunakan log
    return(
      <div className={styles.container}>
        <img className={styles.image} src={imageHeader} alt="Covid-19"/>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>Terakhir Update : ...</Typography>
        <PickCountry />
        {/* <Link to="/about">About</Link>
        <h1>Halaman Home</h1>
        <p>{this.state.name}</p> */}
      </div>
    )
  }
}

export default Home