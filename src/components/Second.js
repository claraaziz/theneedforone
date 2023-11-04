const Second = ({name, setClick, setName}) => {

    const thename = name;
    const handleButton = () => {
        setClick(0);
        setName("");
    }

    return <div className="grid justify-items-center duration-500 ease-in-out transform transition-opacity" dir="rtl">
        <form className='grid justify-items-center'>
            <p className="lg:text-5xl drop-shadow-xl text-slate-300 font-bold text-center lg:ml-52 lg:mr-52 leading-normal lg:leading-normal ml-10 mr-10 text-2xl md:text-3xl">"فَأَجَابَ يَسُوعُ وَقَالَ لَها: «{thename}، {thename}، أَنْتِ تَهْتَمِّينَ وَتَضْطَرِبِينَ لأَجْلِ أُمُورٍ كَثِيرَةٍ، وَلكِنَّ الْحَاجَةَ إِلَى وَاحِدٍ.»"</p>
            <p className="lg:text-5xl drop-shadow-xl text-slate-300  font-bold text-center lg:ml-52 lg:mr-52 leading-normal lg:leading-normal ml-10 mr-10 text-2xl md:text-3xl">(لو 10: 41-42)</p>
            <input type='button' value="Back" className='bg-emerald-300 shadow-xl lg:text-2xl pr-7 pl-7 pb-2 pt-2 mt-5 rounded-lg font-bold cursor-pointer md:text-xl' onClick={handleButton}/>
        </form>
    </div>
}

export default Second;