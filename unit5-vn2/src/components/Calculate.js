import React,{useState} from "react";

const Calculate = () =>{
    const [Num1,setNum1] = useState()
    const [Num2,setNum2] = useState()
    const [Sum,setSum] = useState()
    const [Mul,setMul] = useState()

    const handleOnSum = () => {
        setSum(Num1+Num2)
    }
    const handleOnMul = () => {
        setMul(Num1*Num2)
    }
    
    return(
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="h-2/3 w-1/3 border-2 rounded-lg">
                <h1 className="border-b-2">Calculate</h1>
                <ul className="flex flex-col gap-4">
                    <li>
                        <input type="Text" placeholder="Nhập số thứ nhất" value={Num1} onChange={(e)=>setNum1(e.target.value)} />
                    </li>
                    <li>
                        <input type="text" placeholder="Nhập số thứ hai" value={Num2} onChange={(e)=>setNum2(e.target.value)}></input>
                    </li>
                    <li className="flex gap-4">
                        <button className="border-2" onClick={handleOnSum} >Tính tổng</button>
                        <button className="border-2" onClick={handleOnMul} >Tính Tích</button>
                    </li>
                    <li>
                        <h2>Tổng: {Sum}</h2>
                    </li>
                    <li>
                        <h2>Tích: {Mul} </h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Calculate;