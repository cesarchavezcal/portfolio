import React, { useContext } from 'react';

import { GeneralLayout, Profile, ProfileImg, ShotImg, Row, Grid, ShotImgRatio } from '../Components/StyledComponents';
import { DribbbleContext } from '../Context/DribbbleUserContext';
import { DribbbleShotsContext } from './../Context/DribbbleShotsContext';


const Home = () => {
  const { userData } = useContext(DribbbleContext);
  const { shotsData } = useContext(DribbbleShotsContext);
  // eslint-disable-next-line camelcase
  const { avatar_url, bio, name } = userData;
  return (
    <GeneralLayout>
      <Row>
        <Profile>
          <ProfileImg
            src={avatar_url}
            placeholder="avatar_url"
            alt={`Profile picture of ${name}`}
            lazy
          />
        </Profile>
        <h1>{name}</h1>
        <p>{bio}</p>
      </Row>
      <Grid>
        {shotsData.map((shot) => (
          <ShotImgRatio href={shot.html_url}>
            <ShotImg
              key={shot.id}
              src={shot.images.two_x}
              placeholder={shot.images.two_x}
              alt={shot.description}
              lazy
            />
            <small>{shot.title}</small>
          </ShotImgRatio>
        ))}
      </Grid>
    </GeneralLayout>
  );
};

export default Home;
