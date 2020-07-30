import React from 'react';
import './Components.css'

const UserInput = (props) => {

    const styles = {
        first: {
            fontSize: 14,
            color: '#000',
            fontFamily: "serif",
            textAlign: "center",
            letterSpacing: 3,
            border: 1,
            borderColor: '#222',
            margin: 20

        },
        second: {
            fontsize: 12,
            color: '#888',
            fontFamily: "sans-serif",
            textAlign: "justify",
            margin: 20
        }
    }

    return(
        <div className="UserOutput">
            <p style={styles.first}>
                {props.firstP}
            </p>
            <p style={styles.second}>
                {props.children}
            </p>
        </div>
    );
}

export default UserInput;