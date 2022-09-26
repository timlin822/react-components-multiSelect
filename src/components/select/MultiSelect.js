import {FaTimes,FaCaretDown} from 'react-icons/fa';

import './MultiSelect.css';

const MultiSelect=({selectIsOpen,selectPrograms,programs,selectToggleHandler,clickHandler,removeHandler})=>{
    return (
        <div className="select-input" onClick={selectToggleHandler}>
            <div className="select-group">
                {selectPrograms.length>0?selectPrograms.map((selectProgram,index)=>(
                    <div key={index} className="select" onClick={e=>e.stopPropagation()}><span className="select-title">{selectProgram}</span><FaTimes className="select-close" onClick={()=>removeHandler(index)} /></div>
                )):<p className="text">請選擇</p>}
            </div>
            <FaCaretDown className={selectIsOpen?"arrow-icon arrow-icon-rotate":"arrow-icon"} />
            <ul className={(selectIsOpen && programs.length>0)?"select-list select-list-open":"select-list select-list-close"}>
                {programs.map(program=>(
                    <li key={program.id} className="option" onClick={()=>clickHandler(program)}>{program.programName}</li>
                ))}
            </ul>
        </div>
    );
}

export default MultiSelect;