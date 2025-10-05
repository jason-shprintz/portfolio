import styled from "styled-components";

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const ExpItemContainer = styled.article`
  display: flex;
  gap: 1rem;
  padding: 2px;
  background-image: linear-gradient(
    to top,
    #646cff,
    #0091ff,
    #00adff,
    #00c5ff,
    #61dafb
  );
  border-radius: 10px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ExpItem = styled.div`
  display: flex;
  background-color: black;
  border-radius: 10px;
`;

export const ExpLeft = styled.div`
  width: 500px;
  padding: 5px;
  @media (max-width: 720px) {
    width: 420px;
  }
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
  padding: 5px;
  border-radius: 10px;
`;
