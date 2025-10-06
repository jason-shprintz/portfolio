import styled from "styled-components";

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const ExpItemContainer = styled.article`
  display: flex;
  gap: 1rem;
  padding: 1px;
  background-image: linear-gradient(
    to top,
    #646cff,
    #0091ff,
    #00adff,
    #00c5ff,
    #61dafb
  );
  border-radius: 10px;
`;

export const ExpItem = styled.div`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #0b1220,
    #0f182b,
    #141e36,
    #1a2342,
    #21284d,
    #1f284c,
    #1e284a,
    #1c2849,
    #14223a,
    #101b2c,
    #0c141d,
    #05090e
  );
  border-radius: 10px;
`;

export const ExpLeft = styled.div`
  width: 500px;
  padding: 5px;
`;

export const JobContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const JobImg = styled.img`
  height: 100%;
  border-radius: 10px;
  margin: 5px;
`;

export const ExpRight = styled.div`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
`;
