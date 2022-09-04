import {faFacebook, FaLinkedinIn, FaGoogle} from 'react-icons/fa'

function SignIn(){
  return <div className='w-3/5 p-5'>
    <div className='text-left font-bold'><span className='text-green-500'>Company</span> Name</div>
    <div className='py-10'>
      <h2 className='text-3xl font-bold text-green-500 underline underline-offset-8'>Sign in to your account</h2>
      <div className='flex justify-center my-2'>
        <a href="#">
          <facebook />
        </a>
      </div>
    </div>
  </div>;
}

export default SignIn;