import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SingleTour = styled.article`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  ${tw`
bg-white rounded-md my-8 mx-0 transition-all
`}
`;

const Image = styled.img`
  ${tw`
w-full h-80 object-cover border-top-right-radius[0.25px] border-top-left-radius[0.25px]
`}
`;

const Footer = styled.footer`
  ${tw`flex flex-col items-center justify-center py-6 px-8`}
`;
const TourInfo = styled.div`
  h4 {
    margin-bottom: 0;
  }
  ${tw`flex justify-between items-center mb-6 w-full`}
`;
const TourPrice = styled.h4`
  ${tw`text-blue-500 bg-blue-100 py-1 px-2 rounded-md`}
`;

const Button = styled.button`
  ${tw`
  py-1
   px-2
   lg:px-8
   xl:px-10
   w-52
   inline-flex
   items-center
   justify-center
   capitalize
   cursor-pointer
   text-center text-red-500 text-base
   border border-red-500
   rounded-md
   hover:bg-red-500 hover:border-red-500 hover:text-white
   transition`}
`;

const ReadMoreButton = styled.button`
  ${tw`
   text-blue-500 capitalize pl-1
   bg-transparent border-transparent
   `}
`;

function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <SingleTour>
      <Image src={image} alt={name} />
      <Footer>
        <TourInfo>
          <h4>{name}</h4>
          <TourPrice>${price}</TourPrice>
        </TourInfo>
        <p className="mb-5">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <ReadMoreButton onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </ReadMoreButton>
        </p>
        <Button onClick={() => removeTour(id)}>not interested</Button>
      </Footer>
    </SingleTour>
  );
}

export default Tour;
