import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
    render() {
        return (
            <div className={styles.button} role="button">Click me</div>
            )
    }
}
export default Button