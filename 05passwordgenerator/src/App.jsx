import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]~`_";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-5 py-6 my-8 text-white bg-gray-900">
        <h1 className="text-center text-3xl font-bold mb-6 text-blue-400">
          Password Generator
        </h1>

        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-black focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white px-5 py-2 font-medium transition-all"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={1}
              max={32}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-sm text-gray-300">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                className="cursor-pointer focus:ring-2 focus:ring-blue-400"
              />
              <label
                htmlFor="charInput"
                className="text-sm font-medium text-gray-300 cursor-pointer"
              >
                Include Characters
              </label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                className="cursor-pointer focus:ring-2 focus:ring-blue-400"
              />
              <label
                htmlFor="numberInput"
                className="text-sm font-medium text-gray-300 cursor-pointer"
              >
                Include Numbers
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
