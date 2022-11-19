
type Props = { data: Array}

function Colors({data}: Props) {
  return <ul className="colors">
    {
      data.map((index:number) => {
        return <li key={index}></li>
      })
    }
</ul>
}

export default Colors