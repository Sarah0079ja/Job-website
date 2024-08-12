
const Cards = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lgshadow-md`}>
        {children}
    </div>
  )
}

export default Cards