import styled from 'styled-components';
import ImageDesigner from 'react-image-designer';

export const GeneralLayout = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 2rem;
`;

export const Profile = styled.figure`
  width: 10rem;
  height: 10rem;

  display: inline-block;
`;

export const ProfileImg = styled(ImageDesigner)`
  border-radius: 100px;
  display: block;
  width: 100%;
  height: 100%!important;
`;

export const ShotImg = styled(ImageDesigner)`
  display: block;
  width: 100%;
  height: auto!important;
  object-fit: cover;
`;

export const ShotImgRatio = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  border-radius: .25rem;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042)
  ;
  transition: box-shadow ease-in 200ms;

  &:hover {
    box-shadow:
      0 3.7px 4.3px rgba(0, 0, 0, 0.059),
      0 8.8px 10.4px rgba(0, 0, 0, 0.085),
      0 16.7px 19.5px rgba(0, 0, 0, 0.105),
      0 29.7px 34.8px rgba(0, 0, 0, 0.125),
      0 55.6px 65.2px rgba(0, 0, 0, 0.151),
      0 133px 156px rgba(0, 0, 0, 0.21);
  }

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((3 / 4) * 100%);
  }
  > img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: .25rem;
  }
`;

export const Row = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  padding: 1rem;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;

  > * {
    text-align: center;
  }
`;


export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
