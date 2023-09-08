import { useContext} from 'react';
import sbox from '@/assets/icons/sbox.svg';
import { LoadingContext } from '@/states/context/LoadingContext';
const Loading = () => {
  const { loading } = useContext(LoadingContext);
  console.log(loading);
  return (
    (loading.display)?(null):(
    <div className={`w-[100%] flex items-center justify-center fixed`}>
     <div className='w-[256px] h-[256px] bg-blue-400 blur-[350px] absolute bg-opacity-70'>
     </div>
     <div className="grids w-[100%] grid justify-center grid-cols-3 grid-rows-3">
      <div className="border-dashed border-b-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-x-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-b-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-y-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-y-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-t-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-t-[0.2px] border-blue-100/[0.2]"></div>
      <div className="border-dashed border-t-[0.2px] border-blue-100/[0.2]"></div>
     </div>
      <img className="logo w-[128px] z-10 absolute" src={sbox} alt="logo"/>
    </div>)
  );
};

export default Loading;
