import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Tour from "./Tour";

const Section = styled.section`
  ${tw`w-[90vh] my-0 mx-auto max-w-[620px]`}
`;

const Title = styled.div`
  ${tw`text-center text-3xl mb-16`}
`;

function Tours({ tours, removeTour }) {
  return (
    <Section>
      <Title>
        <h2>Ours Tours</h2>
      </Title>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </Section>
  );
}

export default Tours;
