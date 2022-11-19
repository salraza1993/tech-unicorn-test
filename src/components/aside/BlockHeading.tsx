
type Props = {
  icon: string | null,
  heading: string,
}

function BlockHeading({ icon, heading }: Props) {
  return <>
    <h5 className="marriweather [ fw-bold mb-3 d-flex justify-content-between align-items-center ]">
      <span>{ heading }</span>
      {icon && <img src={icon} alt="Filter Icon" />}
    </h5>
  </>
}

export default BlockHeading