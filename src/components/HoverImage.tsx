import { cn } from '@/lib/utils';

interface HoverImageProps {
  src: string;
  alt: string;
  description: string;
  category?: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  loading?: 'lazy' | 'eager';
}

const HoverImage = ({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = 'auto',
  loading = 'lazy',
}: HoverImageProps) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: '',
  };

  return (
    <div 
      className={cn(
        'group relative overflow-hidden cursor-pointer img-card',
        aspectClasses[aspectRatio],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(
          'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110',
          imageClassName
        )}
      />
    </div>
  );
};

export default HoverImage;
