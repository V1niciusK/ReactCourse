import React from 'react';
import './Components.css';

const UserInput = (props) => {

    const styles = {
        textArea: {
            height: 30,
            width: 600,
            padding: 5,
            backgroundColor: '#EaE8E8',
            border: 0,
            borderRadius: 25,
            marginHorizontal: 25,
            marginVertical: 25,
            flexDirection: "row",
            alignContent: "center",
            fontSize: 18
        }
    }
    return(
        <div className="UserInput">
            <input
                style={styles.textArea}
                type="text" onChange={props.changeDetected}
                defaultValue={props.defaultUserName}
            />
        </div>
    );
}

export default UserInput;