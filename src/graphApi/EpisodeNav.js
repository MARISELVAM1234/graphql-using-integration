import React,{useState} from "react";
import { queryData } from "./querys";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./epiNav.css";

export const EpisodeNav = () => {
  const param = useParams();
  const [searchTerm , setSearchTerm] = useState('')

  const [loadGreeting, { called, loading, data }] = useLazyQuery(queryData);
  if (called && loading) return <p>Loading ...</p>;
  if (!called) {
    return loadGreeting();
  }

  const value = data.episodes.results;
  
  let particularEle = value.filter((ele) => {
    return ele.id === param.id;
  });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <section className="particular">
      <h1 className="part-head">To Display the particular Element</h1>
      <div className="">
        {particularEle.map((element, index) => (
          <div key={index}>
            <div className="part-episode">
              <h3>
                {" "}
                ID : <span> {element.id} </span>
              </h3>
              <h4>
                {" "}
                NAME : <span> {element.name}</span>
              </h4>
              <span>
                character Name :
                 <input onChange={handleChange} type="text"></input>
              </span>
            
            </div>
            <div className="part-element">
              {element.characters.filter((val)=>{
                if(searchTerm === ""){
                   return val 
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
               
                return null
              }).map((ele, index) => (
              // {element.characters.map((ele, inde) => (
                <div className="part-ele-bg" key={index}>
                  <h3>
                    {" "}
                    id : <span>{index + 1}</span>
                  </h3>
                  <h3>
                    {" "}
                    character Name : <span>{ele.name}</span>
                  </h3>
                  <img src={ele.image} alt=""></img>
                </div>
              ))}{" "}
      
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EpisodeNav;
