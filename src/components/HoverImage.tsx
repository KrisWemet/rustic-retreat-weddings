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
  description,
  category,
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
        'group relative overflow-hidden cursor-pointer',
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
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        {category && (
          <span className="text-secondary text-xs uppercase tracking-wider mb-1">
            {category}
          </span>
        )}
        <p className="text-primary-foreground text-sm md:text-base leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HoverImage;
