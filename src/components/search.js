import React, { useState } from 'react'
import '.././App.css';

function Search(props) { //ฟังก์ชัน search เก็บ props ไว้
    const { onSearch } = props; //เปลี่ยน props เป็น onSearch

    const [searchText, setSearchText] = useState(""); //useState รับค่าจาก searchText, setSearchText

    const handelInput = (e) => { //
        const text = e.target.value //text คือตัวแปรรับค่าคำค้นหา
        setSearchText(text) //เอา text ไปเก็บใน useState
        console.log(text);
    };
    const handelEnterKeyPressed = (e) => {
        if (e.key === "Enter") {
            onSearch(searchText)
        }
    }
    return (
        <>
            <h1>
                <span>M</span>
                <span>y</span>
                <span>s</span>
                <span>t</span>
                <span>r</span>
                <span>a</span>
                <span>g</span>
                <span>r</span>
                <span>a</span>
                <span>m</span>
            </h1>
            <input
                className="search"
                onChange={handelInput} //ช่อง input
                onKeyPress={handelEnterKeyPressed} //ปุ่ม enter
                type="text"
                value={searchText} //คำค้นหา
                placeholder="Search photos"
            />
        </>
    )

}


export default Search;