import {useState} from 'react';
import Second from './Second';

const Main = () => {

    const [name, setName] = useState("");
    const [click, setClick] = useState(0);
    const [btn, setBtn] = useState(false);

    const clicked = (n) => {
        setClick(n);
        setBtn(!btn);
    }

    const handleChange = (value) => {
        setName(value);
    }

    const handleName = (v) => {
        setName(v);
    }

    console.log(name);

    switch(click){
        case 0:
            return <div className="grid justify-items-center duration-500 ease-in-out transform transition-opacity">
                <p className="text-3xl text-slate-300 mb-8 font-bold lg:text-5xl drop-shadow-lg" dir="rtl">ممكن تكتبي اسمك هنا :)</p>
                <form className='grid justify-items-center'>
                    <input type="text" className="outline-1 outline-slate-800 shadow-lg rounded-md sm:w-96 sm:h-10 appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => handleChange(e.target.value)}/>
                    <input type="button" className='bg-emerald-300 shadow-xl text-lg lg:text-2xl pr-7 pl-7 pb-2 pt-2 mt-5 rounded-lg font-bold cursor-pointer' onClick={()=>setClick(1)} value="Go!" disabled={name===""}/>
                </form>
            </div>
        case 1:
            return <div className='h-full flex items-center justify-center transition-all duration-500 ease-in-out transform bg-black bg-opacity-60' style={{
                backgroundImage: 'url("https://i.pinimg.com/564x/25/2a/09/252a0941ef0de4a8842ceff70cff3d01.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no',
                backgroundBlendMode: 'color-burn',
              }}>
                <div><Second name={name} setClick={clicked} setName={handleName}/></div>
            </div>
    }
}

export default Main;