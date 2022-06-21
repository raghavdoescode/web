const Card = (props) => {
  return (
    <div className="card" style={{ width: props.width, height: props.height, margin: props.margin }}>
      <h1 className="card-h1">{props.title}</h1>

      <p className="card-p">
        {props.text}
      </p>
    </div>
  )
}

export default Card;
