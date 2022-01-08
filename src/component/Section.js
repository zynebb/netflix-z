import data from "../data.json";
const Section = () => {
  return (
    <div>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.category}</h2>
            <ul>
              {element.images.map((element, index) => {
                console.log(element);
                return (
                  <li key={index}>
                    <img src={element} alt="imagess de Netflix" />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Section;
