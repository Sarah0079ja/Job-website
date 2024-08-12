import ClockLoader from 'react-spinners/ClockLoader'

const Spinner = ({loading}) => {
    const override = {
        display : 'block',
        margin: '100px auto'

    }

  return (
   <ClockLoader 
   color='#4338ca'
   loading={loading}
   cssOverride={override}
   size={150}
   />
  )
}

export default Spinner