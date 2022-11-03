import { queryData } from "./querys";
import { useLazyQuery } from "@apollo/client";
import { Section } from "./EpisodeStyle";
import { Button } from "./EpisodeStyle";
import { useNavigate } from "react-router-dom";

export const Episodes = () => {
  const navigate = useNavigate();
  const [loadGreeting, { called, loading, data }] = useLazyQuery(queryData);
  if (called && loading) return <p>Loading ...</p>;
  if (!called) {
    return loadGreeting();
  }
  const value = data.episodes.results;
  console.log(value);

  const btnNav = (ele) => {
    navigate(`/epiNav/${ele.id}`);
  };

  return (
    <Section>
      <h1 className="tele-head">Television show All the Episodes</h1>
      <div className="tele">
        {value.map((element, index) => (
          <div className="tele-episode" key={index}>
            <h3>
              {" "}
              ID : <span> {element.id} </span>
            </h3>
            <h4>
              {" "}
              NAME : <span> {element.name}</span>
            </h4>
            <h4>
              Release Date : <span> {element.air_date}</span>
            </h4>
            <Button onClick={() => btnNav(element)}>VIEW MORE</Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Episodes;
