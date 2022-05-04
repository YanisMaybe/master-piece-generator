import { useEffect, useState } from "react";

const App = () => {

  const [boxSizeValue,setBoxSizeValue] = useState(40);
  const [pounce,setPounce] = useState(true)

  const [colorsNum,setColorsNum] = useState(["#0008ff","#ff0000"])

  const [sizeFray,setSizeFray] = useState(40);

  const array = [];

  for (let index = 0; index < boxSizeValue; index++) {
    array.push("d")
  }

  useEffect(()=>{
    if(pounce){
      const allQ = document.querySelectorAll(".oneLineWidth");
      allQ.forEach(el=>{
        const n = Math.floor(Math.random() * (colorsNum.length-1 + 1));
        console.log(n)
        el.style.backgroundColor = colorsNum[n]
      })
      setPounce(false)
    }
  },[pounce])

  const onClickInGenerate = () => {
    setBoxSizeValue(sizeFray);
    setPounce(!pounce)
  }

  return(
    <>
      <div className="containerOfAll">
        <div className="absoluteElem">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="leftPart">
          <div className="containerOfLeft">
            <div className="aboutAndBigName">
              <div className="about">
                <h3>About</h3>
                <p className="theAboutingText">here is a webapp that generates random figures from several input colors and also other settings</p>
              </div>
              <div className="bigName">
                <h1>Yanis <br/> Kerrouche</h1>
              </div>
            </div>
            <div className="berbarianPart">
              <div className="berbarianFlag">
                <img alt="berbarian flag" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Berber_flag.svg/langfr-225px-Berber_flag.svg.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="middlePart">
          <div className="containerOfMiddle">
            <div className="masterPieceZone">
              <div className="masterPieceText">
                <h2>&lt;&lt;Your masterpiece&gt;&gt;</h2>
              </div>
              <div className="theMasterPiece">
                <div className="containerOfMSTR">
                  {array.map(()=>{
                    return(
                      <div className="oneLineHeight">
                        {array.map(()=>{
                          return(
                            <div className="oneLineWidth"></div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
               
              </div>
            </div>
            <div className="socialZone">
              <ul className="myNetworks">
                <li><a className="grayT" href="https://www.instagram.com/yaniskerrouche00/" target="_blank">Instagram</a></li>
                <li><a className="grayT" href="https://twitter.com/Yaniskerrouche1" target="_blank">Twitter</a></li>
                <li><a className="grayT" href="https://www.linkedin.com/in/yanis-kerrouche-496b5b230/" target="_blank">Linked-in</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightPart">
          <div className="containerOfRight">
            <div className="topPart">
              <div className="presentaionPart">
                <p>Revolutionary</p>
                <h2>Settings</h2>
              </div>
              <div className="slideBars">
                <div className="boxSize bzOne">
                  <div className="text">
                    <p>Custom every box size</p>
                    <p>{sizeFray} unit</p>
                  </div>
                  <input min={5} max={200} value={sizeFray} onChange={e=>{setSizeFray(e.target.value)}} type="range" className="rangeInput inpt" />
                </div>
                <div className="boxSize bzTwo">
                  <div className="text">
                    <p>colors</p>
                  </div>
                  <div className="colors">
                    <div className="colorsZone">
                      {colorsNum.map((a,i)=>{
                        return (
                          <div className={`color${i+1}sParent`}>
                            <p>color {i+1}</p>
                            <input onChange={e=>{
                              const old = [...colorsNum]
                              old[i] = e.target.value;
                              setColorsNum(old)
                            }} min={2} max={50} type="color" value={colorsNum[i]} className={`color${i+1} inputColor`} />
                          </div>
                        )
                      })}
                    </div>
                    <div style={{marginTop:"10px"}} className="addColorButton">
                      <p>Add one more color</p>
                      <button onClick={()=>{
                        setColorsNum(prev=>[...prev,"black"])
                      }} className="btn addColorBtn">Add+</button>
                      <button className="btn resetColorBtn" onClick={()=>{
                        setColorsNum(["#0008ff","#ff0000"]);
                      }}>Reset</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomPart">
              <div className="GenerateButton">
                <button onClick={onClickInGenerate} className="generateButton btn">Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
