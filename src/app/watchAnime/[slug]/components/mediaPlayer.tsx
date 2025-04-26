'use client'
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { useParams } from 'next/navigation';
import EpisdoeNumbers from './episodesNumbers';
import { Suspense } from 'react';
const MediaPlayers = () => {
    const { slug } = useParams();
    console.log(slug)

    return (
        <>
        <Suspense fallback={"loading..."}>
        <MediaPlayer controls title="Sprite Fight" src="/sample-video.mp4" playsInline poster="/Imagebannerlogo.png"  className='max-w-[981px] max-h-[552px]'>
        <MediaProvider />
      </MediaPlayer>
      </Suspense>
      <EpisdoeNumbers/>
      </>
    )
}

export default MediaPlayers;
