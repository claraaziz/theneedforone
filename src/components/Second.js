import { useState } from "react";

const Second = ({name, setClick, setName, setNum}) => {

    const thename = name;

    const verses = [
        `For God so loved ${thename} that He gave His only begotten Son, that if ${thename} believes in Him should not perish but have everlasting life. (John 3:16)`,
        `For God has not given ${thename} a spirit of fear, but of power and of love and of a sound mind. (2 Timothy 1:7)`,
        `“This is the word of the Lord to ${thename}: ‘Not by might nor by power, but by My Spirit,’ Says the Lord of hosts. (Zechariah 4:6)`,
        `Behold what manner of love the Father has bestowed on ${thename}, that ${thename} should be called a child of God! (1 John 3:1)`,
        `Then the word of the Lord came to me, saying: “Before I formed you in the womb I knew you; ${thename}. Before you were born I sanctified you; (Jeremiah 1:5)`,
        `And Jesus answered and said to her, “${thename}, ${thename}, you are worried and troubled about many things. But one thing is needed (Luke 10:41-42)`,
        `“Do not say, ‘I am a youth’, ${thename}. For you shall go to all to whom I send you, And whatever I command you, you shall speak. Do not be afraid of their faces, For I am with you to deliver you,” says the Lord. (Jeremiah 1:7-8)`,
        `“Look, as the clay is in the potter’s hand, so are you in My hand, ${thename}. (Jeremiah 18:6)`,
        `Have I not commanded you, ${thename}? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go. (Joshua 1:9)`,
        `No temptation has overtaken you except such as is common to man, ${thename}; but God is faithful, who will not allow you to be tempted beyond what you are able, but with the temptation will also make the way of escape, that you may be able to bear it. (1 Corinthians 10:13)`
    ]

    const getRandomVerse = () => {
        const i = Math.floor(Math.random() * verses.length);
        setNum(i);
        return verses[i];
      };

      const [verse, setVerse]= useState(getRandomVerse);

      const handleButton = () => {
        setClick(0);
        setName("");
        const randomVerse = getRandomVerse();
        setVerse(randomVerse);
    }

    return <div className="grid justify-items-center duration-500 ease-in-out transform transition-opacity">
        <form className='grid justify-items-center'>
            <p className="lg:text-5xl drop-shadow-xl text-slate-300 font-bold text-center lg:ml-52 lg:mr-52 leading-normal lg:leading-normal ml-10 mr-10 text-2xl md:text-3xl">{verse}</p>
            <input type='button' value="Back" className='bg-emerald-300 shadow-xl lg:text-2xl pr-7 pl-7 pb-2 pt-2 mt-5 rounded-lg font-bold cursor-pointer md:text-xl' onClick={handleButton}/>
        </form>
    </div>
}

export default Second;