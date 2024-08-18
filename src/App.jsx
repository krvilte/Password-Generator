import { useState,useEffect } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [clipboard, setClipboard] = useState("Copy")
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  function generatePassword(){
    const includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const includeLowercase = "abcdefghijklmnopqrstuvwxyz"
    const includeCharacters = "!@#$%^&*~()-=+*/"
    const includeNumbers ="1234567890"

    let pass = ""
    let str = ""

    str += includeUppercase
    if(lowercase) str += includeLowercase
    if(character) str += includeCharacters
    if(number) str += includeNumbers

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }


  // useEffect
  useEffect(()=>{
    generatePassword()
  },[setPassword ,length, number, character, lowercase])

  return(

    <div className="flex items-center justify-center h-screen">
      <div className="app">
        <div className="header">
          <h1 className="text-lg text-gray-300 text-center font-mono my-5">PASSWORD GENERATOR</h1>
        </div>
        <div className="flex my-3">
          <input className="password bg-gray-700 text-gray-300 px-5 py-2 m-auto w-full text-xl font-mono"
                type="text"
                value= {password}
                id="password"
                placeholder="Password"
                readOnly
                />
          <div className="copy-password">
            <button className="bg-green-400 px-5 py-2 text-xl font-mono min-w-28"
                    id="copy"
                    onClick={()=>{
                      navigator.clipboard.writeText(password);
                      setClipboard("Copied")
                      setTimeout(()=>{
                        setClipboard("Copy")
                      },700)
                    }}>{clipboard}</button>
          </div>
        </div>


        <div className="complexity-control bg-gray-800 p-5">
          <div className="char-length flex flex-col">
            <label htmlFor="length" className="flex justify-between text-lg text-gray-300 font-mono mb-2">Chacacter Length <b className="text-green-400 text-xl font-mono">{length}</b></label>

            <input type="range" 
                  placeholder="Password"
                  className="cursor-pointer"
                  id="length"
                  value={length}
                  max={70}
                  min={4} 
                  onChange={e=> {
                    setLength(e.target.value)
                  }}
                  readOnly/>

          </div>

          <div className="my-5 flex flex-col gap-3">
            <div className="complexity flex align-bottom">
              <input type="checkbox" 
                      name="lowercase" 
                      id="lowercase"
                      className="w-5 h-5 mr-2 relative top-1" 
                      onChange={()=> {
                        setLowercase((prev) => !prev)
                      }}
                      />
                      
              <label htmlFor="lowercase" className="text-lg font-mono text-gray-300">Include Lowercases</label>
            </div>

            
            <div className="complexity flex align-bottom">
              <input type="checkbox" 
                      name="character" 
                      id="character"
                      className="w-5 h-5 mr-2 relative top-1" 
                      onChange={()=> {
                        setCharacter((prev) => !prev)
                      }}
                      />
                      
              <label htmlFor="character" className="text-lg font-mono text-gray-300">Include Characters</label>
            </div>

            <div className="complexity flex align-bottom">
              <input type="checkbox" 
                      name="number" 
                      id="number"
                      className="w-5 h-5 mr-2 relative top-1"
                      onChange={()=> {
                        setNumber((prev) => !prev)
                      }}
                      />
                      
              <label htmlFor="number" className="text-lg font-mono text-gray-300">Include Number</label>
            </div>
          </div>

          <div className="regenerate-password">
            <button className="bg-green-400 px-5 py-2 text-xl font-mono w-full" 
                    onClick={generatePassword}>
              Re-Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
