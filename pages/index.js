import Image from 'next/image';
import cat1 from '../public/images/cat1.gif';
import cat2 from '../public/images/cat2.gif';
import cat3 from '../public/images/cat3.gif';

export default function Home() {
  const CAT_LIST = [
    {
      id: 'c1',
      src: cat1,
      title: 'cat1',
    },
    {
      id: 'c2',
      src: cat2,
      title: 'cat2',
    },
    {
      id: 'c3',
      src: cat3,
      title: 'cat3',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row'>
      <h1 className='text-3xl'>요망한 고양이!</h1>
      {CAT_LIST.map((cat) => (
        <div
          key={cat.id}
          className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'
        >
          <Image
            objectFit='cover'
            src={cat.src}
            alt={`Picture of ${cat.title}`}
            layout='fill'
            unoptimized={true}
            priority
          />
        </div>
      ))}
    </div>
  );
}
