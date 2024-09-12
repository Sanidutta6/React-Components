import { useEffect, useState } from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState("oiwenwinchfls");
    const [length, setLength] = useState(8);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [specials, setSpecials] = useState(false);
    const [btnText, setBtnText] = useState("Copy");

    useEffect(() => {
        let passwordChars = "abcdefghijklmnopqrstuvwxyz";
        if (uppercase) {
            passwordChars += "ABCDEFGHIJLKMNOPQRSTUVWXYZ";
        }
        if (numbers) {
            passwordChars += "0123456789";
        }
        if (specials) {
            passwordChars += "!@#$%^&*()_+/*-.,[]{}";
        }
        const max = passwordChars.length;
        let temp = "";
        for (let i = 0; i < length; i++) {
            const charIdx = Math.floor(Math.random() * max);
            temp += passwordChars[charIdx];
        }
        setPassword(temp);
    }, [length, uppercase, numbers, specials]);

    return (
        <div className="min-w-[600px] border border-white rounded p-3">
            <h1 className="text-3xl font-semibold tracking-tight mb-3 text-center">Password Generator</h1>
            {/* display */}
            <div className="w-full px-4 py-2 flex items-center justify-between border border-white rounded">
                <span className="text-xl font-semibold tracking-tight">{password}</span>
                <button
                    className="px-6 py-2 rounded border border-white hover:border-slate-500 font-medium"
                    onClick={() => { navigator.clipboard.writeText(password); setBtnText("Copied"); setTimeout(() => { setBtnText("Copy"); }, 1000); }}>
                    {btnText}
                </button>
            </div>
            {/* Customization */}
            <div>

                <form className="mt-5">
                    <div className="flex flex-col justify-center mb-5">
                        <label htmlFor="password-length" className="font-medium mb-1">Password Length {`(${length})`}:</label>
                        <input type="range" name="password-length" id="password-length" min={8} max={32} value={length} onChange={(e) => { setLength(e.target.value) }} />
                    </div>
                    <h3 className="text-xl font-medium">Include Characters:</h3>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center">
                            <input className="h-4 w-4 mr-2" type="checkbox" name="uppercase" id="uppercase" checked={uppercase} onChange={(e) => { setUppercase(e.target.checked) }} />
                            <label htmlFor="uppercase">Uppercase</label>
                        </div>
                        <div className="flex items-center">
                            <input className="h-4 w-4 mr-2" type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={(e) => { setNumbers(e.target.checked) }} />
                            <label htmlFor="numbers">Numbers</label>
                        </div>
                        <div className="flex items-center">
                            <input className="h-4 w-4 mr-2" type="checkbox" name="symbols" id="symbols" checked={specials} onChange={(e) => { setSpecials(e.target.checked) }} />
                            <label htmlFor="symbols">Symbols</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordGenerator;