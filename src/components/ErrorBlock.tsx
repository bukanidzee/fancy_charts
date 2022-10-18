const ErrorBlock = ({error}: {error:string}) =>
  <>
    {error &&
      <p className='error'>{error}</p>}
  </>

export default ErrorBlock
