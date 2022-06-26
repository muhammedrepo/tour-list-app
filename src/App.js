import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const Main = styled.div`
  ${tw`my-20 mx-auto flex flex-col items-center justify-center`}
`;

const Title = styled.div`
  ${tw`text-2xl text-center capitalize mb-16`}
`;

const Button = styled.button`
  ${tw`
  py-1
   px-2
   lg:px-8
   xl:px-10
   w-48
   inline-flex
   items-center
   justify-center
   capitalize
   cursor-pointer
   text-center text-blue-500 text-base
   border border-blue-500
   rounded-md
   hover:bg-blue-500 hover:border-blue-500 hover:text-white
   transition`}
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <Main>
        <Loading />
      </Main>
    );
  }
  if (tours.length === 0) {
    return (
      <Main>
        <Title>
          <h2>no tours left</h2>
        </Title>
        <Button onClick={fetchTours}>refresh</Button>
      </Main>
    );
  }
  return (
    <Main>
      <Tours tours={tours} removeTour={removeTour} />
    </Main>
  );
}

export default App;
