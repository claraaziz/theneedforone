import {useState} from 'react';
import Second from './Second';

const Main = () => {

    const [num, setNum] = useState(0);
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

    const handleBg = (k) => {
        setNum(k);
    }

    const links = [
        "https://www.fullofeyes.com/wp-content/uploads/2017/10/Radiance-768x768.jpg.webp",
        "https://i.pinimg.com/564x/43/f7/b0/43f7b0917c228ee6013db8d9bfa6d805.jpg",
        "https://i.pinimg.com/564x/30/97/46/309746dbfd35b8aa61bbcdcdd9f65ec9.jpg",
        "https://i.pinimg.com/564x/0c/38/92/0c389279671121a3989483a284b7475e.jpg",
        "https://i.pinimg.com/564x/e9/45/2c/e9452ca0c25a053f28ca16141af7f73c.jpg",
        "https://i.pinimg.com/564x/25/2a/09/252a0941ef0de4a8842ceff70cff3d01.jpg",
        "https://i.pinimg.com/564x/76/1b/b5/761bb55619ee819e649b122d3b557c43.jpg",
        "https://i.pinimg.com/564x/00/ce/65/00ce65cad02f2dc2305a2579be8cb78a.jpg",
        "https://i.pinimg.com/564x/8e/8e/b3/8e8eb3c7eb2b903a9e461931ba2819bd.jpg",
        "https://i.pinimg.com/564x/a1/24/a6/a124a639d28b607899bf733605008b19.jpg"
    ]

    // const link = "https://i.pinimg.com/564x/25/2a/09/252a0941ef0de4a8842ceff70cff3d01.jpg";

    switch(click){
        default:
            return <div className="grid justify-items-center duration-500 ease-in-out transform transition-opacity">
                <p className="text-3xl text-slate-300 mb-8 ml-14 mr-14 font-bold lg:text-5xl drop-shadow-lg">Please write your name here :)</p>
                <form className='grid justify-items-center'>
                    <input type="text" className="outline-1 outline-slate-800 shadow-lg rounded-md sm:w-96 sm:h-10 appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => handleChange(e.target.value)}/>
                    <input type="button" className='bg-emerald-300 shadow-xl text-lg lg:text-2xl pr-7 pl-7 pb-2 pt-2 mt-5 rounded-lg font-bold cursor-pointer' onClick={()=>setClick(1)} value="Go!" disabled={name===""}/>
                </form>
            </div>
        case 1:
            return <div className='h-full w-full flex items-center justify-center transition-all duration-500 ease-in-out transform bg-black bg-opacity-60' style={{
                backgroundImage: `url(${links[num]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no',
                backgroundBlendMode: 'color-burn',
              }}>
                <div><Second name={name} setClick={clicked} setName={handleName} setNum={handleBg}/></div>
            </div>
    }
}

export default Main;