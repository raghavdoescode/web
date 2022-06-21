const Button = (props) => {
  return (
    <div>
      <a href={props.url}>
        <button className="btn">{props.text}</button>
      </a>
    </div>
  );
};

export default Button;
