import { useContext } from 'react';
import sbox from '../../../assets/icons/sbox.svg';
import { LoadingContext } from '../../../redux/context/LoadingContext';
const Loading = () => {
  const  {loading} = useContext(LoadingContext);
  return (
   <div className="loading" style={{display:loading?.display}}>
    <img src={sbox} className="sbox" alt="logo" />
   </div>
  );
};

export default Loading;
