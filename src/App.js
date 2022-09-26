import {useState,useEffect} from 'react';

import MultiSelect from 'components/select/MultiSelect';

import PROGRAMS_DATA from 'data/ProgramsData';

import './App.css';

function App() {
  const [programs,setPrograms]=useState(PROGRAMS_DATA);
  const [selectPrograms,setSelectPrograms]=useState([]);
  const [selectIsOpen,setSelectIsOpen]=useState(false);

  const selectToggleHandler=()=>{
    setSelectIsOpen(!selectIsOpen);
  };

  const clickHandler=(program)=>{
    setSelectIsOpen(false);
    setSelectPrograms([...selectPrograms,program.programName]);
  };

  const removeHandler=(i)=>{
    setSelectIsOpen(false);
    setSelectPrograms(selectPrograms.filter((_,index)=>index!==i));
  };

  useEffect(()=>{
    setPrograms(PROGRAMS_DATA.filter(program=>selectPrograms.indexOf(program.programName)===-1)); //找出兩個array不同的值
  },[selectPrograms]);

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <MultiSelect selectIsOpen={selectIsOpen} selectPrograms={selectPrograms} programs={programs} selectToggleHandler={selectToggleHandler} clickHandler={clickHandler} removeHandler={removeHandler} />
      </div>
    </section>
  );
}

export default App;