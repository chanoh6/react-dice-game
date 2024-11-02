import './Button.css';

const Button = ({children, onClick, color = 'blue', className = ''}) => {
   const classNams = `Button ${color} ${className}`;

    return (
        <button className={classNams} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;