/**
 * Person component
 */
import React, { Component } from "react";
import { useState } from 'react';
import styled from "styled-components";

const ImgClass = styled.div`
  > img {
    width: 120px;
    height: 120px;
    border-radius: 30px;
    object-fit: cover;
    margin-right: 10px;
    transition: 0.4s box-shadow;

    @media screen and (max-width: 900px) {
      margin-right: 5px;
      width: 80px;
      height: 80px;
    }
  }

  &:hover > img {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const checkImageExists = (imageName) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imageName;
  });
};

function ProfileImage({name}){
  const [renderImage, setRenderImage] = useState('/default_profile.jpg');

  let cleanedName = name
  .toLowerCase()
  .replace(' ', '')
  .replace('-', '')
  .replace(/ă/g, 'a')
  .replace(/ș/g, 's')
  .replace(/ț/g, 't')
  .replace(/î/g, 'i')

  let jpgPhoto = '/api/photos/' + cleanedName + '.jpg';
  let pngPhoto = '/api/photos/' + cleanedName + '.png';

  checkImageExists(jpgPhoto).then((imageExists) => {
    if (imageExists) {
      setRenderImage(jpgPhoto);
    } else {
      checkImageExists(pngPhoto).then((imageExists) => {
        if (imageExists)
          setRenderImage(pngPhoto);
      })
    }
  })
  .catch((error) => {
    console.error('Error checking image existence:', error);
  });

  return <div>
    <ImgClass>
    <img alt={name} src={renderImage} />
    </ImgClass>
  </div>;
}

export default ProfileImage
