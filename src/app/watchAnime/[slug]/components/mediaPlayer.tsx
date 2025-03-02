'use client'
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { useParams } from 'next/navigation';
import EpisdoeNumbers from './episodesNumbers';
const MediaPlayers = () => {
    const { slug } = useParams();

    return (
        <>
        <MediaPlayer controls title="Sprite Fight" src="/sample-video.mp4" playsInline poster="/Imagebannerlogo.png"  className='max-w-[981px] max-h-[552px]'>
        <MediaProvider />
      </MediaPlayer>
      <EpisdoeNumbers/>
      </>
    )
}

export default MediaPlayers;
